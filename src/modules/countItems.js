const countItems = (listMeals) => {
  const len = listMeals.length;
  document.querySelector('.item-number').innerHTML = `Meals (${len})`;
};

export default countItems;