import { NewTalent, Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Elemental Impact",
    "spell_nature_lightningoverload",
    [
      "Your criticals from direct damage spells have a ",
      "% chance to activate Elemental Focus.",
    ],
    3,
    [[15, 30, 45]],
    [{ x: 2, y: 0 }],
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
  new Talent(
    "Eye of the Storm",
    "spell_nature_eyeofthestorm",
    [
      "Gives you a ",
      "% chance to gain the focused casting effect for 6 sec after being the victim of a melee or ranged critical strike. The focused casting effect prevents you from losing casting time when taking damage.",
    ],
    3,
    [[33, 66, 100]],
  ),
  null,
  new NewTalent({
    name: "Unrelenting Storm",
    icon: "spell_nature_unrelentingstorm",
    description: [
      "Regenerate mana equal to ",
      "% of your Intellect every 5 sec, even while casting.",
    ],
    valueIteration: [[5, 10]],
    maxValue: 2,
    changed: {
      isNew: true,
    },
  }),
  new NewTalent({
    name: "Unrelenting Storm",
    icon: "spell_nature_unrelentingstorm",
    description: [
      "Regenerate mana equal to ",
      "% of your Intellect every 5 sec, even while casting.",
    ],
    valueIteration: [[5, 10]],
    maxValue: 2,
    changed: {
      isNew: true,
    },
  }),
];

export default tier4;
