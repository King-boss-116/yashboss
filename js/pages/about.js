/* ════════════════════════════════════════════════════
   pages/about.js — About Page: Stats, Timeline, Profiles
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};
YASH.pages = YASH.pages || {};

YASH.pages.about = (function () {

  const $t = key => YASH.i18n.get(key);
  const lang = () => YASH.i18n.getLang();

  function render() {
    const el = document.getElementById('page-about');
    if (!el) return;

    el.innerHTML = `
      <!-- ABOUT HERO -->
      <section class="about-hero">
        <div class="about-intro-grid">
          <div>
            <span class="section-eyebrow fade-up">${$t('about_eyebrow')}</span>
            <h2 class="about-headline fade-up">
              <span>${$t('about_h1')}</span><br>
              <em>${$t('about_h2')}</em><br>
              <span>${$t('about_h3')}</span>
            </h2>
            <div class="stat-row fade-up">
              <div class="stat-card">
                <span class="stat-num" data-count="9.19">0</span>
                <span class="stat-label">${$t('stat_gpa')}</span>
              </div>
              <div class="stat-card">
                <span class="stat-num" data-count="5">0</span>
                <span class="stat-label">${$t('stat_java')}</span>
              </div>
              <div class="stat-card">
                <span class="stat-num" data-count="3">0</span>
                <span class="stat-label">${$t('stat_lang')}</span>
              </div>
            </div>
          </div>
          <div class="about-body fade-up">
            <p>${$t('about_body1')}</p>
            <p>${$t('about_body2')}</p>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="timeline-section">
        <div class="section-header fade-up">
          <span class="section-eyebrow">${$t('journey_eyebrow')}</span>
          <h2 class="section-title">${$t('journey_title')} <em>${$t('journey_accent')}</em></h2>
        </div>
        <div class="timeline">
          ${renderTimeline()}
        </div>
      </section>

      <!-- PROFILES -->
      <section class="profiles-section">
        <div class="section-header fade-up">
          <span class="section-eyebrow">${$t('profiles_eyebrow')}</span>
          <h2 class="section-title">${$t('profiles_title')} <em>${$t('profiles_accent')}</em></h2>
        </div>
        <div class="profiles-grid">
          ${renderProfiles()}
        </div>
      </section>

      ${renderFooter()}
    `;
  }

  function renderTimeline() {
    /* Experience + Education combined */
    const expItems = YASH.data.experience.map((exp, i) => `
      <div class="timeline-item fade-up stagger-${(i % 4) + 1}">
        <span class="tl-date">${exp.period}</span>
        <h3 class="tl-title">${lang() === 'ja' ? exp.titleJa : exp.titleEn}</h3>
        <p class="tl-org">${lang() === 'ja' ? exp.companyJa : exp.companyEn}</p>
        <p class="tl-desc">${(lang() === 'ja' ? exp.bulletsJa : exp.bulletsEn)[0]}</p>
      </div>
    `).join('');

    const eduItems = YASH.data.education.map((edu, i) => `
      <div class="timeline-item fade-up stagger-${(i % 4) + 3}">
        <span class="tl-date">${edu.period}</span>
        <h3 class="tl-title">${lang() === 'ja' ? edu.degreeJa : edu.degreeEn}</h3>
        <p class="tl-org">${lang() === 'ja' ? edu.schoolJa : edu.schoolEn} · GPA ${edu.gpa}</p>
        <p class="tl-desc">${(lang() === 'ja' ? edu.bulletsJa : edu.bulletsEn)[1]}</p>
      </div>
    `).join('');

    return expItems + eduItems;
  }

  function renderProfiles() {
    return YASH.data.profiles.map((p, i) => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer"
         class="profile-card fade-up stagger-${(i % 5) + 1}">
        <span class="profile-platform">${p.platform}</span>
        <span class="profile-handle">${p.handle}</span>
        <span class="profile-arrow">↗</span>
      </a>
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

  function onInit() {
    YASH.animations.initObserver('about');
    YASH.animations.initCountUp();
  }

  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'about') {
      render();
      onInit();
    }
  });

  function init() {
    render();
    YASH.router.register('about', onInit);
  }

  return { init, render };
})();
