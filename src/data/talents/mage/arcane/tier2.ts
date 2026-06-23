import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Wand Specialization",
    "inv_wand_01",
    ["Increases your damage with wands by ", "%."],
    2,
    [[13, 25]],
  ),
  new Talent(
    "Magic Absorbtion",
    "spell_nature_astralrecalgroup",
    [
      "Increases all resistances by ",
      " per level and causes you to restore mana equal to ",
      "% mana after fully resisting spell damage. 1 sec cooldown.",
    ],
    2,
    [
      [0.3, 0.5],
      [3, 5],
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
  new Talent(
    "Arcane Concentration",
    "spell_shadow_manaburn",
    [
      "Gives you a ",
      "% chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.",
    ],
    5,
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

export default tier2;
