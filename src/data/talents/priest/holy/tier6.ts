import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Test of Faith",
    "spell_holy_impholyconcentration",
    [
      "Increases your damage and healing on targets at or below 50% health by ",
      "%.",
    ],
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
      isNew: true,
      isChanged: false,
      isMoved: false,
    },
  ),
  null,
  new Talent(
    "Spiritual Healing",
    "spell_nature_moonglow",
    [
      "Increases the amount healed by your healing spells and increases the damage of your Holy spells by ",
      "%.",
    ],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false },
  ),
  null,
];

export default tier6;
