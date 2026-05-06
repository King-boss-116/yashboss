/* ════════════════════════════════════════════════════
   i18n.js — Bilingual Translation System (EN / JA)
   Default: Japanese. Toggle persists in localStorage.
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.i18n = (function () {

  /* ─── Translation strings ─── */
  const T = {
    en: {
      /* Nav */
      nav_home:     'Home',
      nav_about:    'About',
      nav_resume:   'Resume',
      nav_projects: 'Projects',
      nav_skills:   'Skills',
      nav_contact:  'Contact',

      /* Home */
      hero_label:   'Software & AI Engineer · Tokyo, Japan',
      hero_tagline: 'Building intelligent AI systems and robust software for tomorrow\'s world. Currently crafting LLM-powered solutions at Akatsuki AI Technologies.',
      hero_cta1:    'View My Work',
      hero_cta2:    'Get In Touch',
      hero_scroll:  'Scroll to explore',
      home_eyebrow: 'What I Do',
      home_title1:  'Crafting',
      home_title2:  'Intelligent Solutions',
      svc_ai_name:  'AI Engineering',
      svc_ai_desc:  'Building LLM-powered applications with RAG pipelines, LangChain, LlamaIndex, and ChromaDB for intelligent document processing and conversational AI.',
      svc_be_name:  'Backend Engineering',
      svc_be_desc:  'Designing robust server-side systems using Java (Struts2), Node.js, ASP.NET, and SQL with enterprise-grade reliability and performance.',
      svc_bc_name:  'Blockchain & Web3',
      svc_bc_desc:  'Smart contract development with Solidity, decentralised application architecture, and token-based system design.',
      svc_fs_name:  'Full-Stack Development',
      svc_fs_desc:  'End-to-end web application development spanning frontend (HTML/CSS/JS) through backend APIs and database architecture.',

      /* About */
      about_eyebrow: 'About Me',
      about_h1: 'Engineer.',
      about_h2: 'Innovator.',
      about_h3: 'Polyglot.',
      about_body1: 'I\'m Yash (ヤシュ), a Software and AI Engineer currently based in Tokyo, Japan, where I work at Akatsuki AI Technologies building next-generation LLM-powered systems. With a background spanning enterprise Java backend engineering, AI pipelines, and blockchain development, I bring a uniquely broad technical perspective to every challenge.',
      about_body2: 'Originally from India, I earned my BTech in Computer Science with Bioinformatics from VIT Vellore with a 9.19 GPA, before relocating to Japan in 2024. Fluent in English, conversational Japanese (JLPT N2), and Hindi, I bridge technical and cultural divides to deliver solutions that matter.',
      stat_gpa:   'GPA / 10',
      stat_java:  'Years Java',
      stat_lang:  'Languages',
      journey_eyebrow: 'Journey',
      journey_title:   'India →',
      journey_accent:  'Tokyo',
      profiles_eyebrow: 'Online Profiles',
      profiles_title:   'Find Me',
      profiles_accent:  'Online',

      /* Resume */
      resume_eyebrow: 'My Experience',
      resume_title:   'Résumé',
      download_text:  'Download a formatted copy of my CV',
      download_btn:   '↓ Download CV',
      tab_work:   'Experience',
      tab_edu:    'Education',
      tab_skills: 'Skills',
      tab_certs:  'Certifications',
      tab_achieve:'Achievements',

      /* Skills groups */
      sg_lang:     'Programming Languages',
      sg_fw:       'Frameworks & Libraries',
      sg_ai:       'AI / LLM Stack',
      sg_tools:    'Tools & DevOps',
      sg_spoken:   'Languages',

      /* Projects */
      proj_eyebrow: 'Selected Work',
      proj_title:   'My',
      proj_accent:  'Projects',
      filter_all:       'All',
      filter_blockchain:'Blockchain',
      filter_web:       'Web',
      filter_java:      'Java',

      /* Services */
      svc_eyebrow: 'Capabilities',
      svc_title:   'What I',
      svc_accent:  'Bring',
      matrix_eyebrow: 'Proficiency',
      matrix_title:   'Skill',
      matrix_accent:  'Matrix',

      /* Contact */
      contact_eyebrow: 'Get In Touch',
      contact_title:   'Let\'s',
      contact_accent:  'Connect',
      avail_text:      'Available for opportunities',
      contact_big1:    'Open to exciting',
      contact_big2:    'new challenges.',
      contact_big3:    'in Tokyo & beyond.',
      label_name:    'Your Name',
      label_email:   'Email Address',
      label_subject: 'Subject',
      label_message: 'Message',
      ph_name:    'John Doe',
      ph_email:   'email@company.com',
      ph_subject: 'Opportunity / Inquiry',
      ph_message: 'Tell me about your project or opportunity...',
      btn_submit: 'Send Message →',
      form_success: '✓ Message sent! I\'ll get back to you soon.',

      /* Footer */
      footer_copy: '© 2025 Yash — Tokyo, Japan',
      cert_obtained: 'Certified',
    },

    ja: {
      /* Nav */
      nav_home:     'ホーム',
      nav_about:    '自己紹介',
      nav_resume:   '履歴書',
      nav_projects: 'プロジェクト',
      nav_skills:   'スキル',
      nav_contact:  'お問い合わせ',

      /* Home */
      hero_label:   'ソフトウェア・AIエンジニア · 東京',
      hero_tagline: '明日の世界のために、インテリジェントなAIシステムと堅牢なソフトウェアを構築しています。現在、赤月AIテクノロジーズにてLLM活用ソリューションを開発中です。',
      hero_cta1:    '実績を見る',
      hero_cta2:    'お問い合わせ',
      hero_scroll:  'スクロール',
      home_eyebrow: '専門分野',
      home_title1:  '創造する',
      home_title2:  'インテリジェントな解決策',
      svc_ai_name:  'AIエンジニアリング',
      svc_ai_desc:  'RAGパイプライン、LangChain、LlamaIndex、ChromaDBを活用したLLMアプリケーションの構築。インテリジェントな文書処理と会話型AIソリューションを提供します。',
      svc_be_name:  'バックエンド開発',
      svc_be_desc:  'Java（Struts2）、Node.js、ASP.NETを活用したエンタープライズ品質のサーバーサイドシステムを設計・構築します。',
      svc_bc_name:  'ブロックチェーン・Web3',
      svc_bc_desc:  'Solidityによるスマートコントラクト開発、分散型アプリケーションアーキテクチャ、トークンベースシステム設計。',
      svc_fs_name:  'フルスタック開発',
      svc_fs_desc:  'HTML/CSS/JSのフロントエンドからバックエンドAPI、データベース設計まで一貫したWeb開発。',

      /* About */
      about_eyebrow: '自己紹介',
      about_h1: 'エンジニア。',
      about_h2: 'イノベーター。',
      about_h3: '多言語話者。',
      about_body1: 'はじめまして、ヤシュと申します。現在、東京にて赤月AIテクノロジーズのAIエンジニアとして、次世代のLLM活用システムの構築に取り組んでいます。エンタープライズJavaバックエンド開発、AIパイプライン、ブロックチェーン開発と幅広い技術バックグラウンドを持ち、あらゆる課題に独自の視点でアプローチします。',
      about_body2: 'インド出身で、VIT Vellore大学でコンピュータサイエンス（バイオインフォマティクス）のBTechを9.19のGPAで取得後、2024年に来日。英語・日本語（日本語能力試験N2）・ヒンディー語の3言語に対応し、技術と文化の架け橋として価値あるソリューションを届けます。',
      stat_gpa:   'GPA / 10',
      stat_java:  'Java歴',
      stat_lang:  '言語',
      journey_eyebrow: 'キャリア歴',
      journey_title:   'インド →',
      journey_accent:  '東京',
      profiles_eyebrow: 'オンラインプロフィール',
      profiles_title:   'オンラインで',
      profiles_accent:  '見つける',

      /* Resume */
      resume_eyebrow: '経歴',
      resume_title:   '職務経歴書',
      download_text:  'CVの書式付きコピーをダウンロード',
      download_btn:   '↓ CV ダウンロード',
      tab_work:    '職歴',
      tab_edu:     '学歴',
      tab_skills:  'スキル',
      tab_certs:   '資格',
      tab_achieve: '実績',

      /* Skills groups */
      sg_lang:   'プログラミング言語',
      sg_fw:     'フレームワーク・ライブラリ',
      sg_ai:     'AI・LLMスタック',
      sg_tools:  'ツール・DevOps',
      sg_spoken: '言語',

      /* Projects */
      proj_eyebrow: '制作実績',
      proj_title:   'プロジェクト',
      proj_accent:  '一覧',
      filter_all:        'すべて',
      filter_blockchain: 'ブロックチェーン',
      filter_web:        'Web',
      filter_java:       'Java',

      /* Services */
      svc_eyebrow: 'スキル・サービス',
      svc_title:   '私が提供できる',
      svc_accent:  '価値',
      matrix_eyebrow: '習熟度',
      matrix_title:   'スキル',
      matrix_accent:  'マトリクス',

      /* Contact */
      contact_eyebrow: 'お問い合わせ',
      contact_title:   'ぜひ',
      contact_accent:  'ご連絡を',
      avail_text:      '機会を求めています',
      contact_big1:    'エキサイティングな',
      contact_big2:    '新しい挑戦に',
      contact_big3:    'オープンです。',
      label_name:    'お名前',
      label_email:   'メールアドレス',
      label_subject: '件名',
      label_message: 'メッセージ',
      ph_name:    '山田太郎',
      ph_email:   'email@company.com',
      ph_subject: 'ご用件・お問い合わせ内容',
      ph_message: 'プロジェクトやご機会についてお聞かせください。',
      btn_submit: '送信する →',
      form_success: '✓ 送信完了しました！近日中にご連絡いたします。',

      /* Footer */
      footer_copy: '© 2025 ヤシュ — 東京',
      cert_obtained: '取得済み',
    },
  };

  /* ─── State ─── */
  let currentLang = localStorage.getItem('yash_lang') || 'ja';

  /* ─── Public API ─── */
  function get(key) {
    return (T[currentLang] && T[currentLang][key]) ? T[currentLang][key] : (T.en[key] || key);
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ja') return;
    currentLang = lang;
    localStorage.setItem('yash_lang', lang);
    applyToDOM();
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
    document.body.classList.toggle('jp-active', lang === 'ja');
    updateToggles();
    /* Notify all modules */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function toggle() {
    setLang(currentLang === 'ja' ? 'en' : 'ja');
  }

  /* Apply data-en / data-ja attributes throughout DOM */
  function applyToDOM() {
    document.querySelectorAll('[data-en][data-ja]').forEach(el => {
      const val = el.getAttribute('data-' + currentLang);
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });
  }

  function updateToggles() {
    const label = currentLang === 'ja' ? 'EN' : 'JP';
    document.querySelectorAll('.lang-label-el').forEach(el => el.textContent = label);
  }

  /* Init */
  function init() {
    setLang(currentLang);
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  return { get, getLang, setLang, toggle, applyToDOM, init };
})();
