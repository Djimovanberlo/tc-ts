import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Mana Shield', 'spell_shadow_detectlesserinvisibility', ['Decreases the mana lost per point of damage when Mana Shield is active by ', '%.'], 2, [[10, 20]]),
  new Talent('Improved Counterspell', 'spell_frost_iceshock', ['Gives your counterspell a ', '% chance to silence the target for 4 sec.'], 2, [[50, 100]]),
  null,
  new Talent('Arcane Meditation', 'spell_shadow_siphonmana', ['Allows ', '% of your Mana regeneration to continue while casting.'], 3, [[5, 10, 15]]),
]

export default tier4
