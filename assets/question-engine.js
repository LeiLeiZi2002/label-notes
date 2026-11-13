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
    if (q.type === 'short-text') fraction = selected.length === 1 && wanted.includes(selected[0]) ? 1 : 0;
    else if (q.type === 'multi' || q.type === 'label-select') {
      const right = selected.filter((v) => wanted.includes(v)).length,
        wrong = selected.filter((v) => !wanted.includes(v)).length;
      fraction = wanted.length ? Math.max(0, (right - wrong) / wanted.length) : Number(selected.length === 0);
    } else fraction = selected.length === 1 && wanted.includes(selected[0]) ? 1 : 0;
    const correct =
      q.type === 'short-text'
        ? fraction === 1
        : selected.length === wanted.length && wanted.every((v) => selected.includes(v));
    return {
      id: q.id,
      objective: q.objective,
      earned: Math.round(fraction * maximum(q) * 100) / 100,
      total: maximum(q),
      correct,
      answered: selected.length > 0,
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
      optionOrder[q.id] = shuffle && q.type !== 'label-select' ? shuffled(ids) : ids;
    });
    return { blocks: (shuffle ? shuffled(blocks) : blocks).map((b) => b.id), options: optionOrder };
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
  function product(p) {
    const box = el('div', undefined, 'question-product');
    if (p.fictional) box.append(el('p', 'Practice label, not a real product', 'eyebrow'));
    if (p.name) box.append(el('p', p.name, 'product-name'));
    if (p.presentationHTML) box.append(html('div', p.presentationHTML));
    else if (p.image) {
      const a = el('a');
      a.href = p.image;
      a.dataset.zoomImage = '';
      a.dataset.imageAlt = p.imageAlt || p.name;
      a.setAttribute('aria-label', `Enlarge ${p.name || 'package'}`);
      const image = el('img');
      image.src = p.displayImage || p.image;
      image.alt = p.imageAlt || p.name;
      a.append(image);
      box.append(a);
    }
    if (p.ingredientsText) {
      const details = el('details', undefined, 'learning-prompt');
      details.append(el('summary', 'Ingredient list as text'), el('p', p.ingredientsText));
      box.append(details);
    }
    if (p.sourceUrl) {
      const a = el('a', p.sourceLabel || 'Product source', 'text-link');
      a.href = p.sourceUrl;
      box.append(a);
    }
    return box;
  }
  function renderQuestion(q, order = {}) {
    const wrap = el('div', undefined, 'question-item');
    wrap.dataset.questionId = q.id;
    if (q.demo) wrap.append(el('p', 'Demo · not part of the course', 'eyebrow'));
    if (q.type === 'scenario') {
      const card = el('div', undefined, 'scenario-card');
      for (const [key, value] of Object.entries(q.scenario || {})) card.append(el('p', `${key}: ${value}`));
      wrap.append(card);
    }
    if (children(q)) {
      if (q.stem) wrap.append(html('h3', q.stem));
      if (q.product) wrap.append(product(q.product));
      children(q).forEach((p) => wrap.append(renderQuestion(p, order)));
      return wrap;
    }
    const group = el('fieldset');
    group.dataset.itemId = q.id;
    const legend = html('legend', q.stem);
    group.append(legend);
    const note = el('p', q.objective ? `Supports ${q.objective}` : 'Demo', 'objective-note');
    group.append(note);
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
      const list = el('div', undefined, 'label-tokens');
      list.setAttribute('role', 'group');
      list.setAttribute('aria-label', 'Select ingredients');
      ordered.forEach((o) => {
        const b = el('button', o.text, 'ingredient-token');
        b.type = 'button';
        b.dataset.tokenId = o.id;
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', () => {
          b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
          b.dispatchEvent(new Event('change', { bubbles: true }));
        });
        list.append(b);
      });
      group.append(list);
    } else {
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
    box.append(
      html('h3', `${result.correct ? 'Correct' : 'Review'} · ${q.stem}`),
      el('p', `Your answer: ${answerText(q, result.values)}`),
      el('p', `Answer: ${q.answerDisplay || answerText(q, result.expected)}`),
    );
    if (q.explanation) box.append(el('p', q.explanation));
    const list = el('ul', undefined, 'option-feedback');
    options(q).forEach((o) => {
      const li = el('li');
      li.append(
        html('strong', `${o.text} — ${o.correct ? 'Correct option' : 'Not the answer'}`),
        el('p', o.feedback || o.note || q.explanation || ''),
      );
      list.append(li);
      if (q.type === 'label-select' && root) {
        const b = [...root.querySelectorAll('[data-token-id]')].find(
          (b) => b.dataset.tokenId === o.id && b.closest('[data-item-id]').dataset.itemId === q.id,
        );
        if (b) {
          b.dataset.correct = String(Boolean(o.correct));
          b.setAttribute(
            'aria-label',
            `${o.text}. ${o.correct ? 'Correct ingredient' : 'Not a target ingredient'}. ${o.note || ''}`,
          );
        }
      }
    });
    if (list.children.length) box.append(list);
    if (q.objective)
      box.append(
        el(
          'p',
          `${q.objective} · ${window.LabelNotesObjectives?.get(q.objective)?.text || ''}`,
          'objective-note',
        ),
      );
    if (q.review) {
      const a = el('a', q.review.label || 'Review this part of the lesson', 'text-link');
      a.href = q.review.href;
      box.append(a);
    }
    return box;
  }
  function renderBlock(block, bank, order = {}) {
    const root = el('div', undefined, 'question-block');
    root.dataset.blockId = block.id;
    if (block.title) root.append(el('h2', block.title));
    if (block.intro) root.append(html('div', block.intro, 'question-context'));
    if (block.product) root.append(product(block.product));
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
    renderBlock,
    read,
    restore,
    feedback,
  };
})();
