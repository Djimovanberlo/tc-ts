import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  null,
  new Talent(
    'Tranquil Spirit',
    'spell_holy_elunesgrace',
    ['Reduces the mana cost of your healing spells by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  null,
  new Talent(
    'Living Seed',
    'ability_druid_empoweredrejuvination',
    ['Causes your Rejuvenation and Regrowth spells to apply the Living Seed effect. The Living Seed effect Increases healing received by the target by ', '%. This effect does not stack.'],
    3,
    [[5, 10, 15]],
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
=======
export default [
<<<<<<< HEAD
	null,
	new Talent(
		'Tranquil Spirit',
		'spell_holy_elunesgrace',
		['Reduces the mana cost of your healing spells by ', '%.'],
		5,
		[[2, 4, 6, 8, 10]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		null,
		null,
		null,
		null,
		['D3']
	),
	null,
	new Talent(
		'Improved Rejuvenation',
		'spell_nature_rejuvenation',
		['Causes your Rejuvenation to increase healing done to the target by ', '%. This effect does not stack.'],
		3,
		[[4, 7, 10]],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
>>>>>>> 1ddb4f1 (patch notes)
=======
  null,
  new Talent(
    'Tranquil Spirit',
    'spell_holy_elunesgrace',
    ['Reduces the mana cost of your healing spells by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  null,
  new Talent(
    'Improved Rejuvenation',
    'spell_nature_rejuvenation',
    ['Causes your Rejuvenation to increase healing done to the target by ', '%. This effect does not stack.'],
    3,
    [[4, 7, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier4
