import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Feral Instinct', 'ability_ambush', ['Increases threat caused in Bear and Dire Bear Form by ', '% and reduces the chance enemies have to detect you while Prowling.'], 5, [
    [3, 6, 9, 12, 15],
  ]),
  new Talent('Brutal Impact', 'ability_druid_bash', ['Increases the stun duration of your Bash and Pounce abilites by ', ' sec.'], 2, [[0.5, 1]], null),
  new Talent('Thick Hide', 'inv_misc_pelt_bear_03', ['Increases your Armor contribution from items by ', '%'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Improved Enrage', 'ability_druid_enrage', ['The Enrage ability now instantly generates ', ' rage.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
]

export default tier2
