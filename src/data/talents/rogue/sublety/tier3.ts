import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Initiative",
    "spell_shadow_fumble",
    [
      "Gives you a ",
      "% chance to add an additional combo point to your target when using your Ambush, Garrote or Cheap Shot ability.",
    ],
    3,
    [[25, 50, 75]],
  ),
  new Talent(
    "Ghostly Strike",
    "spell_shadow_curse",
    [
      "A strike that deals 125% weapon damage and increases your chance to dodge by 15% and causes you to ignore 15% of your target's armor for 7 sec. Awards 1 combo point.",
    ],
    1,
    [[]],
    null,
    null,
    "40 Energy",
    "Melee Range",
    "Instant",
    "20 sec cooldown",
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    },
  ),
  new Talent(
    "Improved Ambush",
    "ability_rogue_ambush",
    ["Increases the critical strike chance of your Ambush ability by ", "%."],
    3,
    [[15, 30, 45]],
  ),
  new Talent(
    "Setup",
    "spell_nature_mirrorimage",
    [
      "Gives you a ",
      "% chance to add a combo point to your current target after a party member dodges an attack or fully resists a spell. This cannot occur more than once per second.",
    ],
    3,
    [[25, 50, 75]],
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
      isMoved: true,
    },
  ),
];

export default tier3;
