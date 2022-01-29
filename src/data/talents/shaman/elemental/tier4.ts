import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Fire Totems',
		'spell_fire_sealoffire',
		[
			'Reduces the delay before your Fire Nova Totem activates by ',
			' sec and reduces the threat generated by your Magma Totem by ',
			'%.',
		],
		2,
		[
			[1, 2],
			[25, 50],
		]
	),
	new Talent(
		'Eye of the Storm',
		'spell_nature_eyeofthestorm',
		[
			'Gives you a ',
			'% chance to gain the focused casting effect for 6 sec after being the victim of a melee or ranged critical strike. The focused casting effect prevents you from losing casting time when taking damage.',
		],
		3,
		[[33, 66, 100]]
	),
	new Talent(
		'Lightning Mastery',
		'spell_lightning_lightningbolt01',
		['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'],
		5,
		[[0.2, 0.4, 0.6, 0.8, 1]],
		[{ x: 2, y: 2 }],
		null,
		null,
		null,
		null,
		null,
		null,
		{
			isNew: false,
			isChanged: false,
			isMoved: true,
		}
	),
	null,
]
