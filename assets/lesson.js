/* 分段阅读、标签切换和反馈回看；题目交互由 practice.js 负责。 */
(() => {
  const steps = [...document.querySelectorAll('[data-lesson-step]')];
  const links = [...document.querySelectorAll('.lesson-nav a')];
  const pager = document.querySelector('.lesson-pager');
  const previous = document.getElementById('previous-section');
  const next = document.getElementById('next-section');
  const reviewReturn = document.getElementById('review-return');
  let reviewQuestion = null;
  let quickReference;
  const chapter = document.body.dataset.chapter;
  const savedSection = window.LabelNotesProgress?.read().visits[chapter];

  function sectionFor(id) {
    return document.getElementById(id)?.closest('[data-lesson-step]');
  }

  function showStep(id, focus = false, scrollBehavior = 'instant') {
    const target = document.getElementById(id);
    const step = sectionFor(id);
    const index = steps.indexOf(step);
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
    quickReference?.showChallengeHint(step.id === 'try-new-label');
    if (chapter) window.LabelNotesProgress?.visit(chapter, id);
    // 回看链接可以指向步骤内的内容，旧的阅读位置仍然可用。
    for (let node = target; node && node !== step; node = node.parentElement) {
      if (node.matches('details')) node.open = true;
    }
    if (focus) {
      const heading = target.matches('details') ? target.querySelector('summary')
        : target.querySelector('h1, h2, h3, h4, legend') || target;
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    if (target !== step) target.scrollIntoView({ block: 'start', behavior: scrollBehavior });
    else if (focus) window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function followHash(focus) {
    const id = location.hash.slice(1);
    if (id === 'references') {
      showStep(sectionFor(savedSection) ? savedSection : steps[0].id);
      document.querySelector('#references details').open = true;
      return;
    }
    if (sectionFor(id)) showStep(id, focus);
    else showStep(sectionFor(savedSection) ? savedSection : steps[0].id, focus);
  }

  // 地址保留所在小节，刷新和浏览器的前进、后退都可以回到对应内容。
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
  const labelGroups = [...document.querySelectorAll('[data-label-group]')];
  const ingredientNotes = [...document.querySelectorAll('[data-ingredient-note]')];
  function selectIngredient(id) {
    ingredientButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ingredient === id)));
    labelGroups.forEach(mark => { mark.classList.toggle('active-label-group', mark.dataset.labelGroup === id); });
    ingredientNotes.forEach(note => { note.hidden = note.dataset.ingredientNote !== id; });
  }
  ingredientButtons.forEach(button => button.addEventListener('click', () => selectIngredient(button.dataset.ingredient)));
  if (ingredientButtons.length) selectIngredient(ingredientButtons[0].dataset.ingredient);

  const reference = document.querySelector('[data-texture-quick-reference]');
  if (reference) {
    document.querySelectorAll('[data-quick-reference-item]').forEach(item => {
      const row = reference.insertRow();
      const name = document.createElement('th');
      name.scope = 'row';
      const link = document.createElement('a');
      link.href = '#' + item.id;
      link.textContent = item.querySelector('[data-reference-name]').textContent;
      name.append(link);
      row.append(name);
      row.insertCell().textContent = item.querySelector('[data-reference-example]').textContent;
      row.insertCell().textContent = item.querySelector('[data-reference-purpose]').textContent;
    });
  }

  function setUpQuickReference() {
    const rows = [...document.querySelectorAll('#quick-reference tbody tr')];
    if (!rows.length) return;

    const dock = document.createElement('div');
    dock.className = 'quick-ref-dock';
    dock.innerHTML = `<button class="quick-ref-trigger" type="button" aria-expanded="false" aria-controls="quick-ref-drawer">
      <span>Quick reference</span><span class="quick-ref-count"></span>
    </button><p id="quick-ref-hint" hidden>Try reading the label first</p>`;
    const trigger = dock.querySelector('button');
    const hint = dock.querySelector('p');
    dock.querySelector('.quick-ref-count').textContent = `${rows.length} ${rows.length === 1 ? 'item' : 'items'}`;
    document.querySelector('.lesson-nav').after(dock);

    const drawer = document.createElement('dialog');
    drawer.id = 'quick-ref-drawer';
    drawer.className = 'quick-ref-drawer';
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-labelledby', 'quick-ref-drawer-title');
    drawer.innerHTML = `<header class="quick-ref-heading">
      <h2 id="quick-ref-drawer-title">Quick reference</h2>
      <button class="quick-ref-close" type="button" autofocus>Close</button>
    </header><ul class="quick-ref-list"></ul>`;
    const close = drawer.querySelector('button');
    const list = drawer.querySelector('ul');
    const names = rows.map(row => {
      const item = document.createElement('li');
      const name = row.cells[0].querySelector('a').cloneNode(true);
      const example = document.createElement('p');
      example.className = 'quick-ref-example';
      example.textContent = row.cells[1].textContent.trim();
      const purpose = document.createElement('p');
      purpose.textContent = row.cells[2].textContent.trim();
      item.append(name, example, purpose);
      list.append(item);
      return name;
    });
    document.body.append(drawer);

    trigger.addEventListener('click', () => {
      drawer.returnValue = '';
      drawer.showModal();
      trigger.setAttribute('aria-expanded', 'true');
      list.scrollTop = 0;
    });
    close.addEventListener('click', () => drawer.close());
    drawer.addEventListener('click', event => {
      if (event.target === drawer && event.clientX < drawer.getBoundingClientRect().left) drawer.close();
    });
    drawer.addEventListener('close', () => {
      trigger.setAttribute('aria-expanded', 'false');
      if (drawer.returnValue !== 'jump') trigger.focus({ preventScroll: true });
    });
    const lastName = names.at(-1);
    drawer.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      if (event.shiftKey && document.activeElement === close) {
        event.preventDefault();
        lastName.focus();
      } else if (!event.shiftKey && document.activeElement === lastName) {
        event.preventDefault();
        close.focus();
      }
    });

    let highlightedCard;
    let highlightTimer;
    list.addEventListener('click', event => {
      const name = event.target.closest('a');
      if (!name || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const id = name.hash.slice(1);
      const target = document.getElementById(id);
      const card = target.closest('.ingredient-profile') || target;
      drawer.close('jump');
      if (location.hash !== name.hash) history.pushState(null, '', name.hash);
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      showStep(id, true, reducedMotion ? 'instant' : 'smooth');
      clearTimeout(highlightTimer);
      highlightedCard?.classList.remove('quick-ref-highlight');
      highlightedCard = card;
      card.classList.add('quick-ref-highlight');
      highlightTimer = setTimeout(() => card.classList.remove('quick-ref-highlight'), 1200);
    });

    return {
      showChallengeHint(show) {
        hint.hidden = !show;
        if (show) trigger.setAttribute('aria-describedby', hint.id);
        else trigger.removeAttribute('aria-describedby');
      },
    };
  }

  quickReference = setUpQuickReference();
  followHash(false);

  const kitchen = document.querySelector('.kitchen-observation');
  kitchen?.addEventListener('change', () => {
    kitchen.querySelector('[data-kitchen-response]').textContent = kitchen.querySelector('input:checked')
      ? 'Keep that example in mind as you look at what each ingredient does.' : '';
  });
})();
