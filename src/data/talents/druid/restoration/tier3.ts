import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Reflection', 'reflection', ['Allows ', '% of your Mana regeneration to continue while casting.'], 3, [[5, 10, 15]]),
  new Talent(
    'Insect Swarm',
    'insect-swarm',
    ['The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.'],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Sublety', 'sublety', ['Reduces the threat generated by your Healing spells by ', '%.'], 5, [[4, 8, 12, 16, 20]]),
]
