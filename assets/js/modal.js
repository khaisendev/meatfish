document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const modalButtons = document.querySelectorAll('.modal-window');
  const modalClose = document.querySelector('.modal__heading-close');
  const form = document.querySelector('.modal__form'); 
    if (modal && modalClose) {
      modalButtons.forEach(button => {
        button.addEventListener('click', openModal);
      });
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    window.addEventListener('keydown', escapeClose);
    }
    function openModal() {
      if (modal) {modal.style.display = 'block';}
    }
    function closeModal() {
      if (modal) {modal.style.display = 'none'; clearForm();}
    }
    function outsideClick(e) {
      if (modal && e.target === modal) {modal.style.display = 'none'; clearForm(); }
    }
    function escapeClose(e) {
      if (modal && e.key === 'Escape') {modal.style.display = 'none'; clearForm();}
    }
    function clearForm() {
      if (form) {form.reset();}
    }
  });
