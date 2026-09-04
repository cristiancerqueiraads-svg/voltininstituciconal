/* ============================================================
   VOLTIN — Animações
   Scroll reveal (IntersectionObserver), sombra no header ao
   rolar a página e smooth scroll nos links âncora.
   ============================================================ */

const VoltinAnimations = (() => {

  function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat__number');
    if (!statNumbers.length) return;

    function animateCounter(el) {
      const text = el.textContent;
      const match = text.match(/^(\d+)([+%]?)$/);
      if (!match) return;

      const target = parseInt(match[1], 10);
      const suffix = match[2] || '';
      const duration = 1800;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      el.textContent = '0' + suffix;
      requestAnimationFrame(update);
    }

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach((el) => observer.observe(el));
  }

  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal--visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((el) => observer.observe(el));
  }

  function initHeaderShadow() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href === '#') return; // links de CTA (WhatsApp) — o JS deles cuida

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function init() {
    initStatCounters();
    initScrollReveal();
    initHeaderShadow();
    initSmoothScroll();
  }

  return { init };
})();
