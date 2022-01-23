import { Talent } from '../../Classes'

export default [
  new Talent(
    'Ancestral Healing',
    'spell_nature_undyingstrength',
    [
      'Increases your targets armor value by ',
      '% for 15 sec after getting a critical effect from one of your healing spells. Increases your armor value by ',
      '% after receiving a critical heal.',
    ],
    3,
    [
      [8, 16, 25],
      [8, 16, 25],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
  new Talent('Tidal Focus', 'spell_frost_manarecharge', ['Reduces the Mana cost of your healing spells by ', '%.'], 5, [[1, 2, 3, 4, 5]],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: false,
    isMoved: true
  }
  ),
  new Talent(
    'Spiritual Warding',
    'spell_nature_spiritarmor',
    ['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '%.'],
    3,
    [[4, 7, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: false,
      isMoved: true
    }
  ),
  null,
]
