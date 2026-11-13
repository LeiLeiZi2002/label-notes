/* 分段阅读、标签切换和反馈回看；题目交互由 practice.js 负责。 */
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
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-review]');
    if (!link) return;
    const target = document.getElementById(link.dataset.review);
    if (!target) return;
    event.preventDefault();
    reviewQuestion = target;
    reviewReturn.querySelector('a').href = `#${target.closest('[data-lesson-step]').id}`;
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    showStep(link.hash.slice(1), true);
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

})();
