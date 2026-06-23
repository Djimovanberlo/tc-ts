import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Fingers of Frost",
    "ability_mage_wintersgrasp",
    [
      "Gives your Chill effects a ",
      "% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec.",
    ],
    2,
    [[7, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  new Talent(
    "Ice Block",
    "spell_frost_frost",
    [
      "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move or cast spells.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      {
        x: 6,
        y: 1,
      },
    ],
    "15 Mana",
    null,
    "Instant",
    "5 min cooldown",
    ["D2"],
  ),
  new Talent(
    "Improved Cone of Cold",
    "spell_frost_glacier",
    ["Increases the damage done by your Cone of Cold spell by ", "%."],
    3,
    [[15, 30, 45]],
  ),
  null,
];

export default tier5;
