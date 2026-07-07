import { NewTalent, Talent } from "../../Classes";

const tier5 = [
  new NewTalent({
    name: "Dual Wield Mastery",
    icon: "spell_holy_blessingofstrength",
    description: ["Increases the hit chance of your off-hand weapon by ", "%."],
    maxValue: 3,
    valueIteration: [[2, 4, 6]],
    required: [{ x: 3, y: 0 }],
    changed: { isNew: true },
  }),
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
