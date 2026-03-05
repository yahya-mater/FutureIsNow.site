/* ============================================================
   site.js — المستقبل الآن
   Reads data from window.VALUES (set by values.js).
   Load order in every HTML page:
     <script src="values.js"></script>
     <script src="site.js"></script>
   ============================================================ */

(function () {

  const V = window.VALUES;
  const { brand, contact, navLinks, stats, services,
          pricing, ajyalPlus, faq, whyUs, aboutValues } = V;

  /* ── DERIVED URLS ─────────────────────────────────────────── */
  const waLink    = 'https://wa.me/' + contact.whatsapp.number;
  const emailLink = 'mailto:' + contact.email.address;

  /* ── ACTIVE PAGE ──────────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── LOGO HTML ────────────────────────────────────────────── */
  function buildLogo(href) {
    href = href || 'index.html';
    var iconHTML = brand.logo
      ? '<img src="' + brand.logo + '" alt="' + brand.name + '" style="width:44px;height:44px;border-radius:12px;object-fit:cover;">'
      : '<div class="site-nav__logo-icon">' + brand.logoIcon + '</div>';
    return '<a href="' + href + '" class="site-nav__logo">'
      + iconHTML
      + '<div class="site-nav__logo-text">'
      + '<span class="site-nav__logo-name">'   + brand.name   + '</span>'
      + '<span class="site-nav__logo-domain">' + brand.domain + '</span>'
      + '</div></a>';
  }

  /* ── NAV LINKS HTML ───────────────────────────────────────── */
  function buildLinks(mobile) {
    return navLinks.map(function (link) {
      var isActive = currentPage === link.href;
      var base = mobile ? 'drawer-link' : 'nav-link';
      var mod  = link.special ? ' ' + base + '--app' : '';
      var act  = isActive ? ' active' : '';
      return '<a href="' + link.href + '" class="' + base + mod + act + '">' + link.label + '</a>';
    }).join('');
  }

  /* ── INJECT NAV ───────────────────────────────────────────── */
  var navHTML = '<nav class="site-nav" id="site-nav">'
    + '<div class="site-nav__inner">'
    + buildLogo('index.html')
    + '<div class="site-nav__links">'
    + buildLinks(false)
    + '<a href="index.html#contact" class="nav-cta-btn">تواصل معنا</a>'
    + '</div>'
    + '<button class="site-nav__burger" id="nav-burger" aria-label="فتح القائمة">'
    + '<span></span><span></span><span></span>'
    + '</button>'
    + '</div></nav>'
    + '<div class="drawer-overlay" id="drawer-overlay"></div>'
    + '<aside class="site-drawer" id="site-drawer" aria-hidden="true">'
    + '<div class="site-drawer__header">'
    + buildLogo('index.html')
    + '<button class="drawer-close" id="drawer-close" aria-label="إغلاق القائمة">✕</button>'
    + '</div>'
    + '<nav class="site-drawer__nav">' + buildLinks(true) + '</nav>'
    + '<div class="site-drawer__footer">'
    + '<a href="index.html#contact" class="nav-cta-btn" style="display:block;text-align:center;">تواصل معنا</a>'
    + '<p>📍 نعمل في ' + brand.location + '</p>'
    + '</div>'
    + '</aside>';

  /* ── INJECT FOOTER ────────────────────────────────────────── */
  var footerHTML = '<footer class="site-footer">'
    + '<div class="site-footer__inner">'
    + '<div class="site-footer__brand">'
    + '<a href="index.html" class="site-footer__logo">' + brand.name + '</a>'
    + '<p>' + brand.tagline + '</p>'
    + '<p class="site-footer__location">📍 ' + brand.location + '</p>'
    + '</div>'
    + '<div class="site-footer__links"><h4>صفحات</h4>'
    + navLinks.map(function (l) {
        return '<a href="' + l.href + '">' + l.label + '</a>';
      }).join('')
    + '</div>'
    + '<div class="site-footer__links"><h4>خدماتنا</h4>'
    + services.map(function (s) {
        return '<a href="index.html#services">' + s.title + '</a>';
      }).join('')
    + '</div>'
    + '<div class="site-footer__contact"><h4>تواصل معنا</h4>'
    + '<a href="' + waLink    + '">' + contact.whatsapp.icon + ' ' + contact.whatsapp.label   + '</a>'
    + '<a href="' + emailLink + '">' + contact.email.icon    + ' ' + contact.email.address    + '</a>'
    + '</div>'
    + '</div>'
    + '<div class="site-footer__bottom">'
    + '<p>© ' + new Date().getFullYear() + ' ' + brand.name + ' — جميع الحقوق محفوظة</p>'
    + '<p>' + brand.locationNote + '</p>'
    + '</div>'
    + '</footer>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── DRAWER ───────────────────────────────────────────────── */
  var burger   = document.getElementById('nav-burger');
  var drawer   = document.getElementById('site-drawer');
  var overlay  = document.getElementById('drawer-overlay');
  var closeBtn = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    burger.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    burger.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });

  /* ── RENDER DYNAMIC SECTIONS ──────────────────────────────── */

  // contact links with data-contact attribute (used in index.html contact section)
  document.querySelectorAll('[data-contact="whatsapp"]').forEach(function (el) { el.href = waLink; });
  document.querySelectorAll('[data-contact="email"]').forEach(function (el) { el.href = emailLink; });

  // Stats bar — index.html
  var statsContainer = document.getElementById('stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = stats.map(function (s) {
      return '<div class="stat-item"><div class="stat-num">' + s.num + '</div><div class="stat-label">' + s.label + '</div></div>';
    }).join('');
  }

  // Services grid — index.html
  var servicesContainer = document.getElementById('services-container');
  if (servicesContainer) {
    var serviceCards = services.map(function (s) {
      var zarqaTag = (!s.availableNationwide && s.deliveryArea)
        ? '<span class="service-zarqa-tag">📍 ' + s.deliveryArea + ' فقط</span>'
        : '';
      return '<div class="service-card">'
        + '<div class="service-icon">' + s.icon + '</div>'
        + '<h3>' + s.title + '</h3>'
        + '<p>' + s.desc + '</p>'
        + zarqaTag
        + '</div>';
    }).join('');
    // "extra services" card always last
    serviceCards += '<div class="service-card service-card--accent">'
      + '<div class="service-icon" style="background:rgba(255,255,255,0.2);">✨</div>'
      + '<h3 style="color:white;">خدمات إضافية</h3>'
      + '<p style="color:rgba(255,255,255,0.8);">لديك حاجة خاصة؟ نحن هنا لمساعدتك. تواصل معنا وسنجد الحل المناسب لك.</p>'
      + '</div>';
    servicesContainer.innerHTML = serviceCards;
  }

  // Ajyal features list (index.html teaser)
  var ajyalFeaturesIndex = document.getElementById('ajyal-features-container');
  if (ajyalFeaturesIndex) {
    ajyalFeaturesIndex.innerHTML = ajyalPlus.features.map(function (f) {
      return '<li><span class="feat-icon">' + f.icon + '</span> ' + f.label + '</li>';
    }).join('');
  }

  // Why Us grid — index.html
  var whyContainer = document.getElementById('why-container');
  if (whyContainer) {
    whyContainer.innerHTML = whyUs.map(function (w) {
      return '<div class="why-item">'
        + '<div class="why-check">' + w.icon + '</div>'
        + '<div class="why-text"><h4>' + w.title + '</h4><p>' + w.desc + '</p></div>'
        + '</div>';
    }).join('');
  }

  // About values grid — about.html
  var aboutValuesContainer = document.getElementById('about-values-container');
  if (aboutValuesContainer) {
    aboutValuesContainer.innerHTML = aboutValues.map(function (v) {
      return '<div class="why-item">'
        + '<div class="why-check">' + v.icon + '</div>'
        + '<div class="why-text"><h4>' + v.title + '</h4><p>' + v.desc + '</p></div>'
        + '</div>';
    }).join('');
  }

  // Pricing cards — pricing.html
  var pricingContainer = document.getElementById('pricing-container');
  if (pricingContainer) {
    pricingContainer.innerHTML = pricing.map(function (p) {
      var badgeHTML = p.badge
        ? '<div class="pricing-card__badge">' + p.badge + '</div>'
        : '';
      // price range display: "١.٥" or "١.٥ – ٣" if priceTo exists
      var priceDisplay = p.priceTo
        ? p.price + '<span class="price-range-sep"> – </span>' + p.priceTo
        : p.price;
      // PDF-only note: fixed price OR formula note
      var pdfHTML = '';
      if (p.pdfPrice) {
        pdfHTML = '<div class="pricing-pdf-note">📄 PDF فقط: <strong>' + p.pdfPrice + ' ' + p.currency + '</strong></div>';
      } else if (p.pdfPriceNote) {
        pdfHTML = '<div class="pricing-pdf-note pricing-pdf-note--formula">📄 ' + p.pdfPriceNote + '</div>';
      }
      // complex pricing footnote (e.g. prep booklet formula)
      var noteHTML = p.pricingNote
        ? '<p class="pricing-complex-note">' + p.pricingNote + '</p>'
        : '';
      return '<div class="pricing-card' + (p.featured ? ' pricing-card--featured' : '') + '">'
        + badgeHTML
        + '<div class="pricing-card__icon">' + p.icon + '</div>'
        + '<h3>' + p.title + '</h3>'
        + '<div class="pricing-card__price">'
        + (p.priceLabel ? '<span class="price-from">' + p.priceLabel + '</span>' : '')
        + '<span class="price-num">' + priceDisplay + '</span>'
        + '<span class="price-currency">' + p.currency + '</span>'
        + '</div>'
        + '<p class="price-desc">' + p.per + '</p>'
        + noteHTML
        + pdfHTML
        + '<ul class="pricing-features">'
        + p.features.map(function (f) { return '<li>✓ ' + f + '</li>'; }).join('')
        + '</ul>'
        + '<a href="' + waLink + '" class="btn-primary" style="display:block;text-align:center;">اطلب الآن</a>'
        + '</div>';
    }).join('');
  }

  // Bulk note contact link — pricing.html
  var bulkNoteBtn = document.getElementById('bulk-note-btn');
  if (bulkNoteBtn) { bulkNoteBtn.href = waLink; }

  // FAQ accordion — faq.html
  var faqContainer = document.getElementById('faq-container');
  if (faqContainer) {
    faqContainer.innerHTML = faq.map(function (group) {
      return '<div class="faq-group">'
        + '<h3 class="faq-group__title">' + group.group + '</h3>'
        + '<div class="faq-list">'
        + group.items.map(function (item) {
            return '<div class="faq-item">'
              + '<button class="faq-q">' + item.q + ' <span class="faq-arrow">▼</span></button>'
              + '<div class="faq-a"><p>' + item.a + '</p></div>'
              + '</div>';
          }).join('')
        + '</div></div>';
    }).join('');
  }

  // FAQ CTA button — faq.html
  var faqWaBtn = document.getElementById('faq-wa-btn');
  if (faqWaBtn) { faqWaBtn.href = waLink; }

  // Ajyal Plus how-it-works steps — ajyal-plus.html
  var apStepsContainer = document.getElementById('ap-steps-container');
  if (apStepsContainer) {
    apStepsContainer.innerHTML = ajyalPlus.howItWorks.map(function (step, i, arr) {
      var connector = i < arr.length - 1 ? '<div class="ap-step__connector"></div>' : '';
      return '<div class="ap-step">'
        + '<div class="ap-step__num">' + step.step + '</div>'
        + '<div><h4>' + step.title + '</h4><p>' + step.desc + '</p></div>'
        + '</div>'
        + connector;
    }).join('');
  }

  // Ajyal Plus features grid — ajyal-plus.html
  var apFeaturesContainer = document.getElementById('ap-features-container');
  if (apFeaturesContainer) {
    apFeaturesContainer.innerHTML = ajyalPlus.features.map(function (f) {
      return '<div class="ap-feat">'
        + '<div class="ap-feat__icon">' + f.icon + '</div>'
        + '<h3>' + f.label + '</h3>'
        + '<p>' + f.desc + '</p>'
        + '</div>';
    }).join('');
  }

  /* ── FAQ ACCORDION INTERACTION ────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-q');
    if (!btn) return;
    var answer  = btn.nextElementSibling;
    var item    = btn.parentElement;
    var isOpen  = btn.classList.contains('is-open');

    // close all open items
    document.querySelectorAll('.faq-q.is-open').forEach(function (q) {
      q.classList.remove('is-open');
      q.nextElementSibling.classList.remove('is-open');
      q.parentElement.classList.remove('is-open');
    });

    // open the clicked one if it was closed
    if (!isOpen) {
      btn.classList.add('is-open');
      answer.classList.add('is-open');
      item.classList.add('is-open');
    }
  });

  /* ── NOTIFY FORMS ─────────────────────────────────────────── */
  function handleNotify(inputEl, msgEl, btnEl) {
    if (inputEl && inputEl.value && inputEl.value.includes('@')) {
      if (msgEl) msgEl.style.display = 'block';
      inputEl.value = '';
      if (btnEl) {
        btnEl.textContent = '✓';
        btnEl.style.background = '#22c55e';
        btnEl.disabled = true;
      }
    } else if (inputEl) {
      inputEl.style.borderColor = '#ef4444';
      setTimeout(function () { inputEl.style.borderColor = ''; }, 1500);
    }
  }

  // ajyal-plus.html hero notify
  var apBtn1 = document.getElementById('ap-notify-btn-1');
  if (apBtn1) {
    apBtn1.addEventListener('click', function () {
      handleNotify(document.getElementById('ap-email-1'), document.getElementById('ap-msg-1'), this);
    });
  }

  // ajyal-plus.html bottom CTA notify
  var apBtn2 = document.getElementById('ap-notify-btn-2');
  if (apBtn2) {
    apBtn2.addEventListener('click', function () {
      handleNotify(document.getElementById('ap-email-2'), document.getElementById('ap-msg-2'), this);
    });
  }

  // index.html ajyal teaser notify
  var indexNotifyBtn = document.querySelector('.ajyal-notify .notify-btn');
  if (indexNotifyBtn) {
    indexNotifyBtn.addEventListener('click', function () {
      handleNotify(this.previousElementSibling, document.getElementById('notify-msg'), this);
    });
  }

})();