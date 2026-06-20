import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Fingers of Frost",
    "ability_mage_wintersgrasp",
    [
      "Gives your Chill effects a ",
      "% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec.",
    ],
    5,
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
  null,
  new Talent(
    "Winter's Chill",
    "spell_frost_chillingblast",
    [
      "Gives your Frost spells a ",
      "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2% and critical strike damage by 4%. This effect stacks up to 5 times and lasts 15 sec.",
    ],
    5,
    [[20, 40, 60, 80, 100]],
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
