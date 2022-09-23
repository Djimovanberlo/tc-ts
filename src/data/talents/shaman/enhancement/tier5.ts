import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Improved Weapon Totems',
    'spell_fire_enchantweapon',
    ['Causes your Windfury Totem effect to also increase attack speed by ', '% and your Flametongue Totem effect to also increase spell damage by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
    ],
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
  new Talent(
    'Elemental Weapons',
    'spell_fire_flametounge',
    [
      'Grants an additional effect to your weapon enhancements. Rockbiter: reduces physical damage taken by ',
      '%. Windfury: increases attack speed by ',
      '%. Flametongue: increases spell damage by ',
      "%. Frostbrand: your Frostbrand effect also reduces the target's attack speed by ",
      '%.',
    ],
    2,
    [
      [5, 10],
      [5, 10],
      [5, 10],
      [5, 10],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Parry', 'ability_parry', ['Allows you to parry enemy melee attacks.'], 1, [[]]),
  new Talent(
    'Totemic Fury',
    'spell_fire_totemofwrath',
    [
      'Your critical strikes with melee attacks increase the effect of your totems that affect friendly targets by ',
      '% for 8 sec and reduce the cooldown of your totems that are on cooldown by ',
      ' sec.',
    ],
    2,
    [
      [15, 30],
      [0.5, 1],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
