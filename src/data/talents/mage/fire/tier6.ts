import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Pyromaniac",
    "spell_fire_burnout",
    [
      "Reduces the cast time of your Fire spells by ",
      " sec if 3 or more targets are taking Fire damage over time from your spells.",
    ],
    2,
    [[0.25, 0.5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  null,
  new Talent(
    "Fire power",
    "spell_fire_immolation",
    ["Increases the damage fone by your Fire spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

export default tier6;
