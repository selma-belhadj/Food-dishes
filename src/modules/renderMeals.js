import renderModal from './renderModal';

const renderMeals = (list) => {
  const worksContainer = document.querySelector('#portfolio');
  list.forEach((work) => {
    const workProject = document.createElement('div');
    const workContent = ` <div class="works-project">
          <img class="works-img" src=${work.strCategoryThumb} alt="test1"  draggable="false"/>
          <div>
              <h2 class="works-title">${work.strCategory}</h2>
              <p>${work.strCategoryDescription}</p>   
              <button data-modal-target="#modal${work.idCategory}" id=${work.idCategory} type="button">Comment</button>
          </div>
        </div>`;
    workProject.innerHTML = workContent;
    worksContainer.appendChild(workProject);

    const modalOpenButton = document.getElementById(work.idCategory);
    modalOpenButton.addEventListener('click', () => {
      renderModal(work);
      const modalChoose = document.querySelector(`#modal${work.idCategory}`);
      modalChoose.classList.add('active');
      worksContainer.classList.add('blur');
      document.body.classList.toggle('noScroll');
    });
  });
};

export default renderMeals;
