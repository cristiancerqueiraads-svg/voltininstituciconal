/* ============================================================
   VOLTIN — WhatsApp
   Monta os links de CTA apontando para o WhatsApp com
   mensagens pré-preenchidas por tipo de serviço.
   ============================================================ */

const VoltinWhatsApp = (() => {
  // Número do WhatsApp da VOLTIN (código do país + DDD + número)
  const NUMBER = '5511959310698';

  // Mensagens pré-preenchidas por serviço
  const MESSAGES = {
    geral: 'Olá! Vim pelo site da VOLTIN e quero falar com um especialista.',
    climatizacao: 'Olá! Vim pelo site da VOLTIN e quero um orçamento de climatização (ar-condicionado).',
    eletrica: 'Olá! Vim pelo site da VOLTIN e quero um orçamento de serviços elétricos.'
  };

  function buildUrl(service) {
    const message = MESSAGES[service] || MESSAGES.geral;
    return `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function init() {
    document.querySelectorAll('.js-whatsapp-link').forEach((link) => {
      const service = link.dataset.service || 'geral';
      link.href = buildUrl(service);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }

  return { init, buildUrl };
})();
