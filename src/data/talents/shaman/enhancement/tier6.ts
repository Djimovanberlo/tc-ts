import { Talent } from '../../Classes'

export default [
  null,
  null,
  new Talent(
    'Unleashed Rage',
    'spell_nature_unleashedrage',
    [
      "Causes your critical hits with melee attacks to increase all party members' melee attack power by ",
      '% if within 20 yards of the Shaman. Lasts 10 sec.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]