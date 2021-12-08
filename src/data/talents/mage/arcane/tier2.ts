import { Talent } from '../../Classes'

export default [
  new Talent('Wand Specialization', 'inv_wand_01', ['Increases the damage you deal with wands by ', '%.'], 2, [[13, 25]]),
  null,
  new Talent(
    'Arcane Concentration',
    'spell_shadow_manaburn',
    [
      'Gives you a ',
      ' chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]
