
const renderModal = (item) => {
  // creat modal
  const modalContainer = document.createElement('div');
  modalContainer.id = `modal${item.idCategory}`;
  modalContainer.classList.add('modal');
  const modalContent = `
    <div class="modal-header">
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-content">
        <img class="modal-img" src=${item.strCategoryThumb} alt="sdadsa" draggable="false" />
        <div class="modal-body">
          <h2>${item.strCategory}</h2>
          <div class="modal-detail">
            ${item.strCategoryDescription}
          </div>
        </div>
    </div>
   
    `;
  modalContainer.innerHTML = modalContent;
  document.body.appendChild(modalContainer);

  const worksContainer = document.querySelector('#portfolio');
  const modalCloseButtons = document.querySelectorAll('[data-close-button]');
  function modalClose(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    worksContainer.classList.remove('blur');
  }
  modalCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modalChoose = button.closest('.modal');
      document.body.classList.toggle('noScroll');
      modalClose(modalChoose);
    });
  });
};

export default renderModal;
