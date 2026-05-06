/* ════════════════════════════════════════════════════
   pages/projects.js — Projects Page: Filterable Grid
   Categories: All · Blockchain · Web · Java
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};
YASH.pages = YASH.pages || {};

YASH.pages.projects = (function () {

  const $t = key => YASH.i18n.get(key);
  const ja = () => YASH.i18n.getLang() === 'ja';
  let activeFilter = 'all';

  function render() {
    const el = document.getElementById('page-projects');
    if (!el) return;

    el.innerHTML = `
      <div class="projects-header">
        <span class="section-eyebrow fade-up">${$t('proj_eyebrow')}</span>
        <h1 class="section-title fade-up">
          ${$t('proj_title')} <em>${$t('proj_accent')}</em>
        </h1>
        <div class="filter-bar" id="project-filter-bar">
          ${renderFilterBtns()}
        </div>
      </div>

      <div class="projects-grid" id="projects-grid">
        ${renderCards()}
      </div>

      ${renderFooter()}
    `;

    bindFilters();
    applyFilter(activeFilter);
  }

  function renderFilterBtns() {
    const filters = [
      { key: 'all',        labelKey: 'filter_all' },
      { key: 'blockchain', labelKey: 'filter_blockchain' },
      { key: 'web',        labelKey: 'filter_web' },
      { key: 'java',       labelKey: 'filter_java' },
    ];
    return filters.map(f => `
      <button class="filter-btn ${f.key === activeFilter ? 'active' : ''}"
              data-filter="${f.key}">
        ${$t(f.labelKey)}
      </button>
    `).join('');
  }

  function renderCards() {
    return YASH.data.projects.map((p, i) => `
      <div class="project-card fade-up stagger-${(i % 3) + 1}"
           data-category="${p.category}">
        <div class="project-img">
          <span class="project-img-icon">${p.icon}</span>
          <span class="project-tag-overlay">${p.category}</span>
        </div>
        <div class="project-body">
          <span class="project-period">${p.period}</span>
          <h3 class="project-title">${ja() ? p.titleJa : p.titleEn}</h3>
          <p class="project-desc">${ja() ? p.descJa : p.descEn}</p>
          <div class="project-stack">
            ${p.stack.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function bindFilters() {
    const bar = document.getElementById('project-filter-bar');
    if (!bar) return;

    bar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(activeFilter);
    });
  }

  function applyFilter(filter) {
    const cards = document.querySelectorAll('#projects-grid .project-card');
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      if (show) {
        card.style.display = '';
        requestAnimationFrame(() => card.style.opacity = '1');
      } else {
        card.style.opacity = '0';
        setTimeout(() => {
          if (card.style.opacity === '0') card.style.display = 'none';
        }, 300);
      }
    });
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
    YASH.animations.initObserver('projects');
  }

  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'projects') {
      render();
      onInit();
    }
  });

  function init() {
    render();
    YASH.router.register('projects', onInit);
  }

  return { init, render };
})();
