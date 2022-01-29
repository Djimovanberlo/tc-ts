import { Talent } from '../../Classes'

export default [
	new Talent(
		'Reflection',
		'spell_frost_windwalkon',
		['Allows ', '% of your Mana regeneration to continue while casting.'],
		3,
		[[10, 20, 30]],
		null,
		null,
		null,
		null,
		null,
		null,
		['D2'],
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	new Talent(
		'Sublety',
		'ability_eyeoftheowl',
		['Reduces the threat generated by your healing spells by ', '%.'],
		3,
		[[7, 14, 20]],
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
	new Talent(
		'Insect Swarm',
		'spell_nature_insectswarm',
		[
			'The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.',
		],
		1,
		[[1]],
		[{ x: null, y: null }],
		[{ x: 4, y: 2 }],
		'45 Mana',
		'30 yd range',
		'Instant',
		null,
		['D2']
	),
	null,
]
