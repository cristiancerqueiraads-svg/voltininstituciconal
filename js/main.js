/* ============================================================
   VOLTIN — Main
   Inicialização dos módulos e utilidades gerais.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Inicializa os módulos do site
  VoltinWhatsApp.init();
  VoltinAnimations.init();
  VoltinFaq.init();

  // Converte os atributos data-lucide em SVGs (ícones Lucide)
  if (window.lucide) {
    lucide.createIcons();
  }
});
