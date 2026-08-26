import { NewTalent, Talent } from "../../Classes";

export default [
  new Talent(
    "Trap Mastery",
    "spell_nature_timestop",
    [
      "Increases the duration of your Freezing and Frost traps by ",
      "% and the damage of your Explosive and Immolations traps by ",
      "%. In addition, reduces the chance your traps are resisted by ",
      "%.",
    ],
    2,
    [
      [15, 30],
      [15, 30],
      [5, 10],
    ],
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
    },
  ),
  new NewTalent({
    name: "Primal Instincts",
    icon: "spell_nature_unleashedrage",
    description: [
      "Gives your Raptor Strike and Mongoose Bite a ",
      "% chance to increase the damage done by your Arcane, Fire and Nature spells by 25% for 10 sec.",
    ],
    maxValue: 2,
    valueIteration: [[25, 50]],
    required: [{ x: 1, y: 1 }],
    cooldown: "30 sec cooldown",
    castTime: "Instant",
    changed: {
      isNew: true,
    },
  }),
  new Talent(
    "Deterrence",
    "ability_whirlwind",
    ["When activaed, increases dodge and parry chance by 25% for 10 sec."],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    "Instant",
    "5 min cooldown",
    ["D2"],
  ),
  new Talent(
    "Survivalist",
    "spell_shadow_twilight",
    ["Increases total health by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
  ),
];
