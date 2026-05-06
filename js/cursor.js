/* ════════════════════════════════════════════════════
   cursor.js — Custom SVG-style Cursor + Trailing Ring
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.cursor = (function () {

  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (!cursor || !ring) return { init: () => {} };

  /* Positions */
  let mx = 0, my = 0; // mouse
  let rx = 0, ry = 0; // ring (lagged)

  /* Move cursor dot instantly */
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  /* Animate ring with lerp */
  (function animRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  /* Hover state — interactive elements */
  const hoverSelector = 'a, button, .project-card, .service-card, .service-full-card, .profile-card, .skill-matrix-card, .cert-card, .filter-btn, .tab-btn, .lang-toggle, .social-btn, .skill-tag';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  /* Text state — inputs */
  document.addEventListener('focusin', e => {
    if (e.target.matches('input, textarea, [contenteditable]')) {
      document.body.classList.add('cursor-text');
    }
  });

  document.addEventListener('focusout', e => {
    if (e.target.matches('input, textarea, [contenteditable]')) {
      document.body.classList.remove('cursor-text');
    }
  });

  /* Hide cursor when it leaves window */
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    ring.style.opacity   = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    ring.style.opacity   = '1';
  });

  function init() {
    /* Touch — hide cursor entirely */
    if (window.matchMedia('(hover: none)').matches) {
      cursor.style.display = 'none';
      ring.style.display   = 'none';
      document.body.style.cursor = 'auto';
    }
  }

  return { init };
})();
