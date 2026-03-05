/* ============================================================
   values.js — مصدر البيانات المركزي للموقع
   
   HOW IT WORKS:
   This file sets a global window.VALUES object.
   Load it BEFORE site.js in every HTML page:
     <script src="values.js"></script>
     <script src="site.js"></script>

   Edit this file to update anything on the site:
   contact info, prices, services, nav links, FAQ, etc.
   ============================================================ */

window.VALUES = {

  /* ── BRAND ──────────────────────────────────────────────── */
  brand: {
    name:         'المستقبل الآن',
    domain:       'futureisnow.site',
    logo:         null,           // set to 'images/logo.png' when you have one
    logoIcon:     '🎓',           // used as fallback when logo is null
    tagline:      'خدمات متخصصة للمدارس الأردنية',
    location:     'الزرقاء، الأردن',
    locationNote: 'الطباعة والتوصيل متاح في مدينة الزرقاء والرصيفة فقط',
  },

  /* ── CONTACT ─────────────────────────────────────────────── */
  /* ↓↓↓ CHANGE THESE TWO LINES TO UPDATE ALL CONTACT LINKS ↓↓↓ */
  contact: {
    whatsapp: {
      number:  '962XXXXXXXXX',          // ← your number without the + sign
      label:   'واتساب',
      icon:    '📱',
      note:    'الأسرع للتواصل المباشر',
    },
    email: {
      address: 'info@futureisnow.site', // ← your email address
      label:   'البريد الإلكتروني',
      icon:    '📧',
    },
  },

  /* ── NAV LINKS ───────────────────────────────────────────── */
  navLinks: [
    { href: 'index.html',      label: 'الرئيسية' },
    { href: 'about.html',      label: 'من نحن' },
    { href: 'pricing.html',    label: 'الأسعار' },
    { href: 'faq.html',        label: 'الأسئلة الشائعة' },
    { href: 'ajyal-plus.html', label: 'Ajyal Plus', special: true },
  ],

  /* ── STATS (homepage bar) ────────────────────────────────── */
  stats: [
    { num: '٥٠٠+',    label: 'مدرسة تثق بنا' },
    { num: '١٠٠٠٠+',  label: 'امتحان مُنجَز' },
    { num: '٩٩٪',     label: 'دقة في الإدخال' },
    { num: '٢٤/٧',    label: 'خدمة مستمرة' },
  ],

  /* ── SERVICES ────────────────────────────────────────────── */
  services: [
    {
      id:                  'exams',
      icon:                '📝',
      image:               null,
      title:               'كتابة الامتحانات',
      desc:                'إعداد امتحانات وفق منهاج وزارة التربية والتعليم الأردنية بمختلف الأنواع والمستويات لجميع المراحل الدراسية.',
      availableNationwide: true,
      deliveryArea:        null,   // nationwide — no tag shown
    },
    {
      id:                  'marks-entry',
      icon:                '💻',
      image:               null,
      title:               'إدخال العلامات',
      desc:                'إدخال علامات الطلاب بدقة عالية على نظام وزارة التربية والتعليم الأردنية مع ضمان الخلو من الأخطاء.',
      availableNationwide: true,
      deliveryArea:        null,   // nationwide — no tag shown
    },
    {
      id:                  'marks-booklet',
      icon:                '📒',
      image:               null,
      title:               'دفتر العلامات',
      desc:                'تصميم وطباعة دفاتر العلامات المنظّمة والواضحة لتسهيل متابعة أداء الطلاب على مدار الفصل الدراسي.',
      availableNationwide: false,
      deliveryArea:        'الزرقاء والرصيفة',
    },
    {
      id:                  'attendance-booklet',
      icon:                '📋',
      image:               null,
      title:               'دفتر الحضور والغياب',
      desc:                'توفير دفاتر حضور وغياب احترافية ومنظّمة تُمكِّن المعلم من متابعة انتظام الطلاب بسهولة ويسر.',
      availableNationwide: false,
      deliveryArea:        'الزرقاء والرصيفة',
    },
    {
      id:                  'prep-booklet',
      icon:                '📗',
      image:               null,
      title:               'دفتر التحضير',
      desc:                'طباعة وتوفير دفاتر التحضير الجاهزة وفق متطلبات الوزارة، لتوفير وقت المعلم وجهده.',
      availableNationwide: false,
      deliveryArea:        'الزرقاء والرصيفة',
    },
  ],

  /* ── PRICING ─────────────────────────────────────────────── */
  /*
   * priceLabel: text shown before the price number. Examples:
   *   'يبدأ من'   → "يبدأ من ١.٥ دينار"
   *   'السعر'     → "السعر ٢.٥ دينار"
   *   'ثابت'      → "ثابت ٢.٥ دينار"
   *   ''          → just the number with no label
   * priceTo: set to a string to show a range (e.g. '٣'), or null for a fixed price.
   * pdfPrice: price as PDF-only. Can be a string (fixed) or null to hide the badge.
   * pdfPriceNote: shown instead of pdfPrice when the PDF price is formula-based.
   * pricingNote: extra footnote shown below the per-line (for complex formulas).
   */
  pricing: [
    {
      id:           'performance-record',
      icon:         '📊',
      title:        'سجل الأداء والجانب',
      priceLabel:   'يبدأ من',
      price:        '١.٥',
      priceTo:      '٣',            // range: ١.٥ – ٣ دينار
      currency:     'دينار',
      per:          'حسب المحتوى — مع تجليد',
      featured:     false,
      badge:        null,
      pdfPrice:     null,           // PDF uses formula, not a fixed price
      pdfPriceNote: 'PDF: عدد المواد × عدد المراحل × ٠.٥ دينار',
      features: [
        'يشمل الجانب الأكاديمي والسلوكي',
        'تصميم احترافي وفق متطلبات الوزارة',
        'السعر من ١.٥ إلى ٣ دنانير حسب الحجم',
        'طباعة عالية الجودة مع تجليد',
        'PDF: عدد المواد × عدد المراحل × ٠.٥ دينار',
      ],
    },
    {
      id:           'marks-booklet',
      icon:         '📒',
      title:        'دفتر العلامات',
      priceLabel:   'السعر',
      price:        '٢.٥',
      priceTo:      null,           // fixed price
      currency:     'دينار',
      per:          'للدفتر الواحد — مع تجليد',
      featured:     false,
      badge:        null,
      pdfPrice:     '١.٥',
      pdfPriceNote: null,
      features: [
        'تصميم منظّم وواضح لمتابعة أداء الطلاب',
        'يشمل جميع خانات العلامات والمعدلات',
        'طباعة جودة عالية مع تجليد متين',
        'مخصّص لاحتياجات المعلم الأردني',
        'متاح كـ PDF مقابل ١.٥ دينار فقط',
      ],
    },
    {
      id:           'attendance-booklet',
      icon:         '📋',
      title:        'دفتر الحضور والغياب',
      priceLabel:   'السعر',
      price:        '٢.٥',
      priceTo:      null,           // fixed price
      currency:     'دينار',
      per:          'للدفتر الواحد — مع تجليد',
      featured:     false,
      badge:        null,
      pdfPrice:     '١.٥',
      pdfPriceNote: null,
      features: [
        'جدول حضور منظّم لجميع أيام الفصل',
        'خانات واضحة للغياب والتأخر والعذر',
        'طباعة جودة عالية مع تجليد متين',
        'مناسب لجميع المراحل الدراسية',
        'متاح كـ PDF مقابل ١.٥ دينار فقط',
      ],
    },
    {
      id:           'exam-writing',
      icon:         '📝',
      title:        'طباعة وكتابة الامتحانات',
      priceLabel:   'السعر',
      price:        '٠.٥',
      priceTo:      null,           // fixed price
      currency:     'دينار',
      per:          'للورقة الواحدة',
      featured:     false,//true,
      badge:        null,//'الأكثر طلباً',
      pdfPrice:     null,//'١',
      pdfPriceNote: null,
      features: [
        'سعر الورقة الواحدة ٠.٥ دينار فقط',
        'تنسيق احترافي وفق نماذج الوزارة',
        'جميع المواد والمراحل الدراسية',
        'تسليم سريع خلال ٢٤–٤٨ ساعة',
        //'متاح كـ PDF مقابل ١ دينار للامتحان',
      ],
    },
    {
      id:           'prep-booklet',
      icon:         '📗',
      title:        'دفتر التحضير',
      priceLabel:   'يبدأ من',
      price:        '١.٥',
      priceTo:      null,           // fixed price for single subject/grade
      currency:     'دينار',
      per:          'مادة واحدة — مرحلة واحدة',
      featured:     false,
      badge:        null,
      pdfPrice:     null,
      pdfPriceNote: 'PDF: عدد المواد × عدد المراحل × ٠.٥ دينار',
      pricingNote:  'للطلبات المتعددة: عدد المواد × عدد المراحل الصفية × ١ دينار',
      features: [
        'مادة واحدة / مرحلة واحدة: ١.٥ دينار',
        'مواد أو مراحل متعددة: عدد المواد × عدد المراحل × ١ د',
        'تصميم وفق متطلبات وزارة التربية',
        'يشمل خطط الدروس اليومية والأسبوعية',
        'PDF: عدد المواد × عدد المراحل × ٠.٥ دينار',
      ],
    },
  ],

  /* ── AJYAL PLUS ──────────────────────────────────────────── */
  ajyalPlus: {
    name:        'Ajyal Plus',
    icon:        '🚀',
    tagline:     'وثائقك المدرسية في ثوانٍ.',
    subTagline:  'سجّل دخولك بحساب أجيال واستخرج كل ما تحتاجه تلقائياً.',
    description: 'تطبيق ذكي يُحوّل بياناتك من نظام أجيال إلى وثائق جاهزة بنقرة واحدة. سجّل دخولك بحسابك في أجيال، واستخرج بياناتك مباشرةً لإنشاء مستنداتك تلقائياً.',
    status:      'coming-soon',   // change to 'live' when launched
    appUrl:      null,            // set to app URL when live
    features: [
      { icon: '📒', label: 'دفتر العلامات تلقائياً',  desc: 'يُنشأ تلقائياً بأسماء الطلاب وعلاماتهم المستوردة من نظام أجيال' },
      { icon: '📋', label: 'دفتر الحضور والغياب',     desc: 'جدول حضور جاهز بجميع أسماء الطلاب لكل شعبة' },
      { icon: '📊', label: 'الإحصاءات والتحليلات',    desc: 'نسب النجاح، المعدلات، توزيع الدرجات — كلها تُحسب تلقائياً' },
      { icon: '📄', label: 'استمارات الطلب الرسمية',  desc: 'نماذج رسمية جاهزة مع بيانات الطالب مُدرجة مسبقاً' },
      { icon: '🏅', label: 'شهادات الطلاب',           desc: 'شهادات احترافية بأسماء الطلاب وعلاماتهم جاهزة للطباعة' },
      { icon: '📁', label: 'قوالب مخصصة خاصة بك',    desc: 'أنشئ قوالب خاصة بك واستخدمها مع بيانات أي شعبة' },
    ],
    howItWorks: [
      { step: '١', title: 'سجّل دخولك',   desc: 'بنفس حساب أجيال الخاص بك' },
      { step: '٢', title: 'اختر شعبتك',   desc: 'يتم استيراد بيانات الطلاب تلقائياً' },
      { step: '٣', title: 'اختر الوثيقة', desc: 'دفتر علامات، حضور، شهادة...' },
      { step: '٤', title: 'اطبع أو حمّل', desc: 'الوثيقة جاهزة في ثوانٍ' },
    ],
  },

  /* ── FAQ ─────────────────────────────────────────────────── */
  faq: [
    {
      group: '📋 عام',
      items: [
        {
          q: 'هل تخدمون مدارس خارج الزرقاء؟',
          a: 'الخدمات الإلكترونية مثل كتابة الامتحانات وإدخال العلامات متاحة لجميع المدارس الأردنية في أي محافظة. أما الطباعة والتوصيل فهي متاحة حالياً في الزرقاء فقط.',
        },
        {
          q: 'كيف أطلب الخدمة؟',
          a: 'ببساطة تواصل معنا عبر واتساب أو اتصل بنا، وأخبرنا بما تحتاجه. سنردّ عليك في أقرب وقت ونرتّب كل التفاصيل معك.',
        },
        {
          q: 'هل تعملون طوال أيام الأسبوع؟',
          a: 'نعم، نستقبل الطلبات طوال الأسبوع. في الحالات العاجلة يمكنك التواصل معنا في أي وقت وسنبذل قصارى جهدنا للمساعدة.',
        },
      ],
    },
    {
      group: '📝 كتابة الامتحانات',
      items: [
        {
          q: 'كم يستغرق إعداد الامتحان؟',
          a: 'يعتمد على حجم الامتحان والمادة، لكن في الغالب نُسلّم خلال ٢٤–٤٨ ساعة من استلام التفاصيل. للحالات العاجلة تواصل معنا مباشرةً.',
        },
        {
          q: 'لأي مراحل دراسية تكتبون الامتحانات؟',
          a: 'نعدّ امتحانات لجميع المراحل من الأول الابتدائي وحتى الثانوية العامة، ولجميع المواد وفق مناهج وزارة التربية والتعليم الأردنية.',
        },
        {
          q: 'هل يمكنني تحديد نوع الأسئلة؟',
          a: 'بالتأكيد. أخبرنا بنوع الأسئلة (اختيار من متعدد، صح وخطأ، مقالية...) والدروس المطلوبة والمستوى، وسنعدّ الامتحان وفق تعليماتك.',
        },
      ],
    },
    {
      group: '💻 إدخال العلامات',
      items: [
        {
          q: 'كيف أرسل لكم العلامات؟',
          a: 'يمكنك إرسال العلامات عبر واتساب (صورة أو ملف Excel)، وسنتولّى إدخالها على نظام أجيال بدقة وفي أسرع وقت.',
        },
        {
          q: 'هل بيانات الطلاب آمنة معكم؟',
          a: 'نعم، خصوصية البيانات أولوية قصوى لدينا. لا نحتفظ ببيانات الطلاب بعد إتمام الخدمة، ونلتزم بالسرية التامة.',
        },
      ],
    },
    {
      group: '🚀 Ajyal Plus',
      items: [
        {
          q: 'ما هو Ajyal Plus؟',
          a: 'Ajyal Plus تطبيق نطوّره حالياً يُمكّنك من تسجيل الدخول بحسابك في نظام أجيال واستخراج بيانات طلابك تلقائياً لإنشاء دفاتر العلامات، الحضور، الإحصاءات، الشهادات وغيرها بنقرة واحدة.',
        },
        {
          q: 'متى يكون Ajyal Plus متاحاً؟',
          a: 'التطبيق في مراحله الأخيرة. سجّل بريدك الإلكتروني في <a href="ajyal-plus.html" style="color:var(--accent);">صفحة Ajyal Plus</a> وسنُبلغك فور الإطلاق.',
        },
        {
          q: 'هل Ajyal Plus مجاني؟',
          a: 'سيتوفر التطبيق بخطط مختلفة تناسب احتياجات مختلفة. سنُعلن التفاصيل عند الإطلاق الرسمي.',
        },
      ],
    },
  ],

  /* ── WHY US (homepage) ───────────────────────────────────── */
  whyUs: [
    { icon: '✓',  title: 'دقة وموثوقية',          desc: 'نعمل بأعلى معايير الدقة في كل مهمة لضمان خلوّها من أي خطأ.' },
    { icon: '⚡', title: 'سرعة في التنفيذ',        desc: 'ننجز المهام في الوقت المحدد دون تأخير حتى تسير أمور مدرستك بانتظام.' },
    { icon: '🏫', title: 'خبرة في النظام الأردني', desc: 'فريقنا ملمّ تماماً بمتطلبات وزارة التربية والتعليم الأردنية وأنظمتها.' },
    { icon: '💬', title: 'تواصل سهل وميسّر',       desc: 'خدمتنا بسيطة وودية، خاصةً للمعلمين والإداريين من مختلف الأعمار.' },
  ],

  /* ── ABOUT PAGE VALUES ───────────────────────────────────── */
  aboutValues: [
    { icon: '🎯', title: 'دقة لا تقبل المساومة', desc: 'كل مهمة نراجعها مرتين قبل التسليم. الخطأ ليس خياراً لدينا.' },
    { icon: '⏰', title: 'الالتزام بالمواعيد',    desc: 'إذا قلنا غداً، نسلّم غداً. المدرسة لا تنتظر.' },
    { icon: '🔒', title: 'خصوصية وأمان',          desc: 'بيانات الطلاب والمدرسة تبقى بيننا. نحافظ على سرية كاملة.' },
    { icon: '🤝', title: 'خدمة من القلب',          desc: 'نحن من الزرقاء ونخدم مجتمعنا. علاقتنا بك تتجاوز مجرد الخدمة.' },
  ],

};