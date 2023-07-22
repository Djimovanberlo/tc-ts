import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent('Presence of Mind', 'spell_nature_enchantarmor', ['When activated, your next Mage Spell with a cast time less than 10 sec becomes an instant cast spell.'], 1, [[]], null, [{ x: 5, y: 1 }], null, null, 'Instant', '3 min cooldown', [
    'D1',
  ]),
  new Talent('Arcane Mind', 'spell_shadow_charm', ['Increases your Intellect by ', '%.'], 5, [[2, 4, 6, 8, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier5
