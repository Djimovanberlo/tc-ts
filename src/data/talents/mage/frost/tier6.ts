import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  new Talent(
    'Arctic Bolts',
    'spell_frost_arcticwinds',
    ['Gives your Frostbolt spell a ', '% chance to increase the critical strike damage of your Frostbolt by 6%. This effect stacks up to 5 times.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    "Winter's Chill",
    'spell_frost_chillingblast',
    ['Gives your Frost spells a ', "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% This effect stacks up to 5 times."],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
=======
export default [
<<<<<<< HEAD
	null,
	null,
	new Talent(
		"Winter's Chill",
		'spell_frost_chillingblast',
		[
			'Gives your Frost spells a ',
			"% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% and critical strike damage from Frost spells against the target by 3%. This effect stacks up to 5 times.",
		],
		5,
		[[20, 40, 60, 80, 100]],
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
>>>>>>> 1ddb4f1 (patch notes)
=======
  null,
  null,
  new Talent(
    "Winter's Chill",
    'spell_frost_chillingblast',
    [
      'Gives your Frost spells a ',
      "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2%. This effect stacks up to 5 times.",
    ],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
>>>>>>> 8b33b65 (update talents + item class)
]

export default tier6
