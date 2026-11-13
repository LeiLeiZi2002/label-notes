/* 章前猜测即时揭晓，首次选择单独保留，不进入成绩或维度统计。 */
(() => {
  const E = window.LabelNotesQuestions;
  const chapter = 'antioxidants';
  const bank = window.LabelNotesBanks[chapter];
  const blocks = bank.blocks.filter((b) => b.set === 'warm-up');
  const questions = blocks.flatMap((b) => b.questionIds.map((id) => bank.questions.find((q) => q.id === id)));
  const progress = window.LabelNotesProgress;
  const saved = () => progress.read().warmups[chapter] || {};

  window.LabelNotesWarmup = {
    appendRecap(host) {
      const records = saved();
      const guesses = questions.map((q) => E.options(q).find((o) => o.id === records[q.id]?.first[0])?.recap).filter(Boolean);
      if (!guesses.length) return;
      const recap = E.el('div', undefined, 'warmup-recap');
      recap.append(E.el('p', `At the start of the chapter you guessed ${guesses.join('; ')} — now you’ve seen why.`));
      const link = E.el('a', 'Revisit your first guesses', 'text-link');
      link.href = 'antioxidants.html#factory-warmup';
      recap.append(link);
      host.append(recap);
    },
  };

  const host = document.querySelector('[data-warmup]');
  if (!host) return;
  const nav = E.el('nav', undefined, 'warmup-nav');
  nav.setAttribute('aria-label', 'Factory lines');
  const cards = E.el('div');
  host.append(nav, cards);
  function show(index, focus = true) {
    [...cards.children].forEach((card, i) => card.hidden = i !== index);
    [...nav.children].forEach((button, i) => {
      if (i === index) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    if (focus) cards.children[index].querySelector('h3').focus();
  }
  blocks.forEach((block, index) => {
    const q = questions[index];
    const card = E.el('section', undefined, 'warmup-card');
    card.id = block.id;
    const title = E.el('h3', block.title);
    title.tabIndex = -1;
    const question = E.renderQuestion(q);
    const reveal = E.el('div', undefined, 'warmup-reveal');
    reveal.setAttribute('role', 'status');
    reveal.hidden = true;
    const paint = (answer) => {
      reveal.hidden = false;
      reveal.replaceChildren(E.el('h4', 'What’s happening here'));
      const first = saved()[q.id]?.first[0];
      if (first && first !== answer[0])
        reveal.append(E.el('p', `Your first guess: ${E.options(q).find((o) => o.id === first).text}`));
      const list = E.el('ul');
      E.options(q).forEach((option) => {
        const item = E.el('li');
        const prefix = option.correct ? 'Best fit' : 'Why not';
        item.append(E.el('strong', `${prefix}${answer.includes(option.id) ? ' · Your guess' : ''}: ${option.text}`), E.el('p', option.feedback));
        list.append(item);
      });
      const link = E.el('a', q.review.label, 'text-link');
      link.href = q.review.href;
      link.dataset.review = card.id;
      reveal.append(list, link);
    };
    question.addEventListener('change', () => {
      const answer = E.read(q, question);
      progress.saveWarmup(chapter, q.id, answer);
      paint(answer);
    });
    const record = saved()[q.id];
    if (record) { E.restore(q, question, record.latest); paint(record.latest); }
    const next = E.el('button', index === blocks.length - 1 ? 'See the learning goals' : 'Next line', 'secondary-link warmup-next');
    next.type = 'button';
    next.addEventListener('click', () => {
      if (index < blocks.length - 1) show(index + 1);
      else {
        const goals = document.querySelector('[data-objectives]');
        goals.tabIndex = -1;
        goals.focus();
        goals.scrollIntoView({block:'start',behavior:'smooth'});
      }
    });
    card.append(title, question, reveal, next);
    cards.append(card);
    const button = E.el('button', `Line ${index + 1}`);
    button.type = 'button';
    button.setAttribute('aria-controls', card.id);
    button.addEventListener('click', () => show(index));
    nav.append(button);
  });
  show(0, false);
})();
