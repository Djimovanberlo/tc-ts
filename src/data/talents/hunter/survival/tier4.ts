import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Surefooted',
    'surefooted',
    ['Increases hit chance by ', '% and increases the chance you resist movement impairing efects by ', '%.'],
    3,
    [
      [1, 2, 3],
      [5, 10, 15],
    ]
  ),
  null,
  new Talent(
    'Improved Feign Death',
    'feign-death',
    ['Reduces the cooldown of your Feign Death by ', ' sec and reduces the chance your Feign Death is resisted by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
    ]
  ),
]
