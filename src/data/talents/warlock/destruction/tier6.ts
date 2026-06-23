import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Calamity",
    "ability_warlock_backdraft",
    [
      "Your Immolate spell has a ",
      "% chance to cause the target to take 10% increased initial damage from your Immolate. This effect stacks up to 5 times.",
    ],
    2,
    [[50, 100]],
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
    "Emberstorm",
    "spell_fire_selfdestruct",
    ["Increases the damage done by your Fire spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

export default tier6;
