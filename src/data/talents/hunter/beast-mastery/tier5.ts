import { Talent } from '../../Classes'

export default [
  new Talent(
    'Ferocious Inspiration',
    'ability_hunter_ferociousinspiration',
    ['When your pet scores a Critical hit, all party member have their damage and healing increased by ', '% for 10 sec.'],
    3,
    [[1, 2, 3]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true,
      isChanged: false,
      isMoved: false
    }
  ),
  new Talent(
    'Intimidation',
    'ability_devour',
    [
      'Command your pet to intimidate the target on the next succesful melee attack, causing a high amount of threat and stunning the target for 3 sec.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '8% of base mana',
    '100yd range',
    'Instant',
    '1 min cooldown',
    ['D2']
  ),
  null,
  new Talent('Bestial Discipline', 'spell_nature_abolishmagic', ['Increases the Focus generation of your pets by ', '%.'], 2, [[10, 20]]),
]
