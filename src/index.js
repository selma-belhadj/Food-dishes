import './style.css';
import renderMeals from './modules/renderMeals';
import getMeals from './modules/apiMeals';
import getLikes from './modules/likes';

window.onload = async () => {
  renderMeals(await getMeals(), await getLikes());
};