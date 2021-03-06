import { Talent } from '../../Classes'

export default [
  new Talent(
    'Expose Weakness',
    'expose-weakness',
    [
      'Your melee and ranged critical strikes have a ',
      '% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all atackers against that target by 25% of your agility for 7 sec.',
    ],
    2,
    [[50, 100]]
  ),
  new Talent(
    'Killer Instinct',
    'killer-instinct',
    ['Increases your critical strike chance with all attacks by ', '%.'],
    3,
    [[1, 2, 3]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent(
    'Counterattack',
    'counter-attack',
    [
      "A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '45 Mana',
    'Melee range',
    'Instant',
    '5 sec cooldown'
  ),
]
