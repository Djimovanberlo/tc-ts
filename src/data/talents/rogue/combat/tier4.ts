import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Close Quarters Combat',
    'inv_weapon_shortblade_05',
    ['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Endurance', 'spell_shadow_shadowward', ['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'], 2, [[45, 90]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent(
    'Throwing Weapon Specialization',
    'ability_throw',
    ['Increases your range with throwing weapons by ', ' yards and grants your hits with throwing weapons a ', '% chance to add a combo point to the target.'],
    2,
    [
      [3, 6],
      [35, 70],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier4
