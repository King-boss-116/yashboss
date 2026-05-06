/* ════════════════════════════════════════════════════
   router.js — Client-side Page Router
   Curtain transition · Page lifecycle hooks
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.router = (function () {

  const curtain = document.getElementById('curtain');
  let currentPage = 'home';
  let transitioning = false;

  /* Page lifecycle hooks — populated by page modules */
  const hooks = {};

  function register(page, hook) {
    hooks[page] = hook;
  }

  /* ─── Navigate with curtain animation ─── */
  function navigateTo(page, skipAnim) {
    if (page === currentPage || transitioning) return;

    if (skipAnim) {
      switchPage(page);
      return;
    }

    transitioning = true;

    /* Curtain slides in (top → bottom) */
    curtain.classList.remove('slide-out');
    void curtain.offsetWidth; // reflow
    curtain.classList.add('slide-in');

    setTimeout(() => {
      switchPage(page);

      /* Curtain slides out (bottom → top) */
      curtain.classList.remove('slide-in');
      void curtain.offsetWidth;
      curtain.classList.add('slide-out');

      setTimeout(() => {
        curtain.classList.remove('slide-out');
        transitioning = false;
      }, 520);
    }, 500);
  }

  /* ─── Instant page switch ─── */
  function switchPage(page) {
    /* Hide all pages */
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    /* Show target */
    const target = document.getElementById('page-' + page);
    if (!target) return;
    target.classList.add('active');

    /* Update nav active state */
    YASH.nav.setActive(page);

    /* Scroll to top */
    window.scrollTo(0, 0);

    currentPage = page;

    /* Run page init hook */
    if (hooks[page]) {
      setTimeout(() => hooks[page](), 60);
    }

    /* Re-init scroll observer for fade-up animations */
    setTimeout(() => YASH.animations.initObserver(page), 100);

    /* Dispatch page change event */
    document.dispatchEvent(new CustomEvent('pagechange', { detail: { page } }));
  }

  /* ─── Global click handler for data-nav elements ─── */
  document.addEventListener('click', e => {
    const navEl = e.target.closest('[data-nav]');
    if (!navEl) return;
    e.preventDefault();
    const target = navEl.dataset.nav;
    navigateTo(target);
  });

  function getCurrentPage() {
    return currentPage;
  }

  function init() {
    /* Set home as initial page */
    switchPage('home');
  }

  return { init, navigateTo, register, getCurrentPage };
})();
