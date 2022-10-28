import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
  new Talent(
    'Concussion Blow',
    'ability_thunderbolt',
    ['Stuns the target for 5 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '15 Rage',
    'Melee Range',
    'Instant cast',
    '45 sec cooldown',
    ['D2']
  ),
  new Talent('Improved Shield Bash', 'ability_warrior_shieldbash', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Focus Rage',
    'ability_warrior_focusedrage',
    [
      'While active, basic attacks consume rage points based on attack speed, dealing additional damage per rage point spent. Attacks deal additional threat while in defensive stance. Lasts 10 sec or until cancelled.',
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant cast',
    '30 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
