/* ════════════════════════════════════════════════════
   data.js — All content data for Yash's portfolio
   Edit this file to update content without touching HTML
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.data = {

  person: {
    nameEn:   'Yash',
    nameJa:   'ヤシュ',
    titleEn:  'Software & AI Engineer',
    titleJa:  'ソフトウェア・AIエンジニア',
    email:    'yashchawla116@gmail.com',
    phone:    '+81-80-7723-5607',
    locationEn: 'Tokyo, Japan',
    locationJa: '東京都',
  },

  profiles: [
    { platform: 'GitHub',      handle: 'King_Boss',  url: 'https://github.com/King_Boss' },
    { platform: 'LinkedIn',    handle: 'yash_boss',  url: 'https://linkedin.com/in/yash_boss' },
    { platform: 'LeetCode',    handle: 'Code_Ok',    url: 'https://leetcode.com/Code_Ok' },
    { platform: 'HackerRank',  handle: 'yash_2019',  url: 'https://hackerrank.com/yash_2019' },
    { platform: 'GeeksForGeeks', handle: 'yash116', url: 'https://geeksforgeeks.org/user/yash116' },
  ],

  experience: [
    {
      period:     'Feb 2026 – Present',
      titleEn:    'AI Engineer',
      titleJa:    'AIエンジニア',
      companyEn:  'Akatsuki AI Technologies · Tokyo, Japan',
      companyJa:  '赤月AIテクノロジーズ · 東京',
      bulletsEn: [
        'Architecting RAG-based document intelligence pipelines using LangChain and LlamaIndex',
        'Integrating ChromaDB vector databases for semantic search and retrieval',
        'Building enterprise-grade LLM applications powered by Google Gemini models',
        'Collaborating in a bilingual (Japanese/English) Agile engineering team',
      ],
      bulletsJa: [
        'LangChainとLlamaIndexを用いたRAGベースの文書インテリジェンスパイプラインを設計',
        'ChromaDBベクターデータベースを統合したセマンティック検索・検索機能を実装',
        'Google Geminiモデルを活用したエンタープライズ向けLLMアプリケーションを構築',
        '日英バイリンガルのアジャイルエンジニアリングチームでコラボレーション',
      ],
    },
    {
      period:     'Jun 2024 – Jan 2026',
      titleEn:    'Server Engineer',
      titleJa:    'サーバーエンジニア',
      companyEn:  'NEC Corporation via Human Resocia · Tokyo, Japan',
      companyJa:  '日本電気（株）（ヒューマンリソシア経由） · 東京',
      bulletsEn: [
        'Enterprise Java backend development with Struts2, Eclipse IDE, and Apache Tomcat',
        'Server maintenance and monitoring using cURL, Postman, and HeidiSQL',
        'Automation scripting with PowerShell and VBScript for operational efficiency',
        'SQL database administration and performance optimization',
      ],
      bulletsJa: [
        'Struts2・Eclipse・Apache Tomcatを用いたエンタープライズJavaバックエンド開発',
        'cURL・Postman・HeidiSQLを用いたサーバー保守・監視',
        'PowerShellおよびVBScriptによる業務効率化の自動化スクリプト作成',
        'SQLデータベースの管理とパフォーマンス最適化',
      ],
    },
  ],

  education: [
    {
      period:   '2019 – 2023',
      degreeEn: 'B.Tech — Computer Science (Bioinformatics)',
      degreeJa: '工学士 — コンピュータサイエンス（バイオインフォマティクス）',
      schoolEn: 'VIT Vellore · Vellore, Tamil Nadu, India',
      schoolJa: 'VIT Vellore · インド',
      gpa:      '9.19 / 10',
      bulletsEn: [
        'Graduated with First Class Honours',
        'Ranked 8th out of 200+ students in Academic Excellence for 4 consecutive years',
        'Specialized coursework in Algorithms, Data Structures, Bioinformatics, and Distributed Systems',
      ],
      bulletsJa: [
        '最優秀の成績で卒業',
        '4年連続で200名超の中から学業優秀者8位にランクイン',
        'アルゴリズム、データ構造、バイオインフォマティクス、分散システムを専攻',
      ],
    },
  ],

  skills: {
    languages:   ['Java ★★★★★', 'Python', 'JavaScript', 'HTML/CSS', 'C++', 'PHP', 'SQL', 'C#', 'Solidity', 'PowerShell', 'VBScript'],
    frameworks:  ['Node.js', 'Struts2', 'ASP.NET/Razor', 'Bootstrap'],
    aiStack:     ['LLMs', 'RAG', 'LangChain', 'LlamaIndex', 'ChromaDB', 'Gemini API'],
    tools:       ['VSCode', 'Eclipse', 'Postman', 'HeidiSQL', 'Tomcat', 'cURL'],
    languages_spoken: ['English (Fluent)', '日本語 N2', 'Hindi (Native)'],
  },

  skillMatrix: [
    { name: 'Java',        years: '5yr+',   pct: 95 },
    { name: 'Python',      years: '3yr',    pct: 75 },
    { name: 'JavaScript',  years: '4yr',    pct: 80 },
    { name: 'SQL',         years: '4yr',    pct: 82 },
    { name: 'HTML/CSS',    years: '4yr',    pct: 85 },
    { name: 'PHP',         years: '2yr',    pct: 65 },
    { name: 'C++',         years: '2yr',    pct: 60 },
    { name: 'C#',          years: '2yr',    pct: 58 },
    { name: 'Solidity',    years: '1yr',    pct: 55 },
    { name: 'PowerShell',  years: '2yr',    pct: 70 },
    { name: 'LangChain',   years: 'Current', pct: 85 },
    { name: 'RAG',         years: 'Current', pct: 88 },
    { name: 'LlamaIndex',  years: 'Current', pct: 80 },
    { name: 'ChromaDB',    years: 'Current', pct: 78 },
    { name: 'Node.js',     years: '2yr',    pct: 68 },
    { name: 'Struts2',     years: '2yr',    pct: 75 },
  ],

  certifications: [
    { nameEn: 'NAT-N2 (Japanese Proficiency)', nameJa: 'NAT日本語能力試験 N2', meta: 'Aug 2025' },
    { nameEn: 'JLPT N3',                       nameJa: '日本語能力試験 N3',       meta: 'Jul 2024' },
    { nameEn: 'Web Designing Certification',   nameJa: 'ウェブデザイン技能検定',   meta: '取得済み' },
    { nameEn: 'Solidity & Blockchain Development', nameJa: 'Solidity・ブロックチェーン開発', meta: '取得済み' },
    { nameEn: 'Big Data Fundamentals',         nameJa: 'ビッグデータ基礎',         meta: '取得済み' },
  ],

  achievements: [
    {
      titleEn: 'Top 33 out of 5,000+ — TheMathCompany Triathlon',
      titleJa: '5,000名超中トップ33 — TheMathCompanyトライアスロン',
      descEn:  'Competed in a rigorous multi-round quantitative and analytical challenge, placing in the top 0.7% nationally.',
      descJa:  '厳格なマルチラウンドの定量的・分析的コンテストに参加し、全国トップ0.7%に入賞。',
    },
    {
      titleEn: '8th Rank / 200+ Students — VIT Academic Excellence (4 consecutive years)',
      titleJa: '200名超中8位 — VIT学業優秀賞（4年連続）',
      descEn:  'Consistently maintained top academic standings across all four years of undergraduate study.',
      descJa:  '学部4年間を通じて一貫して上位の学業成績を維持。',
    },
    {
      titleEn: 'HackWithInfy — Cleared (Infosys Hackathon)',
      titleJa: 'HackWithInfy — 突破（インフォシス・ハッカソン）',
      descEn:  "Successfully cleared Infosys' prestigious national-level coding competition.",
      descJa:  'インフォシスの権威ある全国規模のコーディングコンペティションを突破。',
    },
    {
      titleEn: 'VinPrep — Cleared (Vineyard Technologies)',
      titleJa: 'VinPrep — 突破（ヴィンヤードテクノロジーズ）',
      descEn:  "Cleared VinPrep's competitive technical assessment program.",
      descJa:  'VinPrepの競争率の高い技術評価プログラムを突破。',
    },
  ],

  projects: [
    {
      category: 'blockchain',
      icon:     '⛓️',
      period:   'Jan 2023 – Jun 2023',
      titleEn:  'Blockchain Ticketing Application',
      titleJa:  'ブロックチェーンチケットアプリ',
      descEn:   'A decentralized event ticketing system built on Ethereum. Smart contracts ensure ticket authenticity, prevent counterfeiting, and enable transparent secondary market trading. The dApp connects to MetaMask for wallet integration.',
      descJa:   'イーサリアム上に構築した分散型イベントチケットシステム。スマートコントラクトによりチケットの真正性を保証し、偽造を防止。MetaMaskとのウォレット統合により二次流通市場も透明化。',
      stack:    ['Solidity', 'JavaScript', 'Web3.js', 'MetaMask', 'Ethereum'],
    },
    {
      category: 'web',
      icon:     '♻️',
      period:   'Jul 2021 – Dec 2021',
      titleEn:  'Garbage Recycling Management System',
      titleJa:  'ゴミリサイクル管理システム',
      descEn:   'A full-stack web portal for managing waste collection, routing, and recycling workflows. Features real-time tracking dashboards, role-based access control, and automated reporting via MySQL stored procedures.',
      descJa:   '廃棄物収集・輸送・リサイクル業務を管理するフルスタックWebポータル。リアルタイム追跡ダッシュボード、ロールベースアクセス制御、MySQLストアドプロシージャによる自動レポート機能を実装。',
      stack:    ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      category: 'java',
      icon:     '🔐',
      period:   'Jan 2020 – Jun 2020',
      titleEn:  'Criminal Record Management Portal',
      titleJa:  '犯罪記録管理ポータル',
      descEn:   'A secure Java-based web application for law enforcement record management. Features comprehensive CRUD operations, advanced search with multiple filters, role-based access, and audit logging with full data encryption.',
      descJa:   '法執行機関向けの安全なJavaベースの記録管理Webアプリケーション。包括的なCRUD操作、複数フィルターの高度な検索、ロールベースアクセス、完全なデータ暗号化を備えた監査ログを実装。',
      stack:    ['Java', 'MySQL', 'JSP', 'Servlet', 'JDBC'],
    },
  ],

  services: [
    {
      icon: '🤖',
      titleEn: 'AI & LLM Engineering',
      titleJa: 'AI・LLMエンジニアリング',
      descEn: 'Designing and deploying production-ready AI systems. From RAG pipelines to agentic workflows, I architect intelligent solutions using the latest LLM ecosystem tools.',
      descJa: '本番環境対応のAIシステムの設計・デプロイ。RAGパイプラインからエージェント型ワークフローまで、最新のLLMエコシステムツールを活用してインテリジェントなソリューションを設計します。',
      tags: ['LangChain', 'LlamaIndex', 'ChromaDB', 'RAG', 'Gemini'],
    },
    {
      icon: '☕',
      titleEn: 'Enterprise Java Development',
      titleJa: 'エンタープライズJava開発',
      descEn: '5+ years of Java enterprise development. From Struts2 MVC applications to complex database-driven systems, delivering reliable, maintainable code at scale.',
      descJa: '5年以上のJavaエンタープライズ開発経験。Struts2 MVCアプリケーションから複雑なデータベース駆動型システムまで、スケーラブルで保守性の高いコードを提供します。',
      tags: ['Java', 'Struts2', 'Tomcat', 'SQL', 'Eclipse'],
    },
    {
      icon: '⛓️',
      titleEn: 'Blockchain & Web3',
      titleJa: 'ブロックチェーン・Web3',
      descEn: 'Smart contract development and decentralized application architecture using Solidity. Token economics design and secure contract auditing.',
      descJa: 'Solidityを使用したスマートコントラクト開発と分散型アプリケーションアーキテクチャ。トークンエコノミクス設計とセキュアなコントラクト監査。',
      tags: ['Solidity', 'Web3.js', 'Ethereum', 'DApp'],
    },
    {
      icon: '🌐',
      titleEn: 'Full-Stack Web Development',
      titleJa: 'フルスタックWeb開発',
      descEn: 'Complete web application development from database schema design through REST API architecture to responsive frontend implementation.',
      descJa: 'データベーススキーマ設計からREST APIアーキテクチャ、レスポンシブフロントエンド実装まで、Webアプリケーションの完全な開発を提供します。',
      tags: ['Node.js', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    },
    {
      icon: '🤝',
      titleEn: 'Bilingual Collaboration (JP/EN)',
      titleJa: 'バイリンガル協業（日英）',
      descEn: 'Bridging technical teams across language barriers. JLPT N2 Japanese proficiency enables seamless collaboration with Japanese engineering teams and stakeholders.',
      descJa: '言語の壁を越えたテクニカルチームの橋渡し。日本語能力試験N2の日本語力により、日本のエンジニアリングチームやステークホルダーとのシームレスなコラボレーションを実現。',
      tags: ['JLPT N2', 'NAT-N2', 'English', 'Hindi'],
    },
    {
      icon: '⚡',
      titleEn: 'Infrastructure & Automation',
      titleJa: 'インフラ・自動化',
      descEn: 'Server management, scripting automation, and CI/CD pipeline support. Experience with Apache Tomcat, cURL, PowerShell, and enterprise database administration.',
      descJa: 'サーバー管理、スクリプト自動化、CI/CDパイプラインのサポート。Apache Tomcat、cURL、PowerShell、エンタープライズデータベース管理の経験。',
      tags: ['PowerShell', 'Tomcat', 'cURL', 'HeidiSQL'],
    },
  ],

  marquee: [
    'Java', 'Python', 'LangChain', 'RAG Systems', 'LLMs', 'Node.js',
    'Solidity', 'ChromaDB', 'LlamaIndex', 'JLPT N2', 'JavaScript', 'Gemini API',
    'Struts2', 'Web3', 'PostgreSQL', 'AI Engineering', 'Tokyo', 'TypeScript',
  ],
};
