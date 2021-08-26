import { Talent } from '../../Classes'

export default [
  new Talent(
    'Storm Reach',
    'spell_nature_stormreach',
    [
      'Increases the range of your Lightning Bolt and Chain Lightning spells by ',
      ' yards and reduces threat generated by your offensive spells by ',
      '%.',
    ],
    2,
    [
      [3, 6],
      [10, 20],
    ]
  ),
  new Talent(
    'Elemental Fury',
    'spell_fire_volcano',
    ['Increases the critical strike damage bonus of your Searing, Magma and Fire Nova Totems and your Fire, Frost and Nature spells by 100%.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
  new Talent(
    'Unleashed Elements',
    'spell_nature_elementalprecision_1',
    [
      "Causes your critical hits from spells to increase all party members' spell damage and healing by ",
      '% if within 20 yards of the Shaman. Lasts 10 sec.',
    ],
    3,
    [[4, 7, 10]]
  ),
]