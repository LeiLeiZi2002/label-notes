/* Compare the first complete attempts on the paired nine-item checks. */
(() => {
  const progress = window.LabelNotesProgress;
  const course = window.LabelNotesCourse;
  const dimensions = window.LabelNotesDimensions;
  const reviews = [
    ['texture.html#read-label', 'Read a food label'],
    ['antioxidants.html#evidence-edta', 'Review ingredient functions'],
    ['sweeteners-flavors.html#evidence-natural-claim', 'Review label claims'],
  ];
  const note = 'These nine-item checks summarize your starting point and post-course performance on unfamiliar labels; they are a learning check, not a formal certification.';

  function scores(attempt) {
    if (!attempt?.outcomes) return null;
    return dimensions.map(({ title, objectives }) => {
      const rows = attempt.outcomes.filter((outcome) => objectives.includes(outcome.objective));
      return {
        title,
        earned: rows.reduce((total, row) => total + row.earned, 0),
        total: rows.reduce((total, row) => total + row.total, 0),
      };
    });
  }

  function currentAttempt(data, id) {
    const attempt = progress.firstCompleted(data.assessments[id]);
    return attempt?.assessmentVersion === course[id].assessmentVersion ? attempt : null;
  }

  function renderComparison(host, data) {
    host.replaceChildren();
    host.classList.remove('has-comparison');
    const before = currentAttempt(data, 'pretest');
    const after = currentAttempt(data, 'capstone');
    if (!after) {
      host.textContent = 'Finish the final label check to see the comparison.';
      return;
    }
    if (!before) {
      host.textContent = 'The comparison needs a complete result from the current quick check.';
      return;
    }
    if (before.submittedAt > (after.startedAt ?? after.submittedAt)) {
      host.textContent = 'The quick check was completed after the final label check started.';
      return;
    }

    const prior = scores(before);
    const final = scores(after);
    const list = document.createElement('dl');
    list.className = 'course-score-comparison';
    dimensions.forEach(({ title }, index) => {
      const area = document.createElement('div');
      const name = document.createElement('dt');
      name.textContent = title;
      const change = document.createElement('dd');
      const scoresText = document.createElement('strong');
      scoresText.className = 'comparison-numbers';
      scoresText.textContent = `${prior[index].earned} / ${prior[index].total} → ${final[index].earned} / ${final[index].total}`;
      const pair = document.createElement('div');
      pair.className = 'comparison-bars';
      pair.setAttribute('aria-hidden', 'true');
      for (const score of [prior[index], final[index]]) {
        const bar = document.createElement('progress');
        bar.max = score.total || 1;
        bar.value = score.earned;
        pair.append(bar);
      }
      const delta = final[index].earned - prior[index].earned;
      const difference = document.createElement('span');
      difference.textContent = `${delta > 0 ? '+' : ''}${delta} ${Math.abs(delta) === 1 ? 'point' : 'points'}`;
      const review = document.createElement('a');
      review.className = 'text-link';
      [review.href, review.textContent] = reviews[index];
      change.append(scoresText, pair, difference, review);
      area.append(name, change);
      list.append(area);
    });
    const heading = document.createElement('h2');
    heading.textContent = 'Before and after';
    const description = document.createElement('p');
    description.textContent = 'Before → Now · First complete attempt on each check';
    const caveat = document.createElement('p');
    caveat.className = 'source-note';
    caveat.textContent = note;
    host.classList.add('has-comparison');
    host.append(heading, description, list, caveat);
    return true;
  }

  window.LabelNotesResults = { scores, currentAttempt, renderComparison };
})();
