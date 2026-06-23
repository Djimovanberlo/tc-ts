import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Improved Berserker Rage",
    "spell_nature_ancestralguardian",
    ["Causes your Berserker Rage to generate ", " rage when used."],
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
    },
  ),
  new Talent(
    "Death Wish",
    "spell_shadow_deathpact",
    [
      "When activated, increases your damage done by 20% and makes you immune to fear effects, but reduces your armor and resistances by 20% for 30 sec.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    "10 Rage",
    null,
    "Instant cast",
    "3 min cooldown",
    ["D2"],
  ),
  null,
  new Talent(
    "Improved Intercept",
    "ability_rogue_sprint",
    ["Reduces the cooldown of your intercept by ", " sec."],
    2,
    [[5, 10]],
  ),
  null,
];

export default tier5;
