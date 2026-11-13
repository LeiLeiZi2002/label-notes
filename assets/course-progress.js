/* 首次成绩、完成状态和阅读位置共用一份本地记录。 */
(() => {
  const key = 'label-notes-course-v1';
  const chapters = ['preservatives', 'antioxidants'];
  let memory = { version: 1, assessments: {}, visits: {} };
  let persistent = true;
  let storage;
  try { storage = localStorage; storage.setItem(`${key}-check`, '1'); storage.removeItem?.(`${key}-check`); }
  catch {
    persistent = false;
    try { storage = sessionStorage; storage.setItem(`${key}-check`, '1'); storage.removeItem(`${key}-check`); }
    catch { storage = null; }
  }
  function read() {
    try {
      const saved = JSON.parse(storage?.getItem(key) || 'null');
      if (saved?.version === 1 && saved.assessments && saved.visits) memory = saved;
    } catch { /* 无有效记录时允许重新学习。 */ }
    return memory;
  }
  function write() {
    try { storage?.setItem(key, JSON.stringify(memory)); }
    catch { persistent = false; storage = null; }
    render();
  }
  function complete(id, result) {
    const data = read();
    const previous = data.assessments[id];
    if (previous?.latest.submittedAt === result.submittedAt) return;
    data.assessments[id] = { first: previous?.first || result, latest: result, attempts: (previous?.attempts || 0) + 1 };
    write();
  }
  function canOpen(id) {
    return !chapters.includes(id) || Boolean(read().assessments.pretest);
  }
  function entry(id) {
    const data = read();
    if (!data.assessments.pretest) return 'pretest.html';
    return `${id}.html${data.visits[id] ? `#${data.visits[id]}` : ''}`;
  }
  function render() {
    const data = read();
    const current = data.lastVisit?.chapter || 'preservatives';
    document.querySelectorAll('[data-resume-link]').forEach(link => {
      link.href = entry(current);
      link.textContent = data.assessments.pretest ? 'Continue learning' : 'Start the quick check';
    });
    document.querySelectorAll('[data-chapter-entry]').forEach(link => {
      const id = link.dataset.chapterEntry;
      link.href = entry(id);
      link.textContent = data.assessments[id] ? 'Revisit chapter' : canOpen(id) ? 'Open chapter' : 'Take the quick check first';
    });
    document.querySelectorAll('[data-chapter-status]').forEach(label => {
      const id = label.dataset.chapterStatus;
      const result = data.assessments[id];
      label.textContent = result ? `Completed · ${result.latest.earned}/${result.latest.total}` : canOpen(id) ? 'Ready to start' : 'Not started';
    });
    document.querySelectorAll('[data-progress-note]').forEach(note => {
      note.textContent = !storage ? 'Browser storage is blocked. Progress cannot be saved between pages. Allow site storage to keep your results.' : !persistent ? 'Progress is saved for this tab only. Allow local storage to keep it after closing the browser.' : 'Your progress is saved in this browser.';
    });
    const summary = document.getElementById('course-progress-summary');
    if (summary) {
      const baseline = data.assessments.pretest?.first;
      const count = chapters.filter(id => data.assessments[id]).length;
      summary.textContent = baseline ? `First quick check: ${baseline.earned}/${baseline.total}. ${count} of 2 available chapters completed.` : 'Five short questions before you begin. No time limit and no pass mark.';
    }
  }
  window.LabelNotesProgress = {
    read, complete, canOpen, isPersistent: () => persistent,
    visit(chapter, section) { const data = read(); data.visits[chapter] = section; data.lastVisit = { chapter, section }; write(); }
  };
  render();
  const chapter = document.body.dataset.chapter;
  if (chapter && storage && !canOpen(chapter)) location.replace(entry(chapter));
  window.addEventListener('pageshow', render);
  window.addEventListener('storage', render);
})();
