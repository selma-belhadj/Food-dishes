import renderModal from './renderModal.js';
import { getComments } from './apiComments.js';
import { addLike } from './likes.js';

const renderMeals = (list, likeList) => {
  const worksContainer = document.querySelector('#portfolio');
  list.forEach((work) => {
    const workProject = document.createElement('div');
    const workContent = ` <div class="works-project">
          <img class="works-img" src=${work.strCategoryThumb} alt="test1"  draggable="false"/>
          <div>
              <h2 class="works-title">${work.strCategory}</h2>
              <p>${work.strCategoryDescription}</p>
              <div class="likes">
                    <div class="likes-content" draggable="false"> <i id="heart-${work.idCategory}" class="heart far fa-heart"></i>
                      <span class="counter"><span class="likesCounter-${work.idCategory}">0</span> Likes</span>
                    </div>
                    <button data-modal-target="#modal${work.idCategory}" id=${work.idCategory} type="button">Comment</button>
              </div>   
          </div>
        </div>`;

    workProject.innerHTML = workContent;
    worksContainer.appendChild(workProject);

    const heartLikesBtn = document.getElementById(`heart-${work.idCategory}`);
    heartLikesBtn.addEventListener('click', () => {
      const lastValue = Number(
        document.querySelector(`.likesCounter-${work.idCategory}`).textContent,
      );
      document.querySelector(`.likesCounter-${work.idCategory}`).innerHTML = `${
        lastValue + 1
      }`;
      // add like to api
      console.log('likes Id: ', work.idCategory);
      addLike(work.idCategory);
    });

    const modalOpenButton = document.getElementById(work.idCategory);
    modalOpenButton.addEventListener('click', () => {
      renderModal(work);
      const modalChoose = document.querySelector(`#modal${work.idCategory}`);
      modalChoose.classList.add('active');
      worksContainer.classList.add('blur');
      document.body.classList.toggle('noScroll');
      getComments(work.idCategory);
    });
  });

  likeList = likeList.filter((item) => item.item_id !== '1234');
  likeList.forEach((item) => {
    console.log('he', 'id:', item.item_id, 'likes:', item.likes);
    document.querySelector(`.likesCounter-${item.item_id}`).innerHTML = item.likes;
  });
};

export default renderMeals;