import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Feline Swiftness",
    "spell_nature_spiritwolf",
    [
      "Increases your movement speed while outdoors in Cat Form by ",
      "% and increases your chance to dodge in Cat Form by ",
      "%.",
    ],
    2,
    [
      [15, 30],
      [2, 4],
    ],
  ),
  new Talent(
    "Feral Charge",
    "ability_hunter_pet_bear",
    [
      "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.",
    ],
    1,
    [[]],
    null,
    null,
    "5 Rage",
    "8 - 25 yd range",
    "Instant cast",
    "15 sec cooldown",
  ),
  new Talent(
    "Sharpened Claws",
    "inv_misc_monsterclaw_04",
    [
      "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ",
      "%.",
    ],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ["D1"],
  ),
  new Talent(
    "Primal Gore",
    "ability_druid_primaltenacity",
    [
      "Your Shred and Claw abilities increase the damage of your bleed effects on the target by ",
      "% for 12 sec.",
    ],
    2,
    [[15, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
];

export default tier3;
