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
  const reviewUnanswered = E.el('button', 'Review unanswered parts', 'secondary-link');
  reviewUnanswered.type = 'button';
  reviewUnanswered.hidden = true;
  $('submission-note').after(reviewUnanswered);
  const duration = config.timeLimitSeconds == null ? null : config.timeLimitSeconds * 1000;
  let state = store.read(),
    interval,
    confirmIncomplete = false,
    since = Date.now(),
    hasFinished = false,
    pageVisible = !document.hidden;
  if (state && state.assessmentVersion !== bank.version) {
    store.write(null);
    state = null;
  }
  if (!state) {
    const last = progress?.read().assessments[id]?.latest;
    if (last?.assessmentVersion === bank.version) state = { ...last, status: 'completed' };
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
    .forEach((host) => (host.textContent = `${blocks.length} ${id === 'pretest' ? 'questions' : 'question groups'}`));
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
    (state?.revealedParts || []).forEach((qid) => {
      const part = form.querySelector(`[id="part-${qid}"]`);
      if (part) E.revealPart(part);
    });
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
    state.revealedParts = [...form.querySelectorAll('[id^="part-"]:not([hidden])')].map((part) => part.dataset.questionId);
    store.write(state);
    ordered().forEach((b, i) => {
      const complete = b.questionIds.every(
          (qid) =>
            E.grade(
              bank.questions.find((q) => q.id === qid),
              state.answers[qid],
            ).answered,
      );
      const tab = $('question-tabs').children[i];
      tab.dataset.answered = String(complete);
      tab.setAttribute('aria-label', `${id === 'pretest' ? 'Question' : 'Group'} ${i + 1}: ${complete ? 'answered' : 'incomplete'}`);
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
    $('question-position').textContent = `${id === 'pretest' ? 'Question' : 'Group'} ${state.pageIndex + 1} of ${blocks.length}`;
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
    const savedFirst = progress?.read().assessments[id]?.first;
    const first = savedFirst?.assessmentVersion === bank.version ? savedFirst : null;
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
    const incomplete = outcomes.some((outcome) => !outcome.answered);
    results.querySelector(':scope > .eyebrow').textContent = incomplete ? 'Ended early'
      : id === 'pretest' ? 'Quick check complete' : 'Chapter check complete';
    $('result-score').textContent = `Total · ${earned} / ${total}`;
    $('saved-result').textContent = `First attempt · ${initial?.earned ?? earned} / ${initial?.total ?? total}`;
    $('result-summary').textContent = id === 'pretest'
      ? 'Here is your starting point. Follow a review link to begin learning.'
      : 'See how you did in each area, then revisit the questions below.';
    results.querySelector('[data-objectives]')?.remove();
    results.querySelector('.goal-results')?.remove();
    const summary = E.el('div', undefined, 'goal-results');
    const allObjectives = Object.values(window.LabelNotesCourse).flatMap((c) => c.objectives || []);
    const objectives = config.objectives || allObjectives.filter((o) => outcomes.some((r) => r.objective === o.id));
    const baseline = progress?.read().assessments.pretest?.first;
    const totals = (rows) => ({
      earned: Number(rows.reduce((n, r) => n + r.earned, 0).toFixed(2)),
      total: rows.reduce((n, r) => n + r.total, 0),
    });
    window.LabelNotesDimensions.forEach((dimension) => {
      const goals = objectives.filter((o) => dimension.objectives.includes(o.id));
      const ids = goals.map((o) => o.id);
      const rows = outcomes.filter((r) => ids.includes(r.objective));
      const { earned: e, total: t } = totals(rows);
      const status = E.status(e, t, config.thresholds);
      const card = E.el('section', undefined, 'dimension-result');
      const heading = E.el('div', undefined, 'dimension-heading');
      heading.append(E.el('h2', dimension.title), E.el('strong', `${e} / ${t}`));
      card.append(heading);
      const meter = E.el('progress');
      meter.max = t || 1;
      meter.value = e;
      meter.setAttribute('aria-label', `${dimension.title}: ${e} out of ${t}`);
      card.append(meter, E.el('p', status, 'dimension-status'));
      if (id !== 'pretest' && baseline?.assessmentVersion === window.LabelNotesCourse.pretest.assessmentVersion) {
        const earlier = (baseline.outcomes || []).filter((r) => ids.includes(r.objective));
        const correct = earlier.filter((r) => r.correct).length;
        if (earlier.length) card.append(E.el('p', `Before learning · ${Math.round(correct / earlier.length * 100)}% (${correct} of ${earlier.length} ${earlier.length === 1 ? 'question' : 'questions'})`, 'baseline-record'));
      }
      const detail = E.el('details', undefined, 'objective-breakdown');
      detail.append(E.el('summary', 'Learning goals & review links'));
      goals.forEach((o) => {
        const score = totals(outcomes.filter((r) => r.objective === o.id));
        const row = E.el('div', undefined, 'objective-result');
        row.append(E.el('strong', `${o.id} · ${score.total ? `${score.earned}/${score.total}` : 'Not assessed'}`), E.el('p', o.text));
        const link = E.el('a', 'Review this part of the lesson', 'text-link');
        const [chapter] = Object.entries(window.LabelNotesCourse).find(([, course]) => course.objectives?.includes(o));
        link.href = chapter + '.html#' + o.sections[0];
        row.append(link);
        detail.append(row);
      });
      card.append(detail);
      summary.append(card);
    });
    $('results-title').after($('result-summary'), summary, $('result-score'), $('saved-result'));
    $('result-details').replaceChildren(...blocks.map((block, index) => {
      const qs = block.questionIds.map((qid) => questions.find((q) => q.id === qid));
      const grades = qs.map((q) => E.grade(q, state.answers[q.id]));
      const points = totals(grades);
      const d = E.el('details', undefined, 'result-item');
      d.append(E.el('summary', `${index + 1}. ${block.title} · ${points.earned}/${points.total}`));
      if (block.intro) d.append(E.html('div', block.intro, 'question-context'));
      const material = [block.product, ...(block.products || [])].filter(Boolean);
      if (material.length) {
        const evidence = E.el('details', undefined, 'result-evidence');
        evidence.append(E.el('summary', 'Show the label'));
        material.forEach((p) => evidence.append(E.product(p)));
        d.append(evidence);
      }
      qs.forEach((q) => d.append(E.feedback(q, state.answers[q.id])));
      // Keep the result and its expanded feedback in place while the learner reads the passage.
      d.querySelectorAll('[data-feedback-review]').forEach((a) => {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', `${a.textContent} (opens in a new tab)`);
      });
      return d;
    }));
    results.querySelector('.warmup-recap')?.remove();
    window.LabelNotesWarmup?.appendRecap(results);
    $('results-title').focus();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function finish(reason) {
    if (state?.status !== 'active') return;
    capture();
    if (reason === 'end') reason = score().every((outcome) => outcome.answered) ? 'submit' : 'ended-early';
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
      assessmentVersion: bank.version,
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
    reviewUnanswered.hidden = true;
    store.write(state);
    showActive();
    showQuestion(0);
  });
  form.addEventListener('submit', (e) => e.preventDefault());
  const answerChanged = () => {
    capture();
    confirmIncomplete = false;
    $('submission-note').textContent = '';
    reviewUnanswered.hidden = true;
  };
  form.addEventListener('input', answerChanged);
  form.addEventListener('change', answerChanged);
  form.addEventListener('question-revealed', capture);
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
        `${missing} ${missing === 1 ? 'part is' : 'parts are'} unanswered. Review them below or press Submit my answers again to finish.`;
      reviewUnanswered.hidden = false;
      return;
    }
    finish('submit');
  });
  reviewUnanswered.addEventListener('click', () => {
    const missing = score().find((o) => !o.answered);
    if (!missing) return;
    const index = ordered().findIndex((b) => b.questionIds.some((qid) =>
      E.leaves(questions.find((q) => q.id === qid)).some((q) => q.id === missing.id)));
    showQuestion(index, false);
    const field = form.querySelector(`[data-item-id="${missing.id}"]`);
    for (let parent = field.parentElement; parent && parent !== form; parent = parent.parentElement)
      if (parent.id.startsWith('part-')) E.revealPart(parent);
    capture();
    field.querySelector('input,select,button').focus({ preventScroll: true });
    field.scrollIntoView({ block: 'start', behavior: 'instant' });
    reviewUnanswered.hidden = true;
    $('submission-note').textContent = '';
    confirmIncomplete = false;
  });
  $('end-attempt').addEventListener('click', () => $('end-dialog').showModal());
  $('continue-attempt').addEventListener('click', () => $('end-dialog').close());
  $('confirm-end').addEventListener('click', () => finish('end'));
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
