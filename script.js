/* ── Navbar on scroll ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Mobile menu ── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('menuClose').addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Seamless marquee ── */
(function buildMarquee() {
  const items = [
    'عصائر طازجة', null,
    'موهيتو بالنكهات', null,
    'قهوة مختصة', null,
    'سموذي صحي', null,
    'مشروبات موسمية', null,
    'توصيل سريع', null,
    'خامات مختارة', null,
    'تجربة لا تُنسى', null,
  ];

  const container = document.getElementById('marqueeEl');
  if (!container) return;

  function makeSet() {
    const frag = document.createDocumentFragment();
    items.forEach(item => {
      const s = document.createElement('span');
      if (item === null) { s.className = 'dot'; s.textContent = '◆'; }
      else { s.textContent = item; }
      frag.appendChild(s);
    });
    return frag;
  }

  container.appendChild(makeSet());

  requestAnimationFrame(() => {
    const setWidth = container.scrollWidth;
    container.appendChild(makeSet());

    const speed = 80;
    const duration = setWidth / speed;

    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes hayyiz-marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-${setWidth}px); }
      }
      #marqueeEl {
        animation: hayyiz-marquee ${duration.toFixed(2)}s linear infinite;
      }
    `;
    document.head.appendChild(styleTag);
  });
})();