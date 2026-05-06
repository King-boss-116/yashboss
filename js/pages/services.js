/* ════════════════════════════════════════════════════
   pages/services.js — Services & Interactive Skill Matrix
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};
YASH.pages = YASH.pages || {};

YASH.pages.services = (function () {

  const $t = key => YASH.i18n.get(key);
  const ja = () => YASH.i18n.getLang() === 'ja';
  let matrixInited = false;

  function render() {
    const el = document.getElementById('page-services');
    if (!el) return;
    matrixInited = false;

    el.innerHTML = `
      <div class="services-hero">
        <span class="section-eyebrow fade-up">${$t('svc_eyebrow')}</span>
        <h1 class="section-title fade-up">
          ${$t('svc_title')} <em>${$t('svc_accent')}</em>
        </h1>
      </div>

      <div class="services-full-grid">
        ${renderServiceCards()}
      </div>

      <!-- Interactive Skill Matrix -->
      <section class="skill-matrix-section">
        <div class="section-header fade-up">
          <span class="section-eyebrow">${$t('matrix_eyebrow')}</span>
          <h2 class="section-title">
            ${$t('matrix_title')} <em>${$t('matrix_accent')}</em>
          </h2>
        </div>
        <div class="skill-matrix-grid" id="skill-matrix-grid">
          <!-- Populated by JS after reveal -->
        </div>
      </section>

      ${renderFooter()}
    `;
  }

  function renderServiceCards() {
    return YASH.data.services.map((svc, i) => `
      <div class="service-full-card fade-up stagger-${(i % 5) + 1}">
        <span class="sfc-num">0${i + 1}</span>
        <div class="sfc-icon">${svc.icon}</div>
        <h3 class="sfc-title">${ja() ? svc.titleJa : svc.titleEn}</h3>
        <p class="sfc-desc">${ja() ? svc.descJa : svc.descEn}</p>
        <div class="sfc-tags">
          ${svc.tags.map(t => `<span class="sfc-tag">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  function initSkillMatrix() {
    if (matrixInited) return;
    const grid = document.getElementById('skill-matrix-grid');
    if (!grid) return;

    YASH.data.skillMatrix.forEach((sk, i) => {
      const card = document.createElement('div');
      card.className = 'skill-matrix-card fade-up stagger-' + ((i % 5) + 1);
      card.innerHTML = `
        <div class="skill-name">${sk.name}</div>
        <div class="skill-years">${sk.years}</div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" data-pct="${sk.pct}"></div>
        </div>
      `;
      grid.appendChild(card);
    });

    matrixInited = true;

    /* Use IntersectionObserver to trigger bars when visible */
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = grid.querySelectorAll('.skill-bar-fill[data-pct]');
          bars.forEach((bar, i) => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 100 + i * 45);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.15 });

    obs.observe(grid);

    /* Animate .fade-up cards */
    setTimeout(() => YASH.animations.initObserver('services'), 80);
  }

  function renderFooter() {
    return `
      <footer>
        <div class="footer-logo">Y<span>.</span></div>
        <div class="footer-copy">${$t('footer_copy')}</div>
      </footer>
    `;
  }

  function onInit() {
    YASH.animations.initObserver('services');
    initSkillMatrix();
  }

  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'services') {
      render();
      onInit();
    }
  });

  function init() {
    render();
    YASH.router.register('services', onInit);
  }

  return { init, render };
})();
