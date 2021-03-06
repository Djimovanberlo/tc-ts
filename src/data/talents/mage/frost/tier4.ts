import { Talent } from '../../Classes'

export default [
  new Talent(
    'Arctic Reach',
    'arctic-reach',
    ['Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ', '%.'],
    2,
    [[10, 20]]
  ),
  new Talent(
    'Frost Channeling',
    'natures-guidance',
    ['Reduces the mana cost of your Frost Spells by ', '% and reduces the threat generated by your Frost spells by ', '%.'],
    3,
    [
      [5, 10, 15],
      [10, 20, 30],
    ]
  ),
  new Talent(
    'Shatter',
    'frost-shock',
    ['Increases the critical strike chance of all your spells against frozen targets by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 1, y: 2 }]
  ),
  null,
]
