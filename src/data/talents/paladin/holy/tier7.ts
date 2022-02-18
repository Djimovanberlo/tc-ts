import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Holy Shock',
    'spell_holy_searinglight',
    [
      'Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally. Damage and healing is doubled on targets that have less than 30% health.',
    ],
    1,
    [[1]],
    [{ x: 4, y: 1 }],
    null,
    '225 Mana',
    '20 yd range',
    'Instant',
    '30 sec cooldown',
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
]

export default tier7
