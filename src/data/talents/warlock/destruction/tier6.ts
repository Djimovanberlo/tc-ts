import { NewTalent, Talent } from "../../Classes";

const tier6 = [
  null,
  new NewTalent({
    name: "Calamity",
    icon: "ability_warlock_backdraft",
    description: [
      "Increases the damage done by your direct Fire spells to targets afflicted by your Immolate by ",
      "%.",
    ],
    maxValue: 2,
    valueIteration: [[10, 20]],
    changed: { isNew: true },
    arrows: ["D1"],
    required: [{ x: 4, y: 1 }],
    requiring: [{ x: 6, y: 1 }],
  }),
  new Talent(
    "Emberstorm",
    "spell_fire_selfdestruct",
    ["Increases the damage done by your Fire spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

export default tier6;
