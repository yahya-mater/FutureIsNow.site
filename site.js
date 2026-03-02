/* ============================================================
   site.js — المستقبل الآن
   Handles: nav injection, drawer, FAQ accordion, notify forms
   ============================================================ */

(function () {

  /* ── 1. ACTIVE PAGE DETECTION ─────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const NAV_LINKS = [
    { href: 'index.html',      label: 'الرئيسية' },
    { href: 'about.html',      label: 'من نحن' },
    { href: 'pricing.html',    label: 'الأسعار' },
    { href: 'faq.html',        label: 'الأسئلة الشائعة' },
    { href: 'ajyal-plus.html', label: 'Ajyal Plus', special: true },
  ];

  /* ── 2. BUILD NAV LINKS ───────────────────────────────── */
  function buildLinks(mobile) {
    return NAV_LINKS.map(({ href, label, special }) => {
      const isActive = currentPage === href;
      const base = mobile ? 'drawer-link' : 'nav-link';
      const mod  = special ? ` ${base}--app` : '';
      const act  = isActive ? ' active' : '';
      return `<a href="${href}" class="${base}${mod}${act}">${label}</a>`;
    }).join('');
  }

  /* ── 3. INJECT NAV ────────────────────────────────────── */
  const navHTML = `
<nav class="site-nav" id="site-nav">
  <div class="site-nav__inner">
    <a href="index.html" class="site-nav__logo">
      <div class="site-nav__logo-icon">🎓</div>
      <div class="site-nav__logo-text">
        <span class="site-nav__logo-name">المستقبل الآن</span>
        <span class="site-nav__logo-domain">futureisnow.site</span>
      </div>
    </a>
    <div class="site-nav__links">
      ${buildLinks(false)}
      <a href="index.html#contact" class="nav-cta-btn">تواصل معنا</a>
    </div>
    <button class="site-nav__burger" id="nav-burger" aria-label="فتح القائمة">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="drawer-overlay" id="drawer-overlay"></div>
<aside class="site-drawer" id="site-drawer" aria-hidden="true">
  <div class="site-drawer__header">
    <a href="index.html" class="site-nav__logo">
      <div class="site-nav__logo-icon">🎓</div>
      <div class="site-nav__logo-text">
        <span class="site-nav__logo-name">المستقبل الآن</span>
        <span class="site-nav__logo-domain">futureisnow.site</span>
      </div>
    </a>
    <button class="drawer-close" id="drawer-close" aria-label="إغلاق القائمة">✕</button>
  </div>
  <nav class="site-drawer__nav">${buildLinks(true)}</nav>
  <div class="site-drawer__footer">
    <a href="index.html#contact" class="nav-cta-btn" style="display:block;text-align:center;">تواصل معنا</a>
    <p>📍 نعمل في الزرقاء — الأردن</p>
  </div>
</aside>`;

  /* ── 4. INJECT FOOTER ─────────────────────────────────── */
  const footerHTML = `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <a href="index.html" class="site-footer__logo">المستقبل الآن</a>
      <p>خدمات متخصصة للمدارس الأردنية</p>
      <p class="site-footer__location">📍 الزرقاء، الأردن</p>
    </div>
    <div class="site-footer__links">
      <h4>صفحات</h4>
      <a href="index.html">الرئيسية</a>
      <a href="about.html">من نحن</a>
      <a href="pricing.html">الأسعار</a>
      <a href="faq.html">الأسئلة الشائعة</a>
      <a href="ajyal-plus.html">Ajyal Plus</a>
    </div>
    <div class="site-footer__links">
      <h4>خدماتنا</h4>
      <a href="index.html#services">كتابة الامتحانات</a>
      <a href="index.html#services">إدخال العلامات</a>
      <a href="index.html#services">دفتر العلامات</a>
      <a href="index.html#services">دفتر الحضور والغياب</a>
      <a href="index.html#services">دفتر التحضير</a>
    </div>
    <div class="site-footer__contact">
      <h4>تواصل معنا</h4>
      <a href="https://wa.me/962XXXXXXXXX">📱 واتساب</a>
      <a href="mailto:info@futureisnow.site">📧 info@futureisnow.site</a>
    </div>
  </div>
  <div class="site-footer__bottom">
    <p>© ${new Date().getFullYear()} المستقبل الآن — جميع الحقوق محفوظة</p>
    <p>الطباعة والتوصيل متاح في الزرقاء فقط</p>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── 5. DRAWER LOGIC ──────────────────────────────────── */
  const burger   = document.getElementById('nav-burger');
  const drawer   = document.getElementById('site-drawer');
  const overlay  = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');

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
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ── 6. FAQ ACCORDION ─────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const answer = btn.nextElementSibling;
    const item   = btn.parentElement;
    const isOpen = btn.classList.contains('is-open');

    // close all
    document.querySelectorAll('.faq-q.is-open').forEach(q => {
      q.classList.remove('is-open');
      q.nextElementSibling.classList.remove('is-open');
      q.parentElement.classList.remove('is-open');
    });

    // open clicked (if it was closed)
    if (!isOpen) {
      btn.classList.add('is-open');
      answer.classList.add('is-open');
      item.classList.add('is-open');
    }
  });

  /* ── 7. NOTIFY FORM ───────────────────────────────────── */
  function handleNotify(inputEl, msgEl, btnEl) {
    if (inputEl.value && inputEl.value.includes('@')) {
      msgEl.style.display = 'block';
      inputEl.value = '';
      if (btnEl) {
        btnEl.textContent = '✓';
        btnEl.style.background = '#22c55e';
        btnEl.disabled = true;
      }
    } else {
      inputEl.style.borderColor = '#ef4444';
      setTimeout(() => { inputEl.style.borderColor = ''; }, 1500);
    }
  }

  // index.html notify (inside ajyal section)
  const indexNotifyBtn = document.querySelector('.ajyal-notify .notify-btn');
  if (indexNotifyBtn) {
    indexNotifyBtn.addEventListener('click', function () {
      const input = this.previousElementSibling;
      const msg   = document.getElementById('notify-msg');
      handleNotify(input, msg, this);
    });
  }

  // ajyal-plus.html — hero notify
  const apBtn1 = document.getElementById('ap-notify-btn-1');
  if (apBtn1) {
    apBtn1.addEventListener('click', function () {
      handleNotify(
        document.getElementById('ap-email-1'),
        document.getElementById('ap-msg-1'),
        this
      );
    });
  }

  // ajyal-plus.html — bottom CTA notify
  const apBtn2 = document.getElementById('ap-notify-btn-2');
  if (apBtn2) {
    apBtn2.addEventListener('click', function () {
      handleNotify(
        document.getElementById('ap-email-2'),
        document.getElementById('ap-msg-2'),
        this
      );
    });
  }

})();