import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Inspired Prayer",
    "spell_holy_impholyconcentration",
    ["Reduces the Mana cost of your Prayer of Healing spell by ", "%."],
    2,
    [[10, 20]],
    [{ x: 4, y: 0 }],
    [{ x: null, y: null }],
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
