import { NewTalent, Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Elemental Focus",
    "spell_shadow_manaburn",
    [
      "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
    ],
    1,
    [[]],
    null,
    [{ x: 3, y: 0 }],
    null,
    null,
    null,
    null,
    ["D1"],
  ),
  new Talent(
    "Reverberation",
    "spell_frost_frostward",
    ["Reduces the cooldown of your Shock spells by ", " sec."],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
  ),
  new Talent(
    "Call of Thunder",
    "spell_nature_callstorm",
    [
      "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D3"],
  ),
  new NewTalent({
    name: "Unrelenting Storm",
    icon: "spell_nature_unrelentingstorm",
    description: [
      "Regenerate mana equal to ",
      "% of your Intellect every 5 sec, even while casting.",
    ],
    valueIteration: [[4, 7, 10]],
    maxValue: 3,
    changed: {
      isNew: true,
    },
  }),
];

export default tier3;
