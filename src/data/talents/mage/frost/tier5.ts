import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Ice Block',
    'ice-block',
    [
      'You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec. During that time you cannot move, attack or cast spells.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      {
        x: 6,
        y: 1,
      },
    ],
    '15 mana',
    null,
    'Instant',
    '5 min cooldown',
    ['D2']
  ),
  new Talent('Improved Cone of Cold', 'cone-of-cold', ['Increases the damage done by your Cone of Cold spell by ', '%.'], 3, [[5, 10, 15]]),
  null,
]
