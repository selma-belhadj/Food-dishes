import './style.css';
import renderMeals from './modules/renderMeals';
import getMeals from './modules/apiMeals';

window.onload = async () => {
  renderMeals(await getMeals());
};