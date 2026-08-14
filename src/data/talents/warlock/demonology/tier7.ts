import { NewTalent, Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Soul Link",
    "spell_shadow_gathershadows",
    [
      "While active, 30% of all damage taken by the Warlock is transferred to the active demon. In addition, both the Warlock and the demon cause 3% more damage. Active as long as a demon is active.",
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    "20% of base mana",
    "100 yd range",
    "Instant",
  ),
  new NewTalent({
    name: "Master Conjurer",
    icon: "spell_shadow_sealofkings",
    description: [
      "Increases the bonus Fire damage from Firestone by ",
      "% and increases the amount of damage absorbed by your Spellstone by ",
      "%. In addition, your Firestone and Spellstone increase your hit chance while equipped by ",
      "%.",
    ],
    maxValue: 2,
    valueIteration: [
      [15, 30],
      [15, 30],
      [2, 4],
    ],
    changed: { isNew: true },
  }),
  null,
];

export default tier7;
