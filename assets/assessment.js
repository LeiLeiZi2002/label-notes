/* 正式测验与随堂练习分开：按绝对截止时间计时，交卷后统一给反馈。 */
(() => {
  const store = window.LabelNotesAssessment;
  const ready = document.getElementById('exam-ready');
  const active = document.getElementById('exam-active');
  const results = document.getElementById('exam-results');
  const form = document.getElementById('assessment-form');
  const questions = [...form.querySelectorAll('[data-question]')];
  const scoreItems = [...form.querySelectorAll('[data-score-item]')];
  const tabs = document.getElementById('question-tabs');
  const previous = document.getElementById('previous-question');
  const next = document.getElementById('next-question');
  const submit = document.getElementById('submit-assessment');
  const status = document.getElementById('exam-status');
  const endDialog = document.getElementById('end-dialog');
  const duration = Number(document.getElementById('main').dataset.durationSeconds) * 1000;
  const assessmentId = document.body.dataset.assessment || 'preservatives';
  let state = store.read();
  const savedAttempt = window.LabelNotesProgress?.read().assessments[assessmentId]?.latest;
  if (!state && savedAttempt) state = { ...savedAttempt, status: 'completed', finishReason: 'submit' };
  let interval;
  let confirmIncomplete = false;
  let warned = false;

  const normalize = value => String(value || '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!]+$/, '');
  const valuesFor = item => (state?.answers?.[item.querySelector('input, select').name] || []).map(normalize).filter(Boolean);

  function setLocked(locked) {
    document.body.dataset.active = String(locked);
    document.querySelectorAll('[data-course-link]').forEach(link => {
      link.dataset.destination ||= link.getAttribute('href');
      if (locked) {
        link.removeAttribute('href');
        link.setAttribute('aria-disabled', 'true');
        link.tabIndex = -1;
      } else {
        link.href = link.dataset.destination;
        link.removeAttribute('aria-disabled');
        link.removeAttribute('tabindex');
      }
    });
    document.getElementById('lock-message').textContent = locked
      ? 'Lesson notes are locked until you finish this attempt.'
      : 'Lesson notes are available.';
  }

  function captureAnswers() {
    const data = new FormData(form);
    const names = new Set([...form.querySelectorAll('input, select')].map(control => control.name));
    state.answers = Object.fromEntries([...names].map(name => [name, data.getAll(name)]));
    store.write(state);
  }

  function restoreAnswers() {
    [...form.querySelectorAll('input, select')].forEach(control => {
      const values = state?.answers?.[control.name] || [];
      if (control.type === 'checkbox' || control.type === 'radio') control.checked = values.includes(control.value);
      else control.value = values[0] || '';
    });
  }

  function markProgress() {
    questions.forEach((question, index) => {
      const complete = [...question.querySelectorAll('[data-score-item]')].every(item => valuesFor(item).length > 0);
      tabs.children[index].dataset.answered = String(complete);
    });
  }

  function showQuestion(index, focus = true) {
    state.pageIndex = Math.min(questions.length - 1, Math.max(0, index));
    questions.forEach((question, position) => { question.hidden = position !== state.pageIndex; });
    [...tabs.children].forEach((tab, position) => {
      if (position === state.pageIndex) tab.setAttribute('aria-current', 'step');
      else tab.removeAttribute('aria-current');
    });
    document.getElementById('question-position').textContent = `Question ${state.pageIndex + 1} of ${questions.length}`;
    previous.hidden = state.pageIndex === 0;
    next.hidden = state.pageIndex === questions.length - 1;
    submit.hidden = !next.hidden;
    store.write(state);
    if (focus) {
      const heading = questions[state.pageIndex].querySelector('h2');
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }

  function describeValues(item, values) {
    if (!values.length) return 'No answer';
    if (item.dataset.kind === 'text') return values.join(', ');
    const labels = values.map(value => {
      const option = [...item.querySelectorAll('option')].find(option => normalize(option.value) === value);
      if (option) return option.textContent;
      const input = [...item.querySelectorAll('input')].find(input => normalize(input.value) === value);
      return input?.labels[0]?.textContent.trim() || value;
    });
    return labels.length > 1 ? labels.map(label => label.replace(/[.!?]+$/, '')).join('; ') : labels[0];
  }

  function score() {
    return scoreItems.map(item => {
      const values = valuesFor(item);
      const expected = item.dataset.answer.split('|').map(normalize);
      const correct = item.dataset.kind === 'text'
        ? (item.dataset.accept || item.dataset.answer).split('|').map(normalize).includes(values[0])
        : values.length === expected.length && expected.every(value => values.includes(value));
      return { item, values, expected, correct };
    });
  }

  function showResults() {
    clearInterval(interval);
    setLocked(false);
    ready.hidden = true;
    active.hidden = true;
    results.hidden = false;
    const outcomes = score();
    const earned = outcomes.filter(outcome => outcome.correct).length;
    const unanswered = outcomes.filter(outcome => !outcome.values.length).length;
    window.LabelNotesProgress?.complete(assessmentId, {
      earned, total: outcomes.length, submittedAt: state.submittedAt,
      answers: state.answers,
      outcomes: outcomes.map(outcome => ({ title: outcome.item.dataset.title, goal: outcome.item.dataset.goal || '', correct: outcome.correct }))
    });
    const first = window.LabelNotesProgress?.read().assessments[assessmentId]?.first;
    const saved = document.getElementById('saved-result');
    if (saved && first) saved.textContent = assessmentId === 'pretest'
      ? `Your first result, ${first.earned}/${first.total}, is kept as your starting point. Retaking this check will not replace it.`
      : `Chapter completed. First attempt: ${first.earned}/${first.total}. You can review the explanations, try again or continue.`;
    document.getElementById('result-score').textContent = `${earned} / ${outcomes.length}`;
    const summary = document.getElementById('result-summary');
    summary.textContent = `${state.finishReason === 'time' ? 'Time is up. Your saved answers have been submitted. ' : ''}${unanswered ? `${unanswered} question${unanswered === 1 ? ' was' : 's were'} left unanswered. ` : ''}${summary.dataset.intro || 'Your answers are in. Open the notes below to compare your choices and revisit anything you’d like to practice.'}`;
    const details = document.getElementById('result-details');
    details.replaceChildren(...outcomes.map(outcome => {
      const entry = document.createElement('details');
      entry.className = 'result-item';
      entry.open = !outcome.correct;
      const heading = document.createElement('summary');
      heading.textContent = `${outcome.correct ? 'Correct' : outcome.values.length ? 'Revisit' : 'Unanswered'} · ${outcome.item.dataset.title}`;
      const chosen = document.createElement('p');
      chosen.textContent = `Your answer: ${describeValues(outcome.item, outcome.values)}`;
      const answer = document.createElement('p');
      answer.textContent = `Answer: ${describeValues(outcome.item, outcome.expected)}`;
      const explanation = document.createElement('p');
      explanation.textContent = outcome.item.dataset.explanation;
      const review = document.createElement('a');
      review.className = 'text-link';
      review.href = outcome.item.dataset.review;
      review.textContent = assessmentId === 'pretest' ? 'Find this topic in the course' : 'Review this part of the lesson';
      entry.append(heading, chosen, answer, explanation, review);
      return entry;
    }));
    document.getElementById('results-title').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function finish(reason) {
    if (state?.status !== 'active') return;
    state.status = 'completed';
    state.finishReason = reason;
    state.submittedAt = Date.now();
    store.write(state);
    document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    showResults();
  }

  function updateClock() {
    if (state?.status !== 'active') return;
    if (!duration) return;
    const seconds = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
    document.getElementById('exam-timer').textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    document.querySelector('.timer-display').dataset.urgent = String(seconds <= 60);
    if (seconds <= 60 && !warned) {
      warned = true;
      status.textContent = 'One minute left. You can review earlier answers using the numbered buttons.';
    }
    if (seconds === 0) finish('time');
  }

  function showActive() {
    ready.hidden = true;
    results.hidden = true;
    active.hidden = false;
    setLocked(true);
    restoreAnswers();
    showQuestion(state.pageIndex || 0, false);
    markProgress();
    updateClock();
    if (state.status === 'active' && duration) interval = setInterval(updateClock, 1000);
  }

  questions.forEach((question, index) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.textContent = index + 1;
    tab.setAttribute('aria-label', `Question ${index + 1}`);
    tab.addEventListener('click', () => { updateClock(); if (state.status === 'active') showQuestion(index); });
    tabs.append(tab);
  });
  document.querySelectorAll('[data-course-link]').forEach(link => link.addEventListener('click', event => {
    if (state?.status === 'active') { event.preventDefault(); status.textContent = 'Finish your attempt to reopen the lesson notes.'; }
  }));
  document.getElementById('start-assessment').disabled = false;
  document.getElementById('start-assessment').addEventListener('click', () => {
    const now = Date.now();
    form.reset();
    state = { status: 'active', startedAt: now, deadline: now + duration, answers: {}, pageIndex: 0 };
    warned = false;
    status.textContent = '';
    document.getElementById('submission-note').textContent = '';
    confirmIncomplete = false;
    store.write(state);
    showActive();
    showQuestion(0);
  });
  previous.addEventListener('click', () => { updateClock(); if (state.status === 'active') showQuestion(state.pageIndex - 1); });
  next.addEventListener('click', () => { updateClock(); if (state.status === 'active') showQuestion(state.pageIndex + 1); });
  form.addEventListener('submit', event => event.preventDefault());
  const changed = () => {
    if (state?.status !== 'active') return;
    if (duration && Date.now() >= state.deadline) { restoreAnswers(); finish('time'); return; }
    captureAnswers();
    markProgress();
    confirmIncomplete = false;
    document.getElementById('submission-note').textContent = '';
  };
  form.addEventListener('input', changed);
  form.addEventListener('change', changed);
  submit.addEventListener('click', () => {
    updateClock();
    if (state.status !== 'active') return;
    const missing = scoreItems.filter(item => !valuesFor(item).length).length;
    if (missing && !confirmIncomplete) {
      confirmIncomplete = true;
      document.getElementById('submission-note').textContent = `${missing} check${missing === 1 ? ' is' : 's are'} unanswered. Use the numbered buttons to go back, or press Submit my answers again to finish now.`;
      return;
    }
    finish('submit');
  });
  document.getElementById('end-attempt').addEventListener('click', () => { updateClock(); if (state.status === 'active') endDialog.showModal(); });
  document.getElementById('continue-attempt').addEventListener('click', () => endDialog.close());
  document.getElementById('confirm-end').addEventListener('click', () => finish(duration && Date.now() >= state.deadline ? 'time' : 'submit'));
  document.getElementById('retry-assessment').addEventListener('click', () => {
    state = null;
    store.write(null);
    results.hidden = true;
    ready.hidden = false;
    form.reset();
    document.getElementById('ready-title').focus();
  });
  window.addEventListener('pageshow', updateClock);
  document.addEventListener('visibilitychange', updateClock);
  if (state?.status === 'active') showActive();
  else if (state?.status === 'completed') showResults();
})();
