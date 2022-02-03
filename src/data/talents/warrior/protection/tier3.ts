import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Last Stand',
    'spell_holy_ashestoashes',
    ['When activated, temporarily increases maximum health by 30% for 20 sec. After the effect expires, the hit points are lost.'],
    1,
    [[]],
    [{ x: 1, y: 0 }],
    null,
    null,
    null,
    'Instant',
    '10 min cooldown'
  ),
  new Talent(
    'Improved Shield Block',
    'ability_defend',
    [
      'Allows your Shield Block to block an additional attack and increases the duration by ',
      ' seconds. In addition, when you block an attack, you generate additional threat.',
    ],
    2,
    [[0.5, 1, 2]],
    [{ x: 0, y: 1 }]
  ),
  new Talent('Improved Revenge', 'ability_warrior_revenge', ['Gives your Revenge a ', '% chance to stun the target for 3 sec.'], 3, [
    [15, 30, 45],
  ]),
  new Talent(
    'Defiance',
    'ability_warrior_innerrage',
    ['Increases the threat generated by your attacks while in defensive stance by ', '%.'],
    3,
    [[5, 10, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
]

export default tier3
