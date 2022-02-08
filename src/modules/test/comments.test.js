/**
 * @jest-environment jsdom
 */

import { counterComments } from '../apiComments.js';

test('counts the data and displays on HTML', () => {
  document.body.innerHTML = `
  <h3 class="counter-2">Comments</h3>
  <ul class="comments" id=comments-2>
  </ul>`;

  counterComments(2, [1, 2, 3, 4, 5, 6]);
  const commentTitle = document.querySelector('.counter-2');
  expect(commentTitle.innerHTML).toBe('Comments ( 6 )');
});

test('counts the data and displays on HTML', () => {
  document.body.innerHTML = `
    <h3 class="counter-5">Comments</h3>
    <ul class="comments" id=comments-2>
    </ul>`;

  counterComments(5, [1, 2, 3, 4, 5, 6, 7, 'as', 44, 89]);
  const commentTitle = document.querySelector('.counter-5');
  expect(commentTitle.innerHTML).toBe('Comments ( 10 )');
});

test('counts the data and displays on HTML', () => {
  document.body.innerHTML = `
      <h3 class="counter-7">Comments</h3>
      <ul class="comments" id=comments-7>
      </ul>`;

  counterComments(7, []);
  const commentTitle = document.querySelector('.counter-7');
  expect(commentTitle.innerHTML).toBe('Comments ( 0 )');
});
