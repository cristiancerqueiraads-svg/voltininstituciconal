/* ============================================================
   VOLTIN — FAQ
   Accordion de perguntas frequentes (abre uma por vez).
   ============================================================ */

const VoltinFaq = (() => {

  function closeItem(item) {
    item.classList.remove('faq__item--open');
    item.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    item.querySelector('.faq__answer').style.maxHeight = null;
  }

  function openItem(item) {
    item.classList.add('faq__item--open');
    item.querySelector('.faq__question').setAttribute('aria-expanded', 'true');
    const answer = item.querySelector('.faq__answer');
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  }

  function init() {
    const items = document.querySelectorAll('.faq__item');

    items.forEach((item) => {
      const question = item.querySelector('.faq__question');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq__item--open');

        // Fecha todas as outras antes de abrir a clicada
        items.forEach((other) => {
          if (other !== item) closeItem(other);
        });

        if (isOpen) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });
  }

  return { init };
})();
