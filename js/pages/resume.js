/* ════════════════════════════════════════════════════
   pages/resume.js — Resume Page: 5-Tab System
   Work | Education | Skills | Certs | Achievements
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};
YASH.pages = YASH.pages || {};

YASH.pages.resume = (function () {

  const $t  = key => YASH.i18n.get(key);
  const l   = () => YASH.i18n.getLang();
  const ja  = () => l() === 'ja';

  function render() {
    const el = document.getElementById('page-resume');
    if (!el) return;

    el.innerHTML = `
      <div class="resume-header">
        <span class="section-eyebrow fade-up">${$t('resume_eyebrow')}</span>
        <h1 class="resume-title fade-up">${$t('resume_title')}</h1>
      </div>

      <div class="download-bar">
        <span class="download-text">${$t('download_text')}</span>
        <a href="mailto:yashchawla116@gmail.com?subject=CV Request" class="btn-download">
          ${$t('download_btn')}
        </a>
      </div>

      <div class="tab-bar" id="resume-tab-bar">
        <button class="tab-btn active" data-tab="work">${$t('tab_work')}</button>
        <button class="tab-btn" data-tab="edu">${$t('tab_edu')}</button>
        <button class="tab-btn" data-tab="skills">${$t('tab_skills')}</button>
        <button class="tab-btn" data-tab="certs">${$t('tab_certs')}</button>
        <button class="tab-btn" data-tab="achieve">${$t('tab_achieve')}</button>
      </div>

      <div class="tab-content active" id="tab-work">${renderWork()}</div>
      <div class="tab-content"        id="tab-edu">${renderEdu()}</div>
      <div class="tab-content"        id="tab-skills">${renderSkills()}</div>
      <div class="tab-content"        id="tab-certs">${renderCerts()}</div>
      <div class="tab-content"        id="tab-achieve">${renderAchieve()}</div>

      ${renderFooter()}
    `;

    bindTabs();
  }

  /* ─── Work Experience ─── */
  function renderWork() {
    return YASH.data.experience.map(exp => `
      <div class="exp-card fade-up">
        <div>
          <span class="exp-date">${exp.period}</span>
        </div>
        <div>
          <h3 class="exp-title">${ja() ? exp.titleJa : exp.titleEn}</h3>
          <p class="exp-company">${ja() ? exp.companyJa : exp.companyEn}</p>
          <ul class="exp-bullets">
            ${(ja() ? exp.bulletsJa : exp.bulletsEn).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  /* ─── Education ─── */
  function renderEdu() {
    return YASH.data.education.map(edu => `
      <div class="edu-card fade-up">
        <div>
          <span class="exp-date">${edu.period}</span>
        </div>
        <div>
          <h3 class="edu-degree">${ja() ? edu.degreeJa : edu.degreeEn}</h3>
          <p class="edu-school">${ja() ? edu.schoolJa : edu.schoolEn}</p>
          <div class="edu-gpa">⭐ GPA: ${edu.gpa}</div>
          <ul class="exp-bullets" style="margin-top:16px">
            ${(ja() ? edu.bulletsJa : edu.bulletsEn).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  /* ─── Skills ─── */
  function renderSkills() {
    const groups = [
      { key: 'sg_lang',   items: YASH.data.skills.languages },
      { key: 'sg_fw',     items: YASH.data.skills.frameworks },
      { key: 'sg_ai',     items: YASH.data.skills.aiStack },
      { key: 'sg_tools',  items: YASH.data.skills.tools },
      { key: 'sg_spoken', items: YASH.data.skills.languages_spoken },
    ];

    return `<div class="skills-matrix">
      ${groups.map((g, i) => `
        <div class="skill-group-card fade-up stagger-${(i % 5) + 1}">
          <h3 class="skill-group-title">${$t(g.key)}</h3>
          <div class="skill-tags">
            ${g.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  /* ─── Certifications ─── */
  function renderCerts() {
    return `<div class="cert-grid">
      ${YASH.data.certifications.map((c, i) => `
        <div class="cert-card fade-up stagger-${(i % 5) + 1}">
          <h3 class="cert-name">${ja() ? c.nameJa : c.nameEn}</h3>
          <span class="cert-meta">${c.meta === '取得済み' ? $t('cert_obtained') : c.meta}</span>
        </div>
      `).join('')}
    </div>`;
  }

  /* ─── Achievements ─── */
  function renderAchieve() {
    return `<ul class="achieve-list">
      ${YASH.data.achievements.map((a, i) => `
        <li class="fade-up stagger-${(i % 4) + 1}">
          <div>
            <strong>${ja() ? a.titleJa : a.titleEn}</strong>
            <p style="margin-top:6px;font-size:0.83rem">${ja() ? a.descJa : a.descEn}</p>
          </div>
        </li>
      `).join('')}
    </ul>`;
  }

  function renderFooter() {
    return `
      <footer>
        <div class="footer-logo">Y<span>.</span></div>
        <div class="footer-copy">${$t('footer_copy')}</div>
      </footer>
    `;
  }

  /* ─── Tab switching ─── */
  function bindTabs() {
    const bar = document.getElementById('resume-tab-bar');
    if (!bar) return;

    bar.addEventListener('click', e => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;

      bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('#page-resume .tab-content').forEach(c => c.classList.remove('active'));
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) {
        target.classList.add('active');
        setTimeout(() => YASH.animations.initObserver('resume'), 60);
      }
    });
  }

  function onInit() {
    YASH.animations.initObserver('resume');
    YASH.animations.initMagnetic();
  }

  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'resume') {
      render();
      onInit();
    }
  });

  function init() {
    render();
    YASH.router.register('resume', onInit);
  }

  return { init, render };
})();
