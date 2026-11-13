/* 教学文案和答案依据保留在 HTML；这里只处理分段阅读、标签切换与随堂反馈。 */
(() => {
  const steps = [...document.querySelectorAll('[data-lesson-step]')];
  const links = [...document.querySelectorAll('.lesson-nav a')];
  const pager = document.querySelector('.lesson-pager');
  const previous = document.getElementById('previous-section');
  const next = document.getElementById('next-section');
  const reviewReturn = document.getElementById('review-return');
  let reviewQuestion = null;
  const chapter = document.body.dataset.chapter;
  const savedSection = window.LabelNotesProgress?.read().visits[chapter];

  function showStep(id, focus = false) {
    const index = steps.findIndex(step => step.id === id);
    if (index < 0) return;
    steps.forEach((step, position) => { step.hidden = position !== index; });
    links.forEach((link, position) => {
      if (position === index) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    document.getElementById('section-position').textContent = `Section ${index + 1} of ${steps.length}`;
    previous.hidden = index === 0;
    previous.href = `#${steps[Math.max(0, index - 1)].id}`;
    const following = steps[index + 1];
    next.href = following ? `#${following.id}` : 'index.html#course';
    next.firstChild.textContent = following
      ? `Next: ${links[index + 1].textContent.trim().replace(/^\d+\s*/, '')} `
      : 'Return to course outline ';
    pager.hidden = false;
    reviewReturn.hidden = !reviewQuestion;
    if (chapter) window.LabelNotesProgress?.visit(chapter, id);
    if (!focus) return;
    steps[index].querySelector('h1, h2').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function followHash(focus) {
    const id = location.hash.slice(1);
    if (id === 'references') {
      showStep(steps.some(step => step.id === savedSection) ? savedSection : steps[0].id);
      document.querySelector('#references details').open = true;
      return;
    }
    if (steps.some(step => step.id === id)) showStep(id, focus);
    else showStep(steps.some(step => step.id === savedSection) ? savedSection : steps[0].id, focus);
  }

  // 地址保留所在小节，刷新和浏览器的前进、后退都可以回到对应内容。
  followHash(false);
  window.addEventListener('hashchange', () => followHash(true));
  document.querySelectorAll('[data-review]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      reviewQuestion = document.getElementById(link.dataset.review);
      reviewReturn.querySelector('a').href = `#${reviewQuestion.closest('[data-lesson-step]').id}`;
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      showStep(link.hash.slice(1), true);
    });
  });
  reviewReturn.querySelector('a').addEventListener('click', event => {
    if (!reviewQuestion) return;
    event.preventDefault();
    const id = reviewQuestion.closest('[data-lesson-step]').id;
    if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    showStep(id);
    const question = reviewQuestion.querySelector('legend');
    question.setAttribute('tabindex', '-1');
    question.focus({ preventScroll: true });
    question.scrollIntoView({ block: 'start', behavior: 'instant' });
    reviewQuestion = null;
    reviewReturn.hidden = true;
  });

  const ingredientButtons = [...document.querySelectorAll('[data-ingredient]')];
  const ingredientNotes = [...document.querySelectorAll('[data-ingredient-note]')];
  function selectIngredient(id) {
    ingredientButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ingredient === id)));
    ingredientNotes.forEach(note => { note.hidden = note.dataset.ingredientNote !== id; });
  }
  ingredientButtons.forEach(button => button.addEventListener('click', () => selectIngredient(button.dataset.ingredient)));
  if (ingredientButtons.length) selectIngredient(ingredientButtons[0].dataset.ingredient);

  const normalize = value => String(value || '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!]+$/, '');
  const isCorrect = control => (control.dataset.accept || control.dataset.correctValue || '').split('|').map(normalize).includes(normalize(control.value));

  document.querySelectorAll('.knowledge-check').forEach(form => {
    const button = form.querySelector('button[type="submit"]');
    const buttonLabel = button.textContent;
    const feedback = form.querySelector('.check-feedback');
    const groups = [...form.querySelectorAll('fieldset')];
    let details = feedback.querySelector('.feedback-details');
    if (!details && groups.length > 1) {
      details = document.createElement('ul');
      details.className = 'feedback-details';
      feedback.append(details);
    }
    button.disabled = false;
    const resetFeedback = () => {
      feedback.hidden = true;
      button.textContent = buttonLabel;
    };
    form.addEventListener('input', resetFeedback);
    form.addEventListener('change', event => {
      // 多选题允许不确定，但不把“不确定”和具体答案混在同一次选择里。
      const answer = event.target;
      if (answer.type === 'checkbox' && answer.checked) {
        answer.closest('fieldset').querySelectorAll('input').forEach(other => {
          if (other !== answer && (answer.value === 'unsure' || other.value === 'unsure')) other.checked = false;
        });
      }
      resetFeedback();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      feedback.hidden = false;
      const missing = groups.flatMap(group => {
        const controls = [...group.querySelectorAll('[data-answer-control]')];
        return controls.length ? controls.filter(control => !normalize(control.value)) : group.querySelector('input:checked') ? [] : [group.querySelector('input')];
      })[0];
      feedback.querySelectorAll('a').forEach(link => { link.hidden = Boolean(missing); });
      if (missing) {
        feedback.querySelector('h3').textContent = 'Complete your answer first';
        feedback.querySelector('p').textContent = 'Complete each part, then check your answer.';
        if (details) details.hidden = true;
        missing.focus();
        return;
      }

      // 每组按正文中标出的答案核对；多选题需要完整匹配，额外选项也会得到反馈。
      const results = groups.map(group => {
        const controls = [...group.querySelectorAll('[data-answer-control]')];
        if (controls.length) {
          const correct = controls.every(isCorrect);
          return { label: group.dataset.label || group.querySelector('legend').textContent.trim(), chosen: controls, correct, message: controls.length === 1 ? controls[0].dataset.feedback : controls.map(control => `${isCorrect(control) ? 'Correct' : 'Review'}: ${control.dataset.feedback}`).join(' ') };
        }
        const inputs = [...group.querySelectorAll('input')];
        const chosen = inputs.filter(input => input.checked);
        const correct = inputs.every(input => input.checked === (input.dataset.correct === 'true'));
        return { label: group.dataset.label || group.querySelector('legend').textContent.trim(), chosen, correct, message: group.dataset[correct ? 'success' : 'feedback'] || chosen[0].dataset.feedback };
      });
      const correct = results.every(result => result.correct);
      if (results.length === 1) {
        feedback.querySelector('h3').textContent = correct ? 'Correct' : results[0].chosen[0].value === 'unsure' ? 'Here’s how to work it out' : 'Review your reasoning';
        feedback.querySelector('p').textContent = results[0].message;
      } else {
        feedback.querySelector('h3').textContent = correct ? 'All parts correct' : 'Take another look';
        feedback.querySelector('p').textContent = correct ? 'Read the explanations for each answer below.' : 'Compare your answers with the explanations below. You can return to the lesson and try again.';
        details.replaceChildren(...results.map(result => {
          const item = document.createElement('li');
          const title = document.createElement('strong');
          const explanation = document.createElement('p');
          title.textContent = `${result.label}: ${result.correct ? 'Correct' : 'Review'}`;
          explanation.textContent = result.message;
          item.append(title, explanation);
          return item;
        }));
        details.hidden = false;
      }
      button.textContent = 'Check again';
    });
  });
})();
