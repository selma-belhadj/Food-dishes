import AddComment from './apiComments';
import newDate from './utils';

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
    <div class="form-comments" >
      <form id=form${item.idCategory}>
        <h3>Add Comment</h3>
        <input name="name" type="text" placeholder="Name" />
        <textarea name="comment" type="message" rows="5" cols="25" placeholder="Your delicious Comment" ></textarea>
        <button name='button' type="submit" id=${item.idCategory} class="comment-btn">Comment</button>
      </form>
      <div class="modal-comment-container">
        <h3 class="counter-${item.idCategory}">Comments</h3>
        <ul class="comments" id=comments-${item.idCategory}>
        
        </ul>
      </div>
    </div>
    `;
  modalContainer.innerHTML = modalContent;
  document.body.appendChild(modalContainer);

  const form = document.querySelector(`#form${item.idCategory}`);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const commnetLength = document.querySelectorAll(
      `#comments-${item.idCategory} li`,
    ).length;
    const commentList = document.getElementById(`comments-${item.idCategory}`);

    if (form.elements.name.value.trim() && form.elements.comment.value.trim()) {
      document.querySelector(
        `.counter-${item.idCategory}`,
      ).innerHTML = `Comments ( ${commnetLength + 1} )`;
      if (
        commnetLength === 1
        && document
          .querySelectorAll(`#comments-${item.idCategory} li`)[0]
          .classList.contains('special')
      ) {
        commentList.innerHTML = `<li><small>${newDate()}</small> | <span>${form.elements.name.value.trim()}:</span> ${form.elements.comment.value.trim()}</li>`;
      } else {
        commentList.innerHTML += `<li><small>${newDate()}</small> | <span>${form.elements.name.value.trim()}:</span> ${form.elements.comment.value.trim()}</li>`;
      }
      AddComment(
        item.idCategory,
        form.elements.name.value.trim(),
        form.elements.comment.value.trim(),
      );
    } else {
      alert('Please, enter your delicious data !!!');
    }

    form.reset();
    form.focus();
  });

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
