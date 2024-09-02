(() => {
    const refs = {
      openModalBtn: document.querySelector('[thank-modal-open]'),
      closeModalBtn: document.querySelector('[thank-modal-close]'),
      modal: document.querySelector('[thank-modal]'),
      field: document.querySelector('.contact__input'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      if (refs.field.value !== '' && refs.field.value.includes('@')){
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
    else{
      alert('Please, write your email corretly');
    }
    }
  })();