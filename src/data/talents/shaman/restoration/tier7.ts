import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Torrent Totem',
    'spell_frost_summonwaterelemental',
    [
      "Summons a torrent totem at the feet of the caster with health equal to 20% of the shaman's for 12 sec. The torrent totem restores 170 health and mana to all party members within 20 yards every 3 sec.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    null,
    '20 Mana',
    null,
    'Instant',
    '5 min cooldown',
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
]
