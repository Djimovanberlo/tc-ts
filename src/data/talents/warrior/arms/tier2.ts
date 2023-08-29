import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Charge', 'ability_warrior_charge', ['Increases the rage generated by your charge by ', '.'], 2, [[3, 6]]),
  new Talent('Tactical Mastery', 'spell_nature_enchantarmor', ['You retain up to an additional ', ' rage points when you change stances.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
  new Talent('Improved Thunder Clap', 'ability_thunderclap', ['Reduces the rage cost of your thunder clap by ', ' rage point.'], 3, [[1, 2, 3]], null, [{ x: 2, y: 3 }], null, null, null, null, ['D1']),
]

export default tier2
