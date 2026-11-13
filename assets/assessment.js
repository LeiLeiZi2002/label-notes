/* Chapter checks consume the same data and scoring as practice. */
(() => {
  const E = window.LabelNotesQuestions,
    store = window.LabelNotesAssessment,
    progress = window.LabelNotesProgress;
  const id = document.body.dataset.assessment || 'preservatives',
    bank = window.LabelNotesBanks[id],
    config = window.LabelNotesCourse[id];
  const blocks = bank.blocks.filter((b) => b.set === (id === 'pretest' ? 'pretest' : 'chapter-check'));
  const questions = blocks.flatMap((b) =>
    b.questionIds.map((qid) => bank.questions.find((q) => q.id === qid)),
  );
  const $ = (id) => document.getElementById(id),
    ready = $('exam-ready'),
    active = $('exam-active'),
    results = $('exam-results'),
    form = $('assessment-form');
  const questionHost = E.el('div');
  form.prepend(questionHost);
  const duration = config.timeLimitSeconds == null ? null : config.timeLimitSeconds * 1000;
  let state = store.read(),
    interval,
    confirmIncomplete = false,
    since = Date.now(),
    hasFinished = false,
    pageVisible = !document.hidden;
  if (!state) {
    const last = progress?.read().assessments[id]?.latest;
    if (last) state = { ...last, status: 'completed' };
  }
  document
    .querySelectorAll('[data-objectives]')
    .forEach((host) => window.LabelNotesObjectives.render(host, id));
  document.querySelectorAll('[data-question-count]').forEach((host) => (host.textContent = blocks.length));
  document
    .querySelectorAll('[data-total-points]')
    .forEach((host) => (host.textContent = questions.reduce((n, q) => n + E.maximum(q), 0)));
  document
    .querySelectorAll('[data-check-count]')
    .forEach((host) => (host.textContent = `${blocks.length} questions`));
  $('assessment-timing').textContent = duration
    ? `Time limit: ${config.timeLimitSeconds / 60} minutes. Your saved answers submit automatically when time runs out.`
    : `No time limit. Suggested time: about ${config.suggestedMinutes} minutes.`;
  function lock(value) {
    document.body.dataset.active = String(value);
    document.querySelectorAll('[data-course-link]').forEach((a) => {
      a.dataset.destination ||= a.getAttribute('href');
      if (value) {
        a.removeAttribute('href');
        a.setAttribute('aria-disabled', 'true');
        a.tabIndex = -1;
      } else {
        a.href = a.dataset.destination;
        a.removeAttribute('aria-disabled');
        a.removeAttribute('tabindex');
      }
    });
    $('lock-message').textContent = value
      ? 'Check what you can do independently. Lesson notes reopen when you finish.'
      : 'Lesson notes are available.';
  }
  function ordered() {
    return (state?.order?.blocks || blocks.map((b) => b.id)).map((bid) => blocks.find((b) => b.id === bid));
  }
  function render() {
    questionHost.replaceChildren();
    $('question-tabs').replaceChildren();
    ordered().forEach((b, i) => {
      const section = E.el('section', undefined, 'exam-question');
      section.dataset.question = '';
      section.dataset.block = b.id;
      section.append(E.renderBlock(b, bank, state?.order?.options));
      section.querySelector('h2')?.setAttribute('tabindex', '-1');
      questionHost.append(section);
      const tab = E.el('button', String(i + 1));
      tab.type = 'button';
      tab.setAttribute('aria-label', `Question ${i + 1}`);
      tab.addEventListener('click', () => showQuestion(i));
      $('question-tabs').append(tab);
    });
    questions.forEach((q) => E.restore(q, form, state?.answers?.[q.id]));
  }
  const firstItem = (block) => E.leaves(bank.questions.find((q) => q.id === block.questionIds[0]))[0].id;
  function stamp() {
    const now = Date.now();
    if (state?.status === 'active' && pageVisible) {
      const qid = state.activeQuestion || firstItem(ordered()[state.pageIndex || 0]);
      state.questionTimes ||= {};
      state.questionTimes[qid] = (state.questionTimes[qid] || 0) + (now - since);
    }
    since = now;
  }
  function capture() {
    if (state?.status !== 'active') return;
    stamp();
    state.answers = Object.fromEntries(questions.map((q) => [q.id, E.read(q, form)]));
    store.write(state);
    ordered().forEach((b, i) => {
      $('question-tabs').children[i].dataset.answered = String(
        b.questionIds.every(
          (qid) =>
            E.grade(
              bank.questions.find((q) => q.id === qid),
              state.answers[qid],
            ).answered,
        ),
      );
    });
  }
  function showQuestion(index, focus = true) {
    if (state?.status !== 'active') return;
    stamp();
    state.pageIndex = Math.max(0, Math.min(index, blocks.length - 1));
    state.activeQuestion = firstItem(ordered()[state.pageIndex]);
    [...questionHost.children].forEach((s, i) => (s.hidden = i !== state.pageIndex));
    [...$('question-tabs').children].forEach((b, i) => {
      if (i === state.pageIndex) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    $('question-position').textContent = `Question ${state.pageIndex + 1} of ${blocks.length}`;
    $('previous-question').hidden = !state.pageIndex;
    $('next-question').hidden = state.pageIndex === blocks.length - 1;
    $('submit-assessment').hidden = state.pageIndex !== blocks.length - 1;
    store.write(state);
    if (focus) {
      const h = questionHost.children[state.pageIndex].querySelector('h2,legend');
      h.tabIndex = -1;
      h.focus();
      h.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }
  function flatResults(q, answer) {
    const g = E.grade(q, answer);
    return g.parts ? g.parts.flatMap((p, i) => flatResults((q.parts || [q.task])[i], answer?.[p.id])) : [g];
  }
  function score() {
    return questions.flatMap((q) => flatResults(q, state.answers[q.id]));
  }
  function showResults() {
    clearInterval(interval);
    lock(false);
    ready.hidden = true;
    active.hidden = true;
    results.hidden = false;
    const outcomes = score(),
      earned = Number(outcomes.reduce((n, o) => n + o.earned, 0).toFixed(2)),
      total = outcomes.reduce((n, o) => n + o.total, 0);
    const first = progress?.read().assessments[id]?.first;
    if (hasFinished) {
      progress?.complete(id, {
        ...state,
        earned,
        total,
        outcomes: outcomes.map((o) => ({
          ...o,
          firstCorrect: first?.outcomes?.find((p) => p.id === o.id)?.correct ?? o.correct,
          elapsedMs: state.questionTimes?.[o.id] || 0,
        })),
      });
      hasFinished = false;
    }
    const initial = progress?.read().assessments[id]?.first;
    $('result-score').textContent = `${earned} / ${total}`;
    $('saved-result').textContent =
      `First attempt: ${initial?.earned ?? earned}/${initial?.total ?? total} · This attempt: ${earned}/${total}.`;
    $('result-summary').textContent =
      id === 'pretest'
        ? 'This is your starting point. Both available chapters are now open.'
        : 'Review your results below. These describe this set of questions, not a certification of mastery.';
    results.querySelector('[data-objectives]')?.remove();
    let summary = $('goal-results');
    if (summary) summary.remove();
    summary = E.el('div');
    summary.id = 'goal-results';
    const going = E.el('section', undefined, 'chapter-objectives');
    window.LabelNotesObjectives.render(going, id, 'Where am I going?');
    summary.append(going);
    const how = E.el('section');
    how.append(E.el('h2', 'How am I going?'));
    const next = E.el('section');
    next.append(E.el('h2', 'Where to next?'));
    const objectives =
      config.objectives ||
      Object.values(window.LabelNotesCourse)
        .flatMap((c) => c.objectives || [])
        .filter((o) => questions.some((q) => q.objective === o.id));
    let secure = true;
    objectives.forEach((o) => {
      const rows = outcomes.filter((r) => r.objective === o.id),
        t = rows.reduce((n, r) => n + r.total, 0),
        e = Number(rows.reduce((n, r) => n + r.earned, 0).toFixed(2)),
        status = E.status(e, t, config.thresholds);
      how.append(
        E.el(
          'p',
          `${o.id} · ${o.text} — ${t ? `${e} / ${t}` : 'No questions in this check'} · ${status}`,
          'objective-result',
        ),
      );
      if (status !== 'Secure') {
        secure = false;
        const p = E.el(
          'p',
          status === 'Not assessed' ? `${o.id} was not assessed in this check. ` : `Revisit ${o.id}: `,
        );
        o.sections.forEach((section, i) => {
          const link = E.el('a', section.replaceAll('-', ' '), 'text-link');
          link.href = `${o.id.startsWith('P') ? 'preservatives' : 'antioxidants'}.html#${section}`;
          if (i) p.append(' · ');
          p.append(link);
        });
        next.append(p);
      }
    });
    if (secure)
      next.append(
        E.el(
          'p',
          'You answered these objectives securely in this check. Continue learning or try a new label.',
        ),
      );
    summary.append(how, next);
    results.insertBefore(summary, results.querySelector('.result-actions') || $('result-details'));
    $('result-details').replaceChildren(
      ...questions.map((q) => {
        const d = E.el('details', undefined, 'result-item'),
          g = E.grade(q, state.answers[q.id]);
        d.open = !g.correct;
        d.append(
          E.html(
            'summary',
            `${g.correct ? 'Correct' : g.answered ? 'Revisit' : 'Unanswered'} · ${q.stem || q.id}`,
          ),
          E.feedback(q, state.answers[q.id]),
        );
        return d;
      }),
    );
    $('results-title').focus();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function finish(reason) {
    if (state?.status !== 'active') return;
    capture();
    state.status = 'completed';
    state.submittedAt = Date.now();
    state.finishReason = reason;
    store.write(state);
    document.querySelectorAll('dialog[open]').forEach((d) => d.close());
    hasFinished = true;
    showResults();
  }
  function clock() {
    if (state?.status !== 'active' || !duration) return;
    const remaining = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
    $('exam-timer').textContent = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
    if (!remaining) finish('time');
  }
  function showActive() {
    ready.hidden = true;
    results.hidden = true;
    active.hidden = false;
    lock(true);
    render();
    since = Date.now();
    showQuestion(state.pageIndex || 0, false);
    const timer = document.querySelector('.timer-display');
    if (timer) timer.hidden = !duration;
    capture();
    clock();
    if (duration && state.status === 'active') interval = setInterval(clock, 1000);
  }
  $('start-assessment').disabled = false;
  $('start-assessment').addEventListener('click', () => {
    const now = Date.now(),
      retry = Boolean(progress?.read().assessments[id]);
    state = {
      status: 'active',
      startedAt: now,
      deadline: duration ? now + duration : null,
      answers: {},
      questionTimes: {},
      pageIndex: 0,
      order: E.orderFor(blocks, questions, retry),
    };
    confirmIncomplete = false;
    $('submission-note').textContent = '';
    store.write(state);
    showActive();
  });
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('input', capture);
  form.addEventListener('change', () => {
    capture();
    confirmIncomplete = false;
    $('submission-note').textContent = '';
  });
  form.addEventListener('focusin', (e) => {
    stamp();
    if (state?.status === 'active')
      state.activeQuestion = e.target.closest('[data-item-id]')?.dataset.itemId || state.activeQuestion;
  });
  $('previous-question').addEventListener('click', () => showQuestion(state.pageIndex - 1));
  $('next-question').addEventListener('click', () => showQuestion(state.pageIndex + 1));
  $('submit-assessment').addEventListener('click', () => {
    capture();
    const missing = score().filter((o) => !o.answered).length;
    if (missing && !confirmIncomplete) {
      confirmIncomplete = true;
      $('submission-note').textContent =
        `${missing} parts are unanswered. Review them or press Submit my answers again to finish.`;
      return;
    }
    finish('submit');
  });
  $('end-attempt').addEventListener('click', () => $('end-dialog').showModal());
  $('continue-attempt').addEventListener('click', () => $('end-dialog').close());
  $('confirm-end').addEventListener('click', () => finish('submit'));
  $('retry-assessment').addEventListener('click', () => {
    state = null;
    store.write(null);
    results.hidden = true;
    ready.hidden = false;
    $('ready-title').focus();
  });
  window.addEventListener('pagehide', capture);
  document.addEventListener('visibilitychange', () => {
    stamp();
    pageVisible = !document.hidden;
    clock();
  });
  window.addEventListener('pageshow', clock);
  if (state?.status === 'active') showActive();
  else if (state?.status === 'completed') {
    render();
    showResults();
  }
})();
