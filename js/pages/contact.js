/* ════════════════════════════════════════════════════
   pages/contact.js — Contact Page: Form + Social Links
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};
YASH.pages = YASH.pages || {};

YASH.pages.contact = (function () {

  const $t = key => YASH.i18n.get(key);

  function render() {
    const el = document.getElementById('page-contact');
    if (!el) return;

    el.innerHTML = `
      <div class="contact-hero">
        <span class="section-eyebrow fade-up">${$t('contact_eyebrow')}</span>
        <h1 class="section-title fade-up">
          ${$t('contact_title')} <em>${$t('contact_accent')}</em>
        </h1>
      </div>

      <div class="contact-grid">
        <!-- Info Column -->
        <div class="contact-info-col">
          <div class="availability-badge fade-up">
            <span class="avail-dot"></span>
            <span class="avail-text">${$t('avail_text')}</span>
          </div>

          <h2 class="contact-big-text fade-up">
            ${$t('contact_big1')}<br>
            <em>${$t('contact_big2')}</em><br>
            ${$t('contact_big3')}
          </h2>

          <div class="contact-details fade-up">
            <div class="contact-detail">
              <div class="contact-detail-icon">✉</div>
              <div>
                <a href="mailto:yashchawla116@gmail.com">yashchawla116@gmail.com</a>
              </div>
            </div>
            <div class="contact-detail">
              <div class="contact-detail-icon">📞</div>
              <div>
                <a href="tel:+818077235607">+81-80-7723-5607</a>
              </div>
            </div>
            <div class="contact-detail">
              <div class="contact-detail-icon">📍</div>
              <div>${YASH.i18n.getLang() === 'ja' ? '東京都' : 'Tokyo, Japan'}</div>
            </div>
          </div>

          <div class="social-row fade-up">
            ${YASH.data.profiles.map(p => `
              <a href="${p.url}" target="_blank" rel="noopener noreferrer"
                 class="social-btn">${p.platform}</a>
            `).join('')}
          </div>
        </div>

        <!-- Form Column -->
        <div>
          <form class="contact-form fade-up" id="contact-form" novalidate>
            <div class="form-group">
              <label class="form-label" for="f-name">${$t('label_name')}</label>
              <input type="text" id="f-name" class="form-input"
                     placeholder="${$t('ph_name')}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="f-email">${$t('label_email')}</label>
              <input type="email" id="f-email" class="form-input"
                     placeholder="${$t('ph_email')}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="f-subject">${$t('label_subject')}</label>
              <input type="text" id="f-subject" class="form-input"
                     placeholder="${$t('ph_subject')}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="f-message">${$t('label_message')}</label>
              <textarea id="f-message" class="form-textarea"
                        placeholder="${$t('ph_message')}" required></textarea>
            </div>
            <button type="submit" class="form-submit" id="form-submit-btn">
              ${$t('btn_submit')}
            </button>
          </form>
        </div>
      </div>

      ${renderFooter()}
    `;

    bindForm();
  }

  function bindForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = document.getElementById('form-submit-btn');
      if (!btn) return;

      /* Animate success */
      btn.textContent = YASH.i18n.get('form_success');
      btn.style.background = 'var(--teal)';
      btn.disabled = true;
      form.reset();

      setTimeout(() => {
        btn.textContent = YASH.i18n.get('btn_submit');
        btn.style.background = '';
        btn.disabled = false;
      }, 4500);
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
    YASH.animations.initObserver('contact');
    YASH.animations.initMagnetic();
  }

  document.addEventListener('langchange', () => {
    if (YASH.router.getCurrentPage() === 'contact') {
      render();
      onInit();
    }
  });

  function init() {
    render();
    YASH.router.register('contact', onInit);
  }

  return { init, render };
})();
