/* 首次成绩、完成状态和阅读位置共用一份本地记录。 */
(() => {
  const key = 'label-notes-course-v3';
  const chapters = ['preservatives', 'antioxidants', 'texture', 'sweeteners-flavors'];
  let memory = { version: 3, assessments: {}, visits: {}, practice: {}, warmups: {} };
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
      const saved = JSON.parse(storage?.getItem(key) || storage?.getItem('label-notes-course-v2') || 'null');
      if ([2, 3].includes(saved?.version) && saved.assessments && saved.visits)
        memory = { ...saved, version: 3, warmups: saved.warmups || {} };
    } catch { /* 无有效记录时允许重新学习。 */ }
    return memory;
  }
  function write() {
    try { storage?.setItem(key, JSON.stringify(memory)); }
    catch { persistent = false; storage = null; }
    render();
  }
  const finished = (attempt) => attempt?.finishReason === 'submit' && attempt.outcomes?.length
    && attempt.outcomes.every((outcome) => outcome.answered);
  const completion = (record) => record?.completion
    || [record?.first, record?.latest].find(finished);
  const completionScore = ({ earned, total }) => ({ earned, total });
  function complete(id, result) {
    const data = read();
    const previous = data.assessments[id];
    if (previous?.latest.submittedAt === result.submittedAt) return;
    const revised = previous && previous.latest.assessmentVersion !== result.assessmentVersion;
    const history = previous?.history || [];
    if (revised) {
      const { history: older, ...archived } = previous;
      history.push(archived);
    }
    const done = (!revised && completion(previous)) || (finished(result) && result);
    data.assessments[id] = {
      first: !revised && previous?.first || result,
      latest: result,
      completion: done ? completionScore(done) : null,
      attempts: (revised ? 0 : previous?.attempts || 0) + 1,
      history,
    };
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
      const done = completion(result);
      label.textContent = done ? `Completed · ${done.earned}/${done.total}`
        : result ? 'Ended early' : canOpen(id) ? 'Ready to start' : 'Not started';
    });
    document.querySelectorAll('[data-progress-note]').forEach(note => {
      note.textContent = !storage ? 'Browser storage is blocked. Progress cannot be saved between pages. Allow site storage to keep your results.' : !persistent ? 'Progress is saved for this tab only. Allow local storage to keep it after closing the browser.' : 'Your progress is saved in this browser.';
    });
    const summary = document.getElementById('course-progress-summary');
    if (summary) {
      const baseline = data.assessments.pretest?.first;
      const count = chapters.filter(id => completion(data.assessments[id])).length;
      summary.textContent = baseline ? `First quick check: ${baseline.earned}/${baseline.total}. ${count} of ${chapters.length} available chapters completed.` : 'Nine short questions before you begin. No time limit and no pass mark.';
    }
  }
  window.LabelNotesProgress = {
    read, complete, canOpen,
    saveWarmup(chapter, question, answer) {
      const data = read();
      data.warmups[chapter] ||= {};
      const previous = data.warmups[chapter][question];
      data.warmups[chapter][question] = { first: previous?.first || [...answer], latest: [...answer] };
      write();
    },
    savePractice(id, current, result) {
      const data=read(); data.practice ||= {}; const previous=data.practice[id] || {};
      data.practice[id]={...previous,current};
      if(result) {
        const first=previous.first || result;
        result.outcomes=result.outcomes.map(o=>({...o,firstCorrect:first.outcomes.find(p=>p.id===o.id)?.correct ?? o.correct}));
        data.practice[id]={current,first,latest:result,attempts:(previous.attempts||0)+1};
      }
      write();
    },
    isPersistent: () => persistent,
    visit(chapter, section) { const data = read(); data.visits[chapter] = section; data.lastVisit = { chapter, section }; write(); }
  };
  render();
  const chapter = document.body.dataset.chapter;
  if (chapter && storage && !canOpen(chapter)) location.replace(entry(chapter));
  window.addEventListener('pageshow', render);
  window.addEventListener('storage', render);
})();
