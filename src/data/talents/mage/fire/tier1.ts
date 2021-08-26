import { Talent } from '../../Classes'

export default [
  new Talent(
    'Fire Warding',
    'spell_fire_firearmor',
    ['Increases your Fire resistance by ', ' and gives your Fire Ward a ', '% chance to reflect Fire spells and effects while active.'],
    2,
    [
      [20, 40],
      [10, 20],
    ]
  ),
  new Talent('Improved Fireball', 'spell_fire_flamebolt', ['Reduces the casting time of your Fireball spell by ', ' sec.'], 5, [
    [0.1, 0.2, 0.3, 0.4, 0.5],
  ]),
  new Talent('Impact', 'spell_fire_meteorstorm', ['Gives your fire spells a ', '% chance to stun the target for 2 sec.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]