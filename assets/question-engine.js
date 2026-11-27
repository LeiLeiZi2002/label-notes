/* Question rendering and scoring shared by practice and chapter checks. No DOM access at load. */
(() => {
  const normalize = (value) =>
    String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[.!]+$/, '');
  // 填空只统一输入格式；正确名称及同义写法仍由各题的答案列表决定。
  const normalizeText = (value) => normalize(String(value ?? '')
    .normalize('NFKC')
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/\s*([()-])\s*/g, '$1'));
  const children = (q) => (q.type === 'scenario' ? [q.task] : q.parts);
  const leaves = (q) => (children(q) ? children(q).flatMap(leaves) : [q]);
  const options = (q) =>
    q.type === 'label-select' ? q.tokens.map((t, i) => ({ ...t, id: t.id || String(i) })) : q.options || [];
  const maximum = (q) =>
    children(q) ? children(q).reduce((sum, p) => sum + maximum(p), 0) : (q.points ?? 1);
  function grade(q, answer) {
    if (children(q)) {
      const parts = children(q).map((p) => grade(p, answer?.[p.id]));
      return {
        id: q.id,
        objective: q.objective,
        earned: parts.reduce((n, p) => n + p.earned, 0),
        total: parts.reduce((n, p) => n + p.total, 0),
        correct: parts.every((p) => p.correct),
        answered: parts.every((p) => p.answered),
        parts,
      };
    }
    const values = Array.isArray(answer) ? answer : answer == null ? [] : [answer];
    const normalizeAnswer = q.type === 'short-text' ? normalizeText : normalize;
    const selected = [...new Set(values.map(normalizeAnswer).filter(Boolean))];
    const expected =
      q.type === 'short-text'
        ? q.acceptedAnswers || []
        : options(q)
            .filter((o) => o.correct)
            .map((o) => o.id);
    const wanted = expected.map(normalizeAnswer);
    let fraction = 0;
    let earned;
    if (q.type === 'short-text') fraction = selected.length === 1 && wanted.includes(selected[0]) ? 1 : 0;
    else if (q.type === 'multi' || (q.type === 'label-select' && q.maxSelections !== 1)) {
      const right = selected.filter((v) => wanted.includes(v)).length,
        wrong = selected.filter((v) => !wanted.includes(v)).length;
      if (q.pointsByHits) earned = Math.max(0, q.pointsByHits[right] - wrong);
      fraction = q.allOrNothing ? Number(right === wanted.length && !wrong)
        : wanted.length ? Math.max(0, (right - wrong) / wanted.length) : Number(selected.length === 0);
    } else fraction = selected.length === 1 && wanted.includes(selected[0]) ? 1 : 0;
    const correct =
      q.type === 'short-text' || q.maxSelections === 1
        ? fraction === 1
        : selected.length === wanted.length && wanted.every((v) => selected.includes(v));
    return {
      id: q.id,
      objective: q.objective,
      earned: earned ?? Math.round(fraction * maximum(q) * 100) / 100,
      total: maximum(q),
      correct,
      answered: selected.length > 0,
      uncertain: selected.includes('unknown'),
      values,
      expected,
    };
  }
  const status = (earned, total, thresholds) =>
    !total
      ? 'Not assessed'
      : earned / total >= thresholds.secure
        ? 'Secure'
        : earned / total >= thresholds.developing
          ? 'Developing'
          : 'Not yet';
  function shuffled(items, random = Math.random) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function orderFor(blocks, questions, shuffle = false) {
    const optionOrder = {};
    questions.flatMap(leaves).forEach((q) => {
      const ids = options(q).map((o) => o.id);
      const ordinary = ids.filter((id) => id !== 'unknown');
      optionOrder[q.id] = shuffle && q.type !== 'label-select' && !q.fixedOrder
        ? [...shuffled(ordinary), ...ids.filter((id) => id === 'unknown')]
        : ids;
    });
    return { blocks: blocks.map((b) => b.id), options: optionOrder };
  }
  function el(tag, text, cls) {
    const e = document.createElement(tag);
    if (text !== undefined) e.textContent = text;
    if (cls) e.className = cls;
    return e;
  }
  // Authored local HTML only, never student input. Strip active content before insertion.
  function html(tag, value, cls) {
    const e = el(tag, undefined, cls);
    e.innerHTML = value || '';
    e.querySelectorAll('script,iframe,object,embed,style').forEach((n) => n.remove());
    e.querySelectorAll('*').forEach((n) =>
      [...n.attributes].forEach((a) => {
        if (/^on/i.test(a.name) || (/^(href|src)$/i.test(a.name) && /^\s*javascript:/i.test(a.value)))
          n.removeAttribute(a.name);
      }),
    );
    return e;
  }
  function product(p, hideTranscript = false) {
    const box = el('div', undefined, `question-product${p.transcriptOpen ? ' label-evidence' : ''}`);
    let packageImage;
    if (p.fictional) box.append(el('p', 'Practice label, not a real product', 'eyebrow'));
    if (p.name) box.append(el('p', p.name, 'product-name'));
    if (p.labelView) {
      const { label, front, back, pending } = p.labelView;
      const figure = el('figure', undefined, 'challenge-label');
      const caption = el('figcaption');
      function photoLink(path, title, preview = false, onLoad) {
        const link = el('a', preview ? undefined : title);
        link.href = path;
        link.dataset.zoomImage = '';
        link.dataset.imageTranscript = '';
        link.dataset.imageAlt = `${p.name} · ${title === 'Enlarge label' ? 'ingredient label' : title}`;
        link.setAttribute('aria-label', title);
        if (preview || pending) {
          const photo = el('img');
          photo.alt = preview ? link.dataset.imageAlt : '';
          photo.loading = preview && !pending ? 'lazy' : 'eager';
          if (pending) {
            link.hidden = true;
            photo.addEventListener('load', () => {
              link.hidden = false;
              onLoad?.();
            });
          }
          if (preview) link.append(photo);
          photo.src = path;
        }
        return link;
      }
      const placeholder = el('p', 'Use the ingredient list below to read this label.', 'source-note');
      placeholder.hidden = !pending;
      const enlarge = el('a', 'Enlarge label', 'text-link');
      enlarge.href = label;
      enlarge.dataset.zoomImage = '';
      enlarge.dataset.imageTranscript = '';
      enlarge.dataset.imageAlt = `${p.name} ingredient label`;
      enlarge.hidden = Boolean(pending);
      caption.append(enlarge, placeholder);
      if (back) caption.append(photoLink(back, 'View full package label'));
      if (p.ingredientsCaption) caption.append(el('p', p.ingredientsCaption, 'source-note'));
      figure.append(photoLink(label, 'Enlarge label', true, () => {
        placeholder.hidden = true;
        enlarge.hidden = false;
      }), caption);
      if (front) {
        const layout = el('div', undefined, 'challenge-packaging');
        const frontFigure = el('figure', undefined, 'challenge-front');
        const frontPhoto = photoLink(front, 'Enlarge package front', true);
        frontPhoto.className = 'package-frame';
        const frontCaption = el('figcaption');
        frontCaption.append(photoLink(front, 'View package front'));
        frontFigure.append(frontPhoto, frontCaption);
        layout.append(frontFigure, figure);
        box.append(layout);
      } else box.append(figure);
    }
    if (p.presentationHTML) box.append(html('div', p.presentationHTML));
    if (p.image && !p.presentationHTML && !p.labelView) {
      const a = el('a');
      a.href = p.image;
      a.dataset.zoomImage = '';
      a.dataset.imageAlt = p.imageAlt || p.name;
      a.setAttribute('aria-label', `Enlarge ${p.name || 'package'}`);
      if (p.packageFront || p.switchViews) a.classList.add('package-frame');
      const image = el('img');
      image.src = p.displayImage || p.image;
      image.alt = p.imageAlt || p.name;
      image.loading = 'lazy';
      a.append(image);
      if (p.switchViews) {
        packageImage = a;
      } else if (p.transcriptOpen) {
        const photo = el('details', undefined, 'package-photo');
        photo.append(el('summary', 'View the package'), a);
        box.append(photo);
      } else box.append(a);
    }
    if (p.ingredientsText && !hideTranscript) {
      if (packageImage) {
        const controls = el('div', undefined, 'package-view-controls');
        controls.setAttribute('role', 'group');
        controls.setAttribute('aria-label', 'Package view');
        const front = el('button', 'Front');
        const ingredients = el('button', 'Ingredients');
        front.type = ingredients.type = 'button';
        const reading = el('p', p.ingredientsText, 'evidence-transcript');
        function showFront(show) {
          front.setAttribute('aria-pressed', String(show));
          ingredients.setAttribute('aria-pressed', String(!show));
          packageImage.hidden = !show;
          reading.hidden = show;
        }
        front.addEventListener('click', () => showFront(true));
        ingredients.addEventListener('click', () => showFront(false));
        controls.append(front, ingredients);
        box.append(controls, packageImage, reading);
        showFront(false);
      } else if (p.transcriptOpen) {
        box.append(el('p', 'Ingredients', 'label-heading'), el('p', p.ingredientsText, 'evidence-transcript'));
      } else {
        const details = el('details', undefined, 'learning-prompt');
        details.dataset.ingredientTranscript = '';
        details.append(el('summary', 'Show ingredient list as text'), el('p', p.ingredientsText));
        box.append(details);
      }
    }
    (p.statements || []).forEach((s) => box.append(el('p', s, 'package-statement')));
    if (p.sourceUrl) {
      const a = el('a', p.sourceLabel || 'Product source', 'text-link');
      a.href = p.sourceUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', `${a.textContent} (opens in a new tab)`);
      box.append(a);
    }
    return box;
  }
  function renderQuestion(q, order = {}) {
    const wrap = el('div', undefined, 'question-item');
    wrap.dataset.questionId = q.id;
    wrap.dataset.questionType = q.type;
    if (q.objective) wrap.dataset.objective = q.objective;
    if (q.demo) wrap.append(el('p', 'Demo · not part of the course', 'eyebrow'));
    if (q.type === 'scenario') {
      const card = el('div', undefined, 'scenario-card');
      for (const [key, value] of Object.entries(q.scenario || {})) card.append(el('p', `${key}: ${value}`));
      wrap.append(card);
    }
    if (children(q)) {
      if (q.stem) wrap.append(html('h3', q.stem));
      if (q.product) wrap.append(product(q.product));
      children(q).forEach((p, index) => {
        const part = renderQuestion(q.type === 'judgment-grid' ? {...p, display: 'judgment-row'} : p, order);
        if (q.type === 'two-tier') {
          const label = p.partLabel || (index === 0 ? 'Your decision' : 'Your reason');
          part.prepend(el('p', `${String(index + 1).padStart(2, '0')} · ${label}`, 'part-label'));
          if (index > 0) {
            part.hidden = true;
            const show = el('button', `Continue to ${label.toLowerCase()}`, 'secondary-link reveal-reason');
            show.type = 'button';
            show.setAttribute('aria-expanded', 'false');
            part.id = `part-${p.id}`;
            show.setAttribute('aria-controls', part.id);
            show.addEventListener('click', () => revealPart(part, true));
            wrap.append(show);
          }
        }
        wrap.append(part);
      });
      return wrap;
    }
    const group = el('fieldset');
    group.dataset.itemId = q.id;
    const legend = html('legend', q.stem);
    group.append(legend);
    if (q.display === 'judgment-row') {
      wrap.classList.add('judgment-row');
      wrap.append(html('p', q.stem, 'judgment-statement'));
      legend.classList.add('visually-hidden');
    }
    if (q.product) group.append(product(q.product));
    const opts = options(q);
    const ids = order[q.id] || opts.map((o) => o.id);
    const ordered = ids.map((id) => opts.find((o) => o.id === id)).filter(Boolean);
    if (q.type === 'short-text') {
      const label = el('label', q.inputLabel || 'Your answer', 'fill-in-label');
      const input = el('input');
      input.type = 'text';
      input.name = q.id;
      input.id = `answer-${q.id}`;
      input.autocomplete = 'off';
      label.htmlFor = input.id;
      label.append(input);
      group.append(label);
    } else if (q.type === 'match') {
      const label = el('label', q.inputLabel || 'Choose a match');
      const select = el('select');
      select.id = `answer-${q.id}`;
      select.name = q.id;
      label.htmlFor = select.id;
      const empty = el('option', q.placeholder || 'Choose an answer');
      empty.value = '';
      select.append(empty);
      ordered.forEach((o) => {
        const op = el('option', o.text);
        op.value = o.id;
        select.append(op);
      });
      label.append(select);
      group.append(label);
    } else if (q.type === 'label-select') {
      if (q.fictional) group.append(el('p', 'Practice label', 'eyebrow'));
      const multiple = q.maxSelections !== 1 && opts.filter((o) => o.correct).length > 1;
      const hint = q.selectionHint || (multiple ? 'Select all that apply.' : 'Choose one.');
      group.append(el('p', `${hint}${multiple ? ' Extra selections lose credit.' : ''}`, 'selection-hint'));
      const list = el('div', undefined, `label-tokens${q.display === 'passage' ? ' passage-tokens' : ' ingredient-list'}`);
      list.setAttribute('role', 'group');
      list.setAttribute('aria-label', q.display === 'passage' ? 'Select a statement' : 'Select ingredients');
      ordered.forEach((o) => {
        const b = el('button', o.text, 'ingredient-token');
        b.type = 'button';
        b.dataset.tokenId = o.id;
        if (o.suffix !== undefined) b.dataset.suffix = o.suffix;
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', () => {
          const selected = b.getAttribute('aria-pressed') !== 'true';
          if (selected && (q.maxSelections === 1 || o.id === 'unknown'))
            group.querySelectorAll('[data-token-id]').forEach((other) => other.setAttribute('aria-pressed', 'false'));
          else if (selected) group.querySelector('[data-token-id="unknown"]')?.setAttribute('aria-pressed', 'false');
          b.setAttribute('aria-pressed', String(selected));
          b.dispatchEvent(new Event('change', { bubbles: true }));
        });
        if (o.id === 'unknown') { b.classList.add('uncertain-choice'); group.append(b); }
        else list.append(b);
      });
      group.insertBefore(list, group.querySelector('.uncertain-choice'));
      if (q.labelFootnote) group.append(el('p', q.labelFootnote, 'label-footnote'));
    } else {
      if (q.type === 'multi') group.append(el('p', q.selectionHint || 'Select all that apply.', 'selection-hint'));
      ordered.forEach((o) => {
        const label = el('label');
        const input = el('input');
        input.type = q.type === 'multi' ? 'checkbox' : 'radio';
        input.name = q.id;
        input.value = o.id;
        input.id = `answer-${q.id}-${o.id}`;
        label.htmlFor = input.id;
        label.append(input, html('span', o.text));
        group.append(label);
      });
    }
    wrap.append(group);
    return wrap;
  }
  function revealPart(part, focus = false) {
    part.hidden = false;
    const button = part.parentElement.querySelector(`[aria-controls="${part.id}"]`);
    if (button) { button.hidden = true; button.setAttribute('aria-expanded', 'true'); }
    if (focus) {
      const heading = part.querySelector('legend');
      heading.tabIndex = -1;
      heading.focus();
    }
    if (focus) part.dispatchEvent(new Event('question-revealed', { bubbles: true }));
  }
  function read(q, root) {
    if (children(q)) return Object.fromEntries(children(q).map((p) => [p.id, read(p, root)]));
    const group = root.querySelector(`[data-item-id="${q.id}"]`);
    if (q.type === 'label-select')
      return [...group.querySelectorAll('[data-token-id][aria-pressed="true"]')].map(
        (b) => b.dataset.tokenId,
      );
    return [...group.querySelectorAll('input,select')]
      .filter((c) => !['radio', 'checkbox'].includes(c.type) || c.checked)
      .map((c) => c.value)
      .filter((v) => v.trim());
  }
  function restore(q, root, answer) {
    if (children(q)) {
      children(q).forEach((p) => restore(p, root, answer?.[p.id]));
      if (q.type === 'two-tier') children(q).slice(1).forEach((p) => {
        const answered = (result) => result.parts ? result.parts.some(answered) : result.answered;
        if (!answered(grade(p, answer?.[p.id]))) return;
        const part = root.querySelector(`[data-question-id="${p.id}"]`);
        revealPart(part);
      });
      return;
    }
    const values = answer || [],
      group = root.querySelector(`[data-item-id="${q.id}"]`);
    group.querySelectorAll('input,select').forEach((c) => {
      if (['radio', 'checkbox'].includes(c.type)) c.checked = values.includes(c.value);
      else c.value = values[0] || '';
    });
    group.querySelectorAll('[data-token-id]').forEach((b) => {
      b.setAttribute('aria-pressed', String(values.includes(b.dataset.tokenId)));
      delete b.dataset.correct;
      b.removeAttribute('aria-label');
    });
  }
  function answerText(q, values) {
    return (values || []).map((v) => options(q).find((o) => o.id === v)?.text || v).join('; ') || 'No answer';
  }
  function feedback(q, answer, root) {
    if (children(q)) {
      const all = el('div');
      children(q).forEach((p) => all.append(feedback(p, answer?.[p.id], root)));
      return all;
    }
    const result = grade(q, answer),
      box = el('div', undefined, 'question-feedback');
    const label = result.correct ? 'Correct' : !result.answered ? 'Not answered' : result.earned > 0 ? 'Partly correct' : 'Review';
    box.dataset.feedbackId = q.id;
    box.append(
      el('p', result.total ? `${label} · ${result.earned} / ${result.total} points` : label, 'feedback-score'),
      html('h3', q.stem),
      el('p', `Your answer: ${answerText(q, result.values)}`),
      el('p', `Answer: ${q.answerDisplay || answerText(q, result.expected)}`),
    );
    const explanation = q.explanation || options(q).filter((o) => o.correct).map((o) => o.feedback || o.note).join(' ');
    if (explanation) box.append(el('p', explanation));
    const list = el('ul', undefined, 'option-feedback');
    const chosen = new Set(result.values);
    options(q).forEach((o) => {
      const li = el('li');
      li.append(
        html('strong', `${o.text} — ${o.correct ? 'Correct option' : 'Not the answer'}`),
        el('p', o.feedback || o.note || q.explanation || ''),
      );
      list.append(li);
      if (chosen.has(o.id) && !o.correct && o.id !== 'unknown')
        box.append(el('p', o.feedback || o.note, 'selected-feedback'));
      if (q.type === 'label-select' && root) {
        const b = [...root.querySelectorAll('[data-token-id]')].find(
          (b) => b.dataset.tokenId === o.id && b.closest('[data-item-id]').dataset.itemId === q.id,
        );
        if (b) {
          b.dataset.correct = String(Boolean(o.correct));
          b.setAttribute(
            'aria-label',
            `${o.text}. ${o.correct ? 'Correct choice' : 'Not the answer'}. ${o.note || ''}`,
          );
        }
      }
    });
    if (list.children.length) {
      const details = el('details', undefined, 'all-option-feedback');
      details.append(el('summary', 'Why each option is right or wrong'), list);
      box.append(details);
    }
    if (q.objective && !root) {
      const goal = el('p', `Learning goal ${q.objective}`, 'objective-note');
      goal.title = window.LabelNotesObjectives?.get(q.objective)?.text || q.objective;
      box.append(goal);
    }
    [q.review, ...(q.references || [])].filter(Boolean).forEach((source) => {
      const evidence = el('div', undefined, 'answer-source');
      if (source.quote) evidence.append(el('blockquote', source.quote));
      const a = el('a', source.label || 'Review this part of the lesson', 'text-link');
      a.href = source.href;
      a.dataset.feedbackReview = '';
      if (/^https?:/.test(source.href)) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', `${a.textContent} (opens in a new tab)`);
      }
      evidence.append(a);
      box.append(evidence);
    });
    return box;
  }
  function renderBlock(block, bank, order = {}) {
    const root = el('div', undefined, 'question-block');
    root.dataset.blockId = block.id;
    if (block.title) root.append(el('h2', block.title));
    if (block.intro) root.append(html('div', block.intro, 'question-context'));
    if (block.product) {
      const first = bank.questions.find((q) => q.id === block.questionIds[0]);
      root.append(product(block.product, !block.product.showTranscript && first?.type === 'label-select' && first.display !== 'passage'));
    }
    if (block.products) {
      const compare = el('div', undefined, 'product-comparison');
      block.products.forEach((p) => compare.append(product(p)));
      root.append(compare);
    }
    block.questionIds.forEach((id) => {
      const q = bank.questions.find((q) => q.id === id);
      root.append(renderQuestion(q, order));
    });
    return root;
  }
  window.LabelNotesQuestions = {
    normalize,
    grade,
    status,
    leaves,
    maximum,
    options,
    orderFor,
    el,
    html,
    product,
    renderQuestion,
    revealPart,
    renderBlock,
    read,
    restore,
    feedback,
  };
})();
