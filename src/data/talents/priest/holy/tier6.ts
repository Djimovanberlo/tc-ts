import { NewTalent, Talent } from "../../Classes";

const tier6 = [
  new NewTalent({
    name: "Blessed Hope",
    icon: "spell_holy_impholyconcentration",
    description: [
      "Critical strikes from your Heal and Greater Heal also heal up to two party members near your target for ",
      "% of the amount healed, causing no additional threat.",
    ],
    maxValue: 2,
    valueIteration: [[5, 10]],
    changed: { isNew: true },
  }),
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
