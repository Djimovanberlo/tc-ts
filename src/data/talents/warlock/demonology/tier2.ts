import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Improved Health Funnel",
    "spell_shadow_lifedrain",
    [
      "Increases the amount of Health transferred by your Health Funnel spell by ",
      "%. In addition, your summoned Demon deals ",
      "% more damage and takes ",
      "% less damage while under the effect of your Health Funnel.",
    ],
    2,
    [
      [10, 20],
      [10, 20],
      [10, 20],
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
    "Improved Void Walker",
    "spell_shadow_summonvoidwalker",
    [
      "Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ",
      "%.",
    ],
    3,
    [[10, 20, 30]],
  ),
  new Talent(
    "Fel Intellect",
    "spell_holy_magicalsentry",
    [
      "Increases the maximum Mana of your Imp, Succubus, Incubus, Void Walker and Felhunter by ",
      "% and increases your maximum mana by ",
      "%.",
    ],
    5,
    [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
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
    "Mana Feed",
    "spell_shadow_manafeed",
    [
      "When you gain mana from any source, your active demon gains ",
      "% of the mana you gain.",
    ],
    3,
    [[30, 60, 90]],
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
];

export default tier2;
