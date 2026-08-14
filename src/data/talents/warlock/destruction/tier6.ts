import { NewTalent, Talent } from "../../Classes";

const tier6 = [
  new NewTalent({
    name: "Improved Soul Fire",
    icon: "spell_fire_fireball02",
    description: [
      "Critical strikes from your damaging spells have a ",
      "% chance to reduce the cooldown of your Soul Fire by 2 sec and increase the damage of your next Soul Fire by 5%. This effect stacks up to 10 times.",
    ],
    maxValue: 2,
    valueIteration: [[50, 100]],
    changed: { isNew: true },
  }),
  null,
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
