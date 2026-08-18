import { NewTalent, Talent } from "../../Classes";

const tier6 = [
  null,
  new Talent(
    "Vengeance",
    "ability_racial_avatar",
    [
      "Gives you a ",
      "% bonus to your physical and Holy damage and healing for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
    ],
    5,
    [[3, 6, 9, 12, 15]],
    [{ x: 2, y: 1 }],
  ),
  new NewTalent({
    name: "Sheath of Light",
    icon: "ability_paladin_sheathoflight",
    description: [
      "Increases your spell damage and healing by an amount equal to ",
      "% of your attack power and your critical healing spells heal the target for ",
      "% of the amount healed over 12 sec.",
    ],
    valueIteration: [
      [10, 20, 30],
      [20, 40, 60],
    ],
    maxValue: 3,
    changed: {
      isNew: true,
    },
  }),
  null,
];

export default tier6;
