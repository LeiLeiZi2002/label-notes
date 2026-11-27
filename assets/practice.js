/* Practice: confidence, graduated hints and useful next steps. */
(() => {
  const E = window.LabelNotesQuestions,
    chapter = document.body.dataset.chapter;
  const bank = window.LabelNotesBanks[chapter];
  let pauseCurrent = () => {};
  document.querySelectorAll('[data-check-summary]').forEach((host) => {
    const config = window.LabelNotesCourse[chapter];
    host.textContent = `${bank.blocks.filter((b) => b.set === 'chapter-check').length} question groups · ${config.timeLimitSeconds == null ? 'untimed' : `${config.timeLimitSeconds / 60} min`}`;
  });
  document
    .querySelectorAll('[data-objectives]')
    .forEach((host) => window.LabelNotesObjectives.render(host, host.dataset.objectives));
  document.querySelectorAll('[data-lesson-step]').forEach((section) => {
    if (!section.querySelector('[data-practice-section]')) {
      const slot = E.el('div');
      slot.dataset.practiceSection = section.id;
      section.insertBefore(slot, section.querySelector('.exam-invitation'));
    }
  });
  document.querySelectorAll('[data-practice-section]').forEach((slot) => {
    bank.blocks
      .filter(
        (b) => b.section === slot.dataset.practiceSection && !['pretest', 'chapter-check', 'warm-up'].includes(b.set),
      )
      .forEach((b) => {
        const host = E.el('div');
        host.id = b.id;
        host.dataset.practiceBlock = b.id;
        slot.append(host);
      });
  });
  document.querySelectorAll('[data-practice-block]').forEach((host) => {
    const block = bank.blocks.find((b) => b.id === host.dataset.practiceBlock);
    if (!block) return;
    const qs = block.questionIds.map((id) => bank.questions.find((q) => q.id === id));
    const past = window.LabelNotesProgress?.read().practice || {};
    const saved = past[block.id] || past[block.priorPractice];
    let state = saved?.current || {
      answers: {},
      confidence: '',
      hints: 0,
      elapsedMs: 0,
      questionTimes: {},
      attempts: 0,
    };
    let since = Date.now(),
      activeItem = E.leaves(qs[0])[0].id,
      timing = false,
      pageVisible = !document.hidden;
    const form = E.el('form', undefined, 'knowledge-check');
    form.noValidate = true;
    const challenge = host.closest('[data-practice-section="try-new-label"]');
    const parts = challenge ? [...challenge.querySelectorAll('[data-practice-block]')] : [];
    const partIndex = parts.indexOf(host);
    const isFirst = partIndex === 0 && parts.length > 1;
    const second = isFirst ? parts[1] : null;
    let lockedNote;
    if (second) {
      second.hidden = !saved?.latest;
      lockedNote = E.el('p', 'Complete Part 1 above to unlock Part 2', 'challenge-lock');
      lockedNote.hidden = !second.hidden;
      second.before(lockedNote);
    }
    if (partIndex >= 0 && parts.length > 1) {
      form.append(E.el('p', `Part ${partIndex + 1}`, 'eyebrow challenge-part'));
    }
    const rendered = E.renderBlock(block, bank);
    form.append(rendered);
    host.append(form);
    const confidence = E.el('fieldset', undefined, 'confidence');
    const legend = E.el('legend', 'Confidence (optional):', 'visually-hidden');
    const segments = E.el('div', undefined, 'confidence-segments');
    confidence.append(legend, E.el('span', legend.textContent, 'confidence-caption'), segments);
    confidence.querySelector('.confidence-caption').setAttribute('aria-hidden', 'true');
    [
      ['sure', 'Sure'],
      ['think', 'Think so'],
      ['guess', 'Guessing'],
    ].forEach(([value, text]) => {
      const label = E.el('label', text),
        input = E.el('input');
      input.type = 'radio';
      input.name = `confidence-${block.id}`;
      input.value = value;
      input.checked = state.confidence === value;
      label.prepend(input);
      segments.append(label);
    });

    const hintList = E.el('ol', undefined, 'hint-list'),
      hints = [...new Set(qs.flatMap((q) => q.hints || []))];
    const hintButton = E.el('button', 'Show a hint', 'secondary-link');
    hintButton.type = 'button';
    const paintHints = () => {
      hintList.replaceChildren(...hints.slice(0, state.hints).map((t) => E.el('li', t)));
      hintButton.hidden = state.hints >= hints.length;
      hintButton.textContent = state.hints ? 'Show the next hint' : 'Show a hint';
    };
    if (block.set === 'label-practice' && hints.length) {
      form.append(hintButton, hintList);
      paintHints();
    }
    const submit = E.el('button', 'Check my answer', 'check-button');
    submit.type = 'submit';
    const controls = E.el('div', undefined, 'practice-controls');
    controls.append(confidence, submit);
    form.append(controls);
    const feedback = E.el('div', undefined, 'check-feedback');
    feedback.hidden = true;
    feedback.tabIndex = -1;
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    form.append(feedback);
    const stamp = () => {
      const now = Date.now();
      if (timing && pageVisible) {
        const delta = now - since;
        state.elapsedMs += delta;
        state.questionTimes[activeItem] = (state.questionTimes[activeItem] || 0) + delta;
      }
      since = now;
    };
    const save = () => {
      stamp();
      state.answers = Object.fromEntries(qs.map((q) => [q.id, E.read(q, form)]));
      window.LabelNotesProgress?.savePractice(block.id, { ...state });
    };
    hintButton.addEventListener('click', () => {
      state.hints++;
      paintHints();
      save();
    });
    form.addEventListener('focusin', (e) => {
      pauseCurrent();
      activeItem = e.target.closest('[data-item-id]')?.dataset.itemId || activeItem;
      since = Date.now();
      timing = true;
      pauseCurrent = () => {
        stamp();
        timing = false;
      };
    });
    form.addEventListener('change', () => {
      state.confidence = confidence.querySelector('input:checked')?.value || '';
      feedback.hidden = true;
      submit.disabled = false;
      save();
    });
    form.addEventListener('input', save);
    window.addEventListener('pagehide', save);
    document.addEventListener('visibilitychange', () => {
      stamp();
      pageVisible = !document.hidden;
    });
    window.addEventListener('hashchange', () => {
      stamp();
      if (host.closest('[hidden]')) timing = false;
    });
    qs.forEach((q) => E.restore(q, form, state.answers[q.id]));
    function reviewLink(source) {
      const link = E.el('a', source.label, 'text-link');
      link.href = source.href;
      if (source.href.startsWith(`${chapter}.html#`)) link.dataset.review = host.id;
      return link;
    }
    function firstMiss(q, outcome) {
      const wrongChoiceClue = outcome.values.map(value => q.retryOnWrong?.[value]).find(Boolean);
      if (q.retryNoHits) {
        const hits = outcome.values.filter(value => outcome.expected.includes(value)).length;
        const clue = hits === 0 ? q.retryNoHits
          : hits < outcome.expected.length ? q.retryHint
          : 'You found every sweetener. Remove any selections that do a different job.';
        return [clue, wrongChoiceClue].filter(Boolean).join(' ');
      }
      if (wrongChoiceClue) return wrongChoiceClue;
      const missingChoiceClue = outcome.expected.filter(value => !outcome.values.includes(value))
        .map(value => q.retryOnMissing?.[value]).find(Boolean);
      if (missingChoiceClue) return missingChoiceClue;
      const hint = q.retryHint || q.hints?.[0];
      if (q.type !== 'multi') return hint;
      const found = outcome.values.filter((value) => outcome.expected.includes(value));
      const missing = outcome.expected.length - found.length;
      const extra = outcome.values.length - found.length;
      const counts = [];
      if (missing) counts.push(`${missing} missing`);
      if (extra) counts.push(`${extra} extra`);
      const clue = (found.length === 1 && q.retryClues?.[found[0]])
        || (!found.length && q.retryClues?.none) || hint;
      return [`${counts.join(', ')}.`, clue].filter(Boolean).join(' ');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      save();
      const outcomes = qs.map((q) => E.grade(q, state.answers[q.id]));
      feedback.hidden = false;
      feedback.replaceChildren();
      if (outcomes.some((o) => !o.answered)) {
        const missing = qs.flatMap(E.leaves).find((q) => !E.grade(q, E.read(q, form)).answered);
        const field = form.querySelector(`[data-item-id="${missing.id}"]`);
        feedback.append(E.el('p', `Please answer this question first: ${field.querySelector('legend').textContent}`));
        field.querySelector('input, select, button').focus();
        field.scrollIntoView({ block: 'center', behavior: 'instant' });
        return;
      }
      state.attempts++;
      const correct = outcomes.every((o) => o.correct);
      if (!correct && block.retryBeforeReveal) state.wrongSubmissions = (state.wrongSubmissions || 0) + 1;
      feedback.append(E.el('h3', correct ? 'All parts correct' : 'Take another look'));
      const revealAnswers = () => {
        feedback.replaceChildren(E.el('h3', correct ? 'All parts correct' : 'Answer and explanation'));
        qs.forEach((q) => feedback.append(E.feedback(q, state.answers[q.id], form)));
        feedback.querySelectorAll('a').forEach((a) => {
          if (a.getAttribute('href')?.startsWith(`${chapter}.html#`)) a.dataset.review = host.id;
        });
        feedback.append(retry);
      };
      function appendNextStep() {
        const next = E.el('div', undefined, 'next-step');
        const section = host.closest('[data-lesson-step]'),
          remaining = section ? [...section.querySelectorAll('[data-practice-block]')] : [];
        const nextPractice = remaining[remaining.indexOf(host) + 1],
          following = section?.nextElementSibling;
        if (nextPractice) {
          const button = E.el('button', 'Continue to the next question', 'secondary-link');
          button.type = 'button';
          button.addEventListener('click', () => {
            const target = nextPractice.querySelector('legend');
            target.tabIndex = -1;
            target.focus();
            target.scrollIntoView({ block: 'center', behavior: 'instant' });
          });
          next.append(button);
        } else if (following?.matches('[data-lesson-step]')) {
          const a = E.el('a', 'Continue to the next section', 'text-link');
          a.href = `#${following.id}`;
          next.append(a);
        } else if (section) {
          const target = section.querySelector('.exam-invitation a');
          if (target) {
            const a = E.el('a', 'Open the chapter check', 'text-link');
            a.href = target.href;
            next.append(a);
          }
        }
        if (next.childElementCount) retry.before(next);
      }
      const flatten = (o) => (o.parts ? o.parts.flatMap(flatten) : [o]);
      const outcomeRecords = outcomes
        .flatMap(flatten)
        .map((o) => ({
          ...o,
          firstCorrect: o.correct,
          elapsedMs: state.questionTimes[o.id] || 0,
          hintsUsed: state.hints,
          confidence: state.confidence || null,
        }));
      window.LabelNotesProgress?.savePractice(
        block.id,
        { ...state },
        {
          submittedAt: Date.now(),
          outcomes: outcomeRecords,
          confidence: state.confidence || null,
          hintsUsed: state.hints,
          elapsedMs: state.elapsedMs,
        },
      );
      const openSecond = second?.hidden;
      if (openSecond) {
        lockedNote.hidden = true;
        second.hidden = false;
        second.classList.add('challenge-reveal');
      }
      const retry = E.el('button', 'Try again', 'secondary-link');
      retry.type = 'button';
      retry.addEventListener('click', () => {
        if (!block.retryBeforeReveal) qs.forEach((q) => E.restore(q, form, []));
        confidence.querySelectorAll('input').forEach((i) => (i.checked = false));
        state.confidence = '';
        state.questionTimes = {};
        state.elapsedMs = 0;
        since = Date.now();
        feedback.hidden = true;
        submit.disabled = false;
        save();
        form.querySelector('.question-item input, .question-item select, .question-item button').focus();
      });
      if (!correct && block.retryBeforeReveal && state.wrongSubmissions === 1) {
        submit.disabled = true;
        const seen = new Set();
        qs.forEach((q, i) => {
          if (outcomes[i].correct) return;
          const clue = firstMiss(q, outcomes[i]);
          if (clue) feedback.append(E.el('p', clue));
          (q.retryReviews || [q.review]).filter(Boolean).forEach(source => {
            if (seen.has(source.href)) return;
            seen.add(source.href);
            feedback.append(reviewLink(source));
          });
        });
        const show = E.el('button', 'Show answer', 'secondary-link');
        show.type = 'button';
        show.addEventListener('click', () => {
          revealAnswers();
          feedback.focus({ preventScroll: true });
        });
        const actions = E.el('div', undefined, 'practice-retry-actions');
        actions.append(retry, show);
        feedback.append(actions);
      } else {
        revealAnswers();
        if (correct) appendNextStep();
      }
      feedback.focus({ preventScroll: true });
      if (openSecond) {
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        second.scrollIntoView({ block: 'nearest', behavior: reduced ? 'instant' : 'smooth' });
      } else feedback.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  });
})();
