const InvolveApiId = 'C3gRBaouCzCheKjXVJzf';

const AddComment = async (id, name, comment) => {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolveApiId}/comments?item_id=${id}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    },
  );
};

const commentsRender = (data, id) => {
  const list = document.getElementById(`comments-${id}`);
  list.innerHTML = '';
  if (data.length) {
    data.forEach((comment) => {
      list.innerHTML += `<li><small>${comment.creation_date}</small> | <span>${comment.username}:</span> ${comment.comment}</li>`;
    });
  } else {
    list.innerHTML = '<li class="special">No comments </li>';
  }
};

const counterComments = (id, length) => {
  if (!length) {
    length = 0;
  }
  document.querySelector(`.counter-${id}`).innerHTML = `Comments ( ${length} )`;
};

export const getComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolveApiId}/comments?item_id=${id}`,
  );
  const data = await response.json();
  const { length } = data;
  commentsRender(data, id);
  counterComments(id, length);
  return data;
};

export default AddComment;
