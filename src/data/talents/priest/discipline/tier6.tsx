import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Force of Will",
    "spell_nature_slowingtotem",
    [
      "Increases the critical strike chance of your offensive spells by ",
      "% and increases critical strike damage of your offensive spells by ",
      "%.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [20, 40, 60, 80, 100],
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
  null,
];

export default tier6;
