import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Spirit Tap',
    'spell_shadow_requiem',
    [
      'Gives you a ',
      '% chance to gain a 100% bonus to your spirit after an enemy that yields experience or honor is killed while effected by your Shadow Word: Pain. For the duration, your mana will regenerate at a 50% rate while casting. Lasts 15 sec.',
    ],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  new Talent('Blackout', 'spell_shadow_gathershadows', ['Your Shadow spells have a .', '% chance to stun the target for 3 sec.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  null,
]