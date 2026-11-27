(() => {
  const SURVEY_URL = '';
  const progress = window.LabelNotesProgress;
  const results = window.LabelNotesResults;
  const course = window.LabelNotesCourse;
  const banks = window.LabelNotesBanks;
  const chapters = [
    ['preservatives', 'Ch 01 Preservatives', 'assessment.html'],
    ['antioxidants', 'Ch 02 Antioxidants', 'antioxidants-check.html'],
    ['texture', 'Ch 03 Texture', 'texture-check.html'],
    ['sweeteners-flavors', 'Ch 04 Sweeteners & flavors', 'sweeteners-flavors-check.html'],
    ['colors', 'Ch 05 Food colors', 'colors-check.html'],
  ];
  const checks = [
    ['pretest', 'Quick check (Pre-test)', 'pretest.html'],
    ...chapters,
    ['capstone', 'Ch 06 Final label check (Post-test)', 'capstone.html'],
  ];
  const $ = (id) => document.getElementById(id);
  const el = (tag, text) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const score = (attempt) => attempt ? { earned: attempt.earned, total: attempt.total } : null;
  const scoreText = (attempt) => attempt ? `${attempt.earned}/${attempt.total}` : '—';

  function checkSummary(data, id) {
    const record = data.assessments[id];
    const version = course[id].assessmentVersion || banks[id]?.version;
    const status = !record ? 'Not started'
      : version && record.latest.assessmentVersion !== version ? 'Earlier version'
      : record.latest.finishReason === 'ended-early' || !progress.firstCompleted(record) ? 'Ended early'
      : 'Completed';
    return { first: score(record?.first), latest: score(record?.latest), status };
  }

  function scoreRow(data, id, label, href) {
    const assessment = checkSummary(data, id);
    const name = el('th');
    name.scope = 'row';
    const link = el('a', label);
    link.href = href;
    name.append(link);
    const history = data.assessments[id]?.history;
    if (history?.length) {
      const details = el('details');
      details.className = 'score-history';
      details.append(el('summary', 'Earlier versions'));
      [...history].reverse().forEach((record) => {
        details.append(el('p', `First ${scoreText(record.first)} · Latest ${scoreText(record.latest)}`));
      });
      name.append(details);
    }
    const row = el('tr');
    const status = el('span', assessment.status);
    status.className = 'score-status';
    status.dataset.status = assessment.status;
    const statusCell = el('td');
    statusCell.append(status);
    row.append(name, el('td', scoreText(assessment.first)), el('td', scoreText(assessment.latest)), statusCell);
    return row;
  }

  const leafQuestions = (question) => question.parts ? question.parts.flatMap(leafQuestions)
    : question.task ? leafQuestions(question.task) : [question];
  function calibration(data) {
    const counts = { rated: 0, sureRight: 0, sureMissed: 0, guessRight: 0 };
    const missed = [];
    for (const [id] of chapters) {
      const bank = banks[id];
      const questions = new Map(bank.questions.flatMap(leafQuestions).map(q => [q.id, q]));
      for (const block of bank.blocks) {
        if (['pretest', 'chapter-check', 'warm-up'].includes(block.set)) continue;
        const ratings = progress.practiceRatings(data.practice[block.id]);
        for (const [qid, record] of Object.entries(ratings)) {
          Object.keys(counts).forEach((key) => { counts[key] += record[key]; });
          if (record.sureMissed) {
            const question = questions.get(qid);
            missed.push({
              title: question?.stem?.replace(/<[^>]*>/g, '') || block.title,
              review: question?.review?.href || `${id}.html#${block.section}`,
            });
          }
        }
      }
    }
    return { counts, missed };
  }

  function renderConfidence({ counts, missed }) {
    const host = $('confidence-results');
    host.replaceChildren();
    if (!counts.rated) {
      const empty = el('div');
      empty.className = 'confidence-empty';
      const link = el('a', 'Open a practice exercise');
      link.className = 'secondary-link';
      link.href = 'preservatives.html#check-understanding';
      const message = progress.canOpen('preservatives')
        ? 'Rate how sure you are during a practice exercise to see how your confidence matches your answers.'
        : 'Take the quick check first, then rate how sure you are during a practice exercise.';
      empty.append(el('p', message), link);
      host.append(empty);
      return;
    }
    const list = el('dl');
    list.className = 'confidence-metrics';
    for (const [key, label, subtitle] of [
      ['sureRight', 'Sure & right', 'Correct with confidence'],
      ['sureMissed', 'Sure & missed', 'Worth a second look'],
      ['guessRight', 'Guessing & right', 'Check your reasoning'],
    ]) {
      const card = el('div');
      const value = el('dd');
      value.append(el('strong', counts[key]), el('span', subtitle));
      card.append(el('dt', label), value);
      list.append(card);
    }
    host.append(list);
    if (missed.length) {
      const list = el('ul');
      list.className = 'confidence-misses';
      missed.forEach(({ title, review }) => {
        const row = el('li', title);
        const link = el('a', 'Review this part of the lesson');
        link.href = review;
        link.className = 'text-link';
        row.append(link);
        list.append(row);
      });
      const heading = el('h3', 'Questions to revisit');
      heading.className = 'confidence-review-heading';
      host.append(heading, list);
    }
  }

  function anonymousSummary(data) {
    const before = results.currentAttempt(data, 'pretest');
    const after = results.currentAttempt(data, 'capstone');
    const { counts } = calibration(data);
    return {
      version: 1,
      pretest: before ? {
        dimensions: results.scores(before),
        notSure: before.outcomes.filter((outcome) => outcome.uncertain).length,
      } : null,
      chapters: Object.fromEntries(chapters.map(([id]) => [id, checkSummary(data, id)])),
      posttest: after ? { dimensions: results.scores(after) } : null,
      confidence: counts,
    };
  }

  const copyButton = $('copy-summary');
  const manual = $('manual-summary');
  const copyStatus = $('copy-status');
  let resetCopy;
  copyButton.addEventListener('click', async () => {
    const output = JSON.stringify(anonymousSummary(progress.read()), null, 2);
    window.clearTimeout(resetCopy);
    try {
      await navigator.clipboard.writeText(output);
      manual.hidden = true;
      copyStatus.dataset.copied = '';
      copyStatus.textContent = 'Copied to clipboard';
      copyButton.textContent = '✓ Copied';
      resetCopy = window.setTimeout(() => {
        copyButton.textContent = 'Copy anonymous summary';
        copyStatus.textContent = '';
      }, 2000);
    } catch {
      copyButton.textContent = 'Copy anonymous summary';
      manual.value = output;
      manual.hidden = false;
      manual.focus();
      manual.select();
      delete copyStatus.dataset.copied;
      copyStatus.textContent = 'Select and copy the summary below.';
    }
  });

  if (SURVEY_URL) {
    $('survey-link').href = SURVEY_URL;
    $('survey-link').hidden = false;
  }
  function render() {
    const data = progress.read();
    $('score-rows').replaceChildren(...checks.map(([id, title, path]) => scoreRow(data, id, title, path)));
    renderConfidence(calibration(data));
    results.renderComparison(document.querySelector('[data-before-after]'), data);
  }
  window.addEventListener('pageshow', render);
  window.addEventListener('storage', render);
  render();
})();
