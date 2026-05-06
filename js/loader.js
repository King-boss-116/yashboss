/* ════════════════════════════════════════════════════
   loader.js — Cinematic Letter Loader (Y → A → S → H)
   Runs once per session. Skipped on repeat visits
   if sessionStorage flag is present.
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.loader = (function () {

  const loaderEl  = document.getElementById('loader');
  const letters   = ['ll-y', 'll-a', 'll-s', 'll-h'].map(id => document.getElementById(id));
  const subEl     = document.getElementById('loader-sub');
  const barEl     = document.getElementById('loader-bar');
  const fillEl    = document.getElementById('loader-fill');

  let onDone = null;

  function run(callback) {
    onDone = callback;

    if (!loaderEl) {
      callback && callback();
      return;
    }

    /* Stagger letter reveal */
    letters.forEach((letter, i) => {
      if (!letter) return;
      setTimeout(() => letter.classList.add('visible'), 300 + i * 200);
    });

    /* Sub-title + progress bar */
    setTimeout(() => {
      subEl && subEl.classList.add('visible');
      barEl && barEl.classList.add('visible');
      setTimeout(() => fillEl && fillEl.classList.add('full'), 80);
    }, 850);

    /* Exit */
    setTimeout(() => {
      loaderEl.classList.add('exit');
      setTimeout(() => {
        loaderEl.style.display = 'none';
        onDone && onDone();
      }, 620);
    }, 2700);
  }

  function skip(callback) {
    if (loaderEl) loaderEl.style.display = 'none';
    callback && callback();
  }

  function init(callback) {
    /* Skip loader on subsequent visits within same session */
    if (sessionStorage.getItem('yash_visited')) {
      skip(callback);
    } else {
      sessionStorage.setItem('yash_visited', '1');
      run(callback);
    }
  }

  return { init, run, skip };
})();
