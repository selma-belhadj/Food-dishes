/**
 * @jest-environment jsdom
 */

import countItems from '../countItems';

test('Counts the items and displays on HTML', () => {
  document.body.innerHTML = `
    <ul>
        <li class="item-number"></li>
    </ul>`;

  countItems([1, 2, 3, 4, 5, 6]);
  const ItemCounter = document.querySelector('.item-number');
  expect(ItemCounter.innerHTML).toBe('Meals (6)');
});

test('Count the items and displays on HTML', () => {
  document.body.innerHTML = `
    <ul>
        <li class="item-number"></li>
    </ul>`;

  countItems([]);
  const ItemCounter = document.querySelector('.item-number');
  expect(ItemCounter.innerHTML).toBe('Meals (0)');
});

test('Count the items and displays on HTML', () => {
  document.body.innerHTML = `
    <ul>
        <li class="item-number"></li>
    </ul>`;

  countItems([4, 6, 7]);
  const ItemCounter = document.querySelector('.item-number');
  expect(ItemCounter.innerHTML).toBe('Meals (3)');
});
