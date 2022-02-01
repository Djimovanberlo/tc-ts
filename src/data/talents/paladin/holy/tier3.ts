import { Talent } from '../../Classes'

export default [
  new Talent(
    'Healing Light',
    'spell_holy_holybolt',
    ['Increases the amount healed by your Flash or Light and Holy Light spells by ', '%.'],
    3,
    [[4, 8, 12]]
  ),
  new Talent(
    'Aura Mastery',
    'spell_holy_auramastery',
    ['Increases the range of you Auras to 40 yards and increases their effect by 10%.'],
    1,
    [[]],
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
  new Talent(
    'Improved Lay on Hands',
    'spell_holy_layonhands',
    [
      'Gives the target of your Lay on Hands spell a  ',
      '% bonus to their armor value from items for 2 min. In addition, the cooldown of your Lay on hands spell is reduced by 10 min.',
    ],
    2,
    [[15, 30]]
  ),
  new Talent(
    'Holy Verdict',
    'spell_holy_fanaticism',
    ['Increases the damage and critical strike chance of your damaging Holy Shock and damaging Judgement spells by ', '%.'],
    2,
    [[10, 20]],
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
