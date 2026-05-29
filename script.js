/* ============================================================
   Checkbox Legal Process Automation — landing page interactions
   Currently: demo modal open/close behavior.
   Safe to load in <head>, mid-body, or before </body>.
   ============================================================ */
(function () {
  function init() {
    var modal = document.getElementById('demoModal');
    if (!modal) return;

    function openModal(e) {
      if (e && e.preventDefault) e.preventDefault();
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Any element with .js-open-demo opens the modal
    document.querySelectorAll('.js-open-demo').forEach(function (el) {
      el.addEventListener('click', openModal);
    });

    // Any element with data-close-demo (X button or backdrop) closes it
    document.querySelectorAll('[data-close-demo]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    // Escape key also closes the modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
