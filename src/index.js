import './style.css';
import renderMeals from './modules/mealsRender';
import getMeals from './modules/apiMeals';

window.onload = async () => {
  renderMeals(await getMeals());
};