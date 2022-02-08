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
  console.log({ data });
  const list = document.getElementById(`comments-${id}`);
  console.log('output list', list);
  list.innerHTML = '';
  if (data.length) {
    data.forEach((comment) => {
      list.innerHTML += `<li><small>${comment.creation_date}</small> | <span>${comment.username}:</span> ${comment.comment}</li>`;
    });
  } else {
    list.innerHTML = '<li class="special">No comments </li>';
  }
};

export const getComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolveApiId}/comments?item_id=${id}`,
  );
  const data = await response.json();
  // todo:  const length = data.length;
  commentsRender(data, id);
  return data;
};

export default AddComment;
