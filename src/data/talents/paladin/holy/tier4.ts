import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Unyielding Faith',
    'spell_holy_unyieldingfaith',
    ['Increases your chance to resist Fear and Disorient effect by an additional ', '%.'],
    2,
    [[5, 10]],
    null,
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
  new Talent(
    'Illumination',
    'spell_holy_greaterheal',
    [
      'After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a ',
      '% chance to gain mana equal to the base cost of the spell.',
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent(
    'Improved Blessing of Wisdom',
    'spell_holy_sealofwisdom',
    ['Increases the effect of your Blessing of Wisdom spell by ', '%.'],
    2,
    [[10, 20]]
  ),
  null,
]

export default tier4
