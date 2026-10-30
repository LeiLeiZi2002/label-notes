/* 包装原图使用原生弹窗放大；没有脚本时，链接仍可直接打开图片。 */
(() => {
  const links = [...document.querySelectorAll('[data-zoom-image]')];
  if (!links.length) return;
  const viewer = document.createElement('dialog');
  viewer.className = 'image-viewer';
  viewer.setAttribute('aria-label', 'Package image');
  const toolbar = document.createElement('div');
  toolbar.className = 'image-viewer-toolbar';
  function makeButton(text, label = text) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'secondary-link';
    button.textContent = text;
    button.setAttribute('aria-label', label);
    return button;
  }
  const smaller = makeButton('−', 'Zoom out');
  const larger = makeButton('+', 'Zoom in');
  const fit = makeButton('Fit to window');
  const actual = makeButton('Actual size');
  const close = makeButton('Close image');
  close.classList.add('image-viewer-close');
  const level = document.createElement('output');
  level.className = 'image-viewer-scale';
  level.setAttribute('aria-label', 'Zoom level');
  level.setAttribute('aria-live', 'polite');
  toolbar.append(smaller, level, larger, fit, actual, close);
  const hint = document.createElement('p');
  hint.className = 'image-viewer-hint';
  hint.id = 'image-viewer-help';
  hint.setAttribute('role', 'status');
  const stage = document.createElement('div');
  stage.className = 'image-viewer-stage';
  stage.tabIndex = 0;
  stage.setAttribute('role', 'region');
  stage.setAttribute('aria-label', 'Scrollable package image');
  stage.setAttribute('aria-describedby', hint.id);
  const image = document.createElement('img');
  image.draggable = false;
  stage.append(image);
  const original = document.createElement('a');
  original.className = 'text-link';
  original.target = '_blank';
  original.rel = 'noopener';
  original.textContent = 'Open full-size image';
  viewer.append(toolbar, hint, stage, original);
  document.body.append(viewer);
  let trigger;
  let scale = 1;
  let fitted = true;
  let ready = false;

  function fitScale() {
    return Math.min(1, stage.clientWidth / image.naturalWidth, stage.clientHeight / image.naturalHeight);
  }

  function setZoom(value, toFit = false) {
    if (!ready) return;
    const width = image.getBoundingClientRect().width;
    const height = image.getBoundingClientRect().height;
    const centerX = width ? (stage.scrollLeft + Math.min(stage.clientWidth, width) / 2) / width : 0.5;
    const centerY = height ? (stage.scrollTop + Math.min(stage.clientHeight, height) / 2) / height : 0.5;
    const minimum = fitScale();
    scale = Math.max(minimum, Math.min(4, value));
    fitted = toFit;
    const newWidth = image.naturalWidth * scale;
    const newHeight = image.naturalHeight * scale;
    image.style.width = `${newWidth}px`;
    image.style.height = `${newHeight}px`;
    stage.scrollTo({
      left: toFit ? 0 : centerX * newWidth - Math.min(stage.clientWidth, newWidth) / 2,
      top: toFit ? 0 : centerY * newHeight - Math.min(stage.clientHeight, newHeight) / 2,
      behavior: 'instant'
    });
    level.value = `${Math.round(scale * 100)}%`;
    smaller.disabled = scale <= minimum + 0.001;
    larger.disabled = scale >= 4;
    fit.disabled = fitted;
    actual.disabled = Math.abs(scale - 1) < 0.001;
  }

  function showLoadedImage() {
    if (!viewer.open || !image.naturalWidth) return;
    ready = true;
    stage.setAttribute('aria-busy', 'false');
    hint.textContent = 'Use + and − to zoom, or 0 to fit the window. Scroll or focus the image and use arrow keys to move around.';
    setZoom(fitScale(), true);
  }

  links.forEach(link => link.addEventListener('click', event => {
    if (typeof viewer.showModal !== 'function' || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger = link;
    ready = false;
    [smaller, larger, fit, actual].forEach(button => { button.disabled = true; });
    level.value = '…';
    hint.textContent = 'Loading package image…';
    stage.setAttribute('aria-busy', 'true');
    image.src = link.href;
    image.alt = link.querySelector('img')?.alt || link.dataset.imageAlt || 'Product packaging';
    original.href = link.href;
    viewer.showModal();
    stage.focus({ preventScroll: true });
    if (image.complete) showLoadedImage();
  }));
  image.addEventListener('load', showLoadedImage);
  image.addEventListener('error', () => {
    ready = false;
    stage.setAttribute('aria-busy', 'false');
    level.value = '—';
    hint.textContent = 'This image could not be loaded. Open the full-size image to try it directly.';
  });
  smaller.addEventListener('click', () => setZoom(scale / 1.5));
  larger.addEventListener('click', () => setZoom(scale * 1.5));
  fit.addEventListener('click', () => setZoom(fitScale(), true));
  actual.addEventListener('click', () => setZoom(1));
  viewer.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === '+' || event.key === '=') setZoom(scale * 1.5);
    else if (event.key === '-') setZoom(scale / 1.5);
    else if (event.key === '0') setZoom(fitScale(), true);
    else return;
    event.preventDefault();
  });
  window.addEventListener('resize', () => {
    if (viewer.open && ready) setZoom(fitted ? fitScale() : scale, fitted);
  });
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => trigger?.focus({ preventScroll: true }));
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const box = viewer.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close();
  });
})();
