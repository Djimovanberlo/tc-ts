import { Talent } from '../../Classes'

export default [
	null,
	new Talent(
		'Flurry',
		'ability_ghoulfrenzy',
		['Increases your attack speed by ', '% for your next 3 swings after dealing a critical strike.'],
		5,
		[[10, 15, 20, 25, 30]],
		[{ x: 1, y: 1 }]
	),
	new Talent(
		'Ancestral Fortitude',
		'spell_holy_devotion',
		['Increases your armor by ', '% and reduces the duration of movement slowing effects on you by ', '%.'],
		5,
		[
			[2, 4, 6, 8, 10],
			[10, 20, 30, 40, 50],
		],
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
	null,
]
