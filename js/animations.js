/* ════════════════════════════════════════════════════
   animations.js — Scroll Animations, Count-up,
   Magnetic Buttons, Parallax
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.animations = (function () {

  /* ─── IntersectionObserver for .fade-up ─── */
  function initObserver(page) {
    const pageId = 'page-' + (page || YASH.router.getCurrentPage());
    const pageEl = document.getElementById(pageId);
    if (!pageEl) return;

    const els = pageEl.querySelectorAll('.fade-up:not(.revealed)');
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
  }

  /* ─── Number Count-up ─── */
  function countUp(el, target, duration) {
    const isFloat = !Number.isInteger(target);
    let startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const current = target * ease;
      el.textContent = isFloat ? current.toFixed(2) : Math.floor(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = isFloat ? target.toFixed(2) : target;
      }
    }

    requestAnimationFrame(step);
  }

  function initCountUp() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count);
      if (!isNaN(target)) countUp(el, target, 1600);
    });
  }

  /* ─── Magnetic Buttons ─── */
  function initMagnetic() {
    const selector = '.btn-primary, .btn-outline, .form-submit, .btn-download';
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width  / 2;
        const y = e.clientY - rect.top  - rect.height / 2;
        this.style.transform = `translateY(-2px) translate(${x * 0.16}px, ${y * 0.16}px)`;
      });
      btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
      });
    });
  }

  /* ─── Hero Parallax ─── */
  function initParallax() {
    window.addEventListener('scroll', () => {
      if (YASH.router.getCurrentPage() !== 'home') return;
      const sy   = window.scrollY;
      const hero = document.querySelector('.hero-content');
      if (hero) hero.style.transform = `translateY(${sy * 0.22}px)`;
    }, { passive: true });
  }

  /* ─── Hero reveal sequence ─── */
  function revealHero() {
    const items = [
      { id: 'h-label',   delay: 100 },
      { id: 'h-name',    delay: 250 },
      { id: 'h-tagline', delay: 450 },
      { id: 'h-cta',     delay: 650 },
      { id: 'h-scroll',  delay: 900 },
    ];
    items.forEach(({ id, delay }) => {
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.classList.add('revealed'), delay);
    });
  }

  /* ─── Skill bar animation ─── */
  function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill[data-pct]');
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.pct + '%';
      }, 200 + i * 50);
    });
  }

  function init() {
    initMagnetic();
    initParallax();
    initObserver('home');
  }

  return {
    init,
    initObserver,
    initCountUp,
    initMagnetic,
    revealHero,
    animateSkillBars,
  };
})();
