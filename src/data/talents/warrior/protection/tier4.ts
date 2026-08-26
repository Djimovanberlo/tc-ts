import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Improved Disarm",
    "ability_warrior_disarm",
    [
      "Increases the duration of your Disarm ability by ",
      " sec and reduces the duration of disarm effects on you by ",
      "%",
    ],
    3,
    [
      [1, 2, 3],
      [25, 50, 75],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false },
  ),
  new Talent(
    "Improved Taunt",
    "spell_nature_reincarnation",
    ["Reduces the cooldown of your Taunt ability by ", " sec."],
    2,
    [[1, 2]],
  ),
  null,
];

export default tier4;
