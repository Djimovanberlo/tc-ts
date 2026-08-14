import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Master Totemic",
    "inv_relics_totemoflife",
    [
      "You gain ",
      "% additional effect from your totems that affect friendly targets.",
    ],
    2,
    [[25, 50]],
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
    "Purification",
    "spell_frost_wizardmark",
    [
      "Increases the effectiveness of your healing spells by ",
      "% and increases the damage of your nature spells by ",
      "%.",
    ],
    5,
    [
      [2, 4, 6, 8, 10],
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
