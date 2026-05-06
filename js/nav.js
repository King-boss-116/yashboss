/* ════════════════════════════════════════════════════
   nav.js — Navigation: scroll effects, mobile menu,
            active state, scroll progress bar
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.nav = (function () {

  const navEl       = document.getElementById('main-nav');
  const progressEl  = document.getElementById('scroll-progress');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');

  /* ─── Scroll Effects ─── */
  function handleScroll() {
    const sc = document.documentElement.scrollTop || document.body.scrollTop;
    const sh = document.documentElement.scrollHeight - window.innerHeight;

    /* Frosted nav */
    navEl && navEl.classList.toggle('scrolled', sc > 40);

    /* Progress bar */
    if (progressEl) {
      progressEl.style.width = sh > 0 ? (sc / sh * 100) + '%' : '0%';
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ─── Hamburger / Mobile Menu ─── */
  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    /* Stagger items in */
    mobileMenu.querySelectorAll('a').forEach((a, i) => {
      a.style.transitionDelay = (i * 0.07) + 's';
    });
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.style.transitionDelay = '0s';
    });
  }

  hamburger && hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  /* Close on mobile nav link click */
  mobileMenu && mobileMenu.addEventListener('click', e => {
    if (e.target.closest('[data-nav]')) closeMenu();
  });

  /* ─── Active state management ─── */
  function setActive(page) {
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.classList.toggle('active', el.dataset.nav === page);
    });
  }

  /* ─── Language toggle labels ─── */
  function updateLangLabels(lang) {
    const label = lang === 'ja' ? 'EN' : 'JP';
    document.querySelectorAll('#lang-label, #lang-label-mob').forEach(el => {
      el.textContent = label;
    });
  }

  document.addEventListener('langchange', e => {
    updateLangLabels(e.detail.lang);
  });

  function init() {
    handleScroll(); // initial state
    updateLangLabels(YASH.i18n.getLang());
  }

  return { init, setActive, closeMenu };
})();
