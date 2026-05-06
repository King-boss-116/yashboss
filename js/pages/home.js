/* ════════════════════════════════════════════════════
   pages/home.js — Home Page: Hero, Marquee, Services
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.pages = YASH.pages || {};

YASH.pages.home = (function () {

  const t  = () => YASH.i18n.get.bind(YASH.i18n);
  const $t = key => YASH.i18n.get(key);

  function render() {
    const el = document.getElementById('page-home');
    if (!el) return;

    el.innerHTML = `
      <!-- HERO -->
      <section id="hero" class="grain">
        <canvas id="hero-canvas"></canvas>
        <div class="hero-content">
          <p class="hero-label" id="h-label"
             data-en="${escHtml(YASH.i18n.get('hero_label'))}"
             data-ja="${escHtml(YASH.i18n.get('hero_label'))}">
            ${$t('hero_label')}
          </p>
          <h1 class="hero-name" id="h-name">
            <span id="h-n1">ヤシュ</span><br>
            <span class="accent" id="h-n2">Yash</span>
          </h1>
          <p class="hero-tagline" id="h-tagline"
             data-en="${escHtml(YASH.data.en_tagline || 'Building intelligent AI systems and robust software for tomorrow\'s world. Currently crafting LLM-powered solutions at Akatsuki AI Technologies.')}"
             data-ja="${escHtml(YASH.data.ja_tagline || '明日の世界のために、インテリジェントなAIシステムと堅牢なソフトウェアを構築しています。現在、赤月AIテクノロジーズにてLLM活用ソリューションを開発中です。')}">
            ${$t('hero_tagline')}
          </p>
          <div class="hero-cta-row" id="h-cta">
            <a href="#" class="btn-primary" data-nav="projects">
              <span id="h-cta1">${$t('hero_cta1')}</span> →
            </a>
            <a href="#" class="btn-outline" data-nav="contact">
              <span id="h-cta2">${$t('hero_cta2')}</span>
            </a>
          </div>
        </div>
        <div class="hero-scroll-hint" id="h-scroll">
          <div class="scroll-line"></div>
          <span id="h-scroll-txt">${$t('hero_scroll')}</span>
        </div>
      </section>

      <!-- MARQUEE -->
      <div class="marquee-section">
        <div class="marquee-track">
          ${renderMarquee()}
        </div>
      </div>

      <!-- SERVICES PREVIEW -->
      <section class="services-preview">
        <div class="section-header fade-up">
          <span class="section-eyebrow">${$t('home_eyebrow')}</span>
          <h2 class="section-title">
            <em>${$t('home_title1')}</em> ${$t('home_title2')}
          </h2>
        </div>
        <div class="services-grid">
          ${renderServiceCards()}
        </div>
      </section>

      ${renderFooter()}
    `;
  }

  function renderMarquee() {
    const items = YASH.data.marquee;
    /* Duplicate for seamless loop */
    const doubled = [...items, ...items];
    return doubled.map(item =>
      `<span class="marquee-item"><span class="dot"></span>${item}</span>`
    ).join('');
  }

  function renderServiceCards() {
    const cards = [
      { num: '01', icon: '🤖', nameKey: 'svc_ai_name', descKey: 'svc_ai_desc' },
      { num: '02', icon: '⚙️', nameKey: 'svc_be_name', descKey: 'svc_be_desc' },
      { num: '03', icon: '⛓️', nameKey: 'svc_bc_name', descKey: 'svc_bc_desc' },
      { num: '04', icon: '🌐', nameKey: 'svc_fs_name', descKey: 'svc_fs_desc' },
    ];
    return cards.map((c, i) => `
      <div class="service-card fade-up stagger-${i + 1}">
        <span class="service-num">${c.num}</span>
        <div class="service-icon">${c.icon}</div>
        <h3 class="service-name">${$t(c.nameKey)}</h3>
        <p class="service-desc">${$t(c.descKey)}</p>
      </div>
    `).join('');
  }

  function renderFooter() {
    return `
      <footer>
        <div class="footer-logo">Y<span>.</span></div>
        <div class="footer-copy">${$t('footer_copy')}</div>
      </footer>
    `;
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function onInit() {
    /* Re-init 3D after DOM update */
    YASH.hero3d.init();
    /* Magnetic buttons */
    YASH.animations.initMagnetic();
    YASH.animations.initObserver('home');
    /* Hero reveal after a short delay */
    setTimeout(() => YASH.animations.revealHero(), 80);
  }

  /* Re-render on lang change */
  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'home') {
      render();
      onInit();
    }
  });

  /* Register with router */
  function init() {
    render();
    YASH.router.register('home', onInit);
  }

  return { init, render };
})();
