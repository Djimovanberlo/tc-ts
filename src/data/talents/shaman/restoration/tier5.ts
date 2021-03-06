import { Talent } from '../../Classes';

export default [
  new Talent(
    "Nature's Swiftness",
    'natures-swiftness',
    ['When activated, your next Nature spell becomes an instant cast spell.'],
    1,
    [[]],
    [
      {
        x: 1,
        y: 0,
      },
    ]
  ),
  null,
  new Talent('Gift of Nature', 'gift-of-nature', ['Increases the effect of all healing spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: 2, y: 2 }]),
  new Talent(
    'Cycle of Life',
    'tranquility',
    ['Reduces the cooldown of Tranquility by ', 'minutes and Rebirth by ', 'minutes and reduces their mana cost by ', '%.'],
    2,
    [
      [1, 2],
      [5, 10],
      [25, 50],
    ]
  ),
];
