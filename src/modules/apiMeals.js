const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const getMeals = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.categories;
};
export default getMeals;