/* ════════════════════════════════════════════════════
   main.js — Application Entry Point
   Bootstraps all modules in the correct order.
   ════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* Wait for DOM */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    /* 1. i18n — must be first (other modules call $t()) */
    YASH.i18n.init();

    /* 2. Cursor */
    YASH.cursor.init();

    /* 3. Navigation */
    YASH.nav.init();

    /* 4. Render all page HTML */
    YASH.pages.home.init();
    YASH.pages.about.init();
    YASH.pages.resume.init();
    YASH.pages.projects.init();
    YASH.pages.services.init();
    YASH.pages.contact.init();

    /* 5. Router (registers page hooks, sets initial page) */
    YASH.router.init();

    /* 6. Animations (magnetic, parallax) */
    YASH.animations.init();

    /* 7. Loader — runs last, calls hero reveal on completion */
    YASH.loader.init(() => {
      /* After loader exits: reveal hero + init 3D */
      YASH.hero3d.init();
      YASH.animations.revealHero();
      setTimeout(() => YASH.animations.initObserver('home'), 200);
    });

    /* Dev console signature */
    console.log(
      '%cYash | Portfolio\n%c Software & AI Engineer · Tokyo 🇯🇵',
      'color:#1D9E75;font-size:16px;font-weight:bold;',
      'color:#4a6080;font-size:12px;'
    );
  }
})();
