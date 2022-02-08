const InvolveApiId = 'C3gRBaouCzCheKjXVJzf';

export const AddComment = async (id, name, comment) => {
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
    }
  );
};
