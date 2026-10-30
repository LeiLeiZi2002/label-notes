/* 同一标签页中的测验状态：课程导航、刷新恢复和计时共用这一份记录。 */
(() => {
  // 题目已调整；旧答案不沿用于本套题。
  const key = 'label-notes-chapter-check-v2';
  let memory = null;
  const store = {
    read() {
      try { return JSON.parse(sessionStorage.getItem(key)) || memory; }
      catch { return memory; }
    },
    write(value) {
      memory = value;
      try { sessionStorage.setItem(key, JSON.stringify(value)); }
      catch { /* 存储不可用时，当前页面仍可完成作答。 */ }
    }
  };
  window.LabelNotesAssessment = store;
  function returnToAttempt() {
    if (store.read()?.status === 'active' && !document.body.classList.contains('assessment-page')) {
      location.replace(new URL('assessment.html', location.href));
    }
  }
  returnToAttempt();
  window.addEventListener('pageshow', returnToAttempt);
})();
