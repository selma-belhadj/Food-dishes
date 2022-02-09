const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F3s8vkUg6h9SLp2FMoph/likes';
const getLikes = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addLike = async (id) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};
export default getLikes;