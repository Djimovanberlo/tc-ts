import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Blessed Seals",
    "spell_holy_healingaura",
    [
      "While your Seal of Light is active, your Flash of Light and Holy Light also heal the target for ",
      "% of the amount healed. While Seal of Wisdom is active, your Flash of Light and Holy Light also grant mana equal to ",
      "% of the amount healed.",
    ],
    3,
    [
      [2, 4, 6],
      [1, 2, 3],
    ],
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
    "Holy Power",
    "spell_holy_power",
    [
      "Increases the critical effect chance of your Holy spells by ",
      "% and increases your holy spell damage by ",
      "%.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [2, 4, 6, 8, 10],
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
