import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Psychic Scream',
		'spell_shadow_psychicscream',
		['Reduces the cooldown of psychic scream by ', ' sec'],
		2,
		[[2, 4]],
		[{ x: null, y: null }],
		[{ x: 4, y: 0 }],
		null,
		null,
		null,
		null,
		['D3'],
		{
			isNew: false,
			isChanged: false,
			isMoved: true,
		}
	),
	new Talent(
		'Improved Shadow Word: Pain',
		'spell_shadow_shadowwordpain',
		['Increases the duration of Shadow Word: Pain by ', ' sec.'],
		2,
		[[3, 6]]
	),
	new Talent(
		'Shadow Focus',
		'spell_shadow_burningspirit',
		["Reduces the target's chance to resist your Shadow spells ", '%.'],
		5,
		[[2, 4, 6, 8, 10]]
	),
	new Talent(
		'Shadow Affinity',
		'spell_shadow_shadowward',
		['Reduces the threat generated by your shadow spells by ', '%.'],
		3,
		[[8, 16, 25]]
	),
]
