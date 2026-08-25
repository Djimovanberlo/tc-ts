import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Molten Armor",
    "ability_mage_moltenarmor",
    [
      "Increases your chance to critically hit with spells by 3%. Causes 79 Fire damage and dazes the target for 3 sec when you are hit and by a spell or attack. This effect has 12 sec cooldown. Only one type of Armor spell can be active on the Mage at any time. Lasts 30 min.",
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  new Talent(
    "Critical Mass",
    "spell_nature_wispheal",
    ["Increases the critical strike chance of your Fire spells by ", "%."],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
  ),
  new Talent(
    "Blast Wave",
    "spell_holy_excorcism_02",
    [
      "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "215 Mana",
    null,
    "Instant",
    "45 sec cooldown",
  ),
  null,
];

export default tier5;
