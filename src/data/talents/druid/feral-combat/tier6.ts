import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Heart of the Wild',
    'heart-of-the-wild',
    [
      'Increases your Intellect by ',
      '%. In addition, while in Bear or Dire Bear Form your Stamina is increased by ',
      '% and while in Cat Form your Strength is increased by ',
      '%.',
    ],
    5,
    [
      [4, 8, 12, 16, 20],
      [4, 8, 12, 16, 20],
      [4, 8, 12, 16, 20],
    ],
    [{ x: 3, y: 1 }]
  ),
  null,
  null,
]
