/* 同一标签页中的测验状态：课程导航、刷新恢复和计时共用这一份记录。 */
(() => {
  // 题目已调整；旧答案不沿用于本套题。
  const id = document.body.dataset.assessment || 'preservatives';
  const key = id === 'preservatives' ? 'label-notes-chapter-check-v2' : `label-notes-check-${id}-v1`;
  const activeKey = 'label-notes-active-check-v1';
  let memory = null;
  const store = {
    read() {
      try { return JSON.parse(sessionStorage.getItem(key)) || memory; }
      catch { return memory; }
    },
    write(value) {
      memory = value;
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
        if (value?.status === 'active') sessionStorage.setItem(activeKey, JSON.stringify({ id, page: location.pathname.split('/').pop() }));
        else if (JSON.parse(sessionStorage.getItem(activeKey) || 'null')?.id === id) sessionStorage.removeItem(activeKey);
      }
      catch { /* 存储不可用时，当前页面仍可完成作答。 */ }
    }
  };
  window.LabelNotesAssessment = store;
  function returnToAttempt() {
    let attempt;
    try { attempt = JSON.parse(sessionStorage.getItem(activeKey) || 'null'); } catch {}
    if (attempt && attempt.page !== location.pathname.split('/').pop()) location.replace(new URL(attempt.page, location.href));
  }
  returnToAttempt();
  window.addEventListener('pageshow', returnToAttempt);
})();
