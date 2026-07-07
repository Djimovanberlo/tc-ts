import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Unbound Rage",
    "ability_warrior_focusedrage",
    [
      "While Berserker Rage or Bloodrage is active, your movement speed is increased by ",
      "% and you heal for ",
      "% of your total health every 2 sec. These effects stack.",
    ],
    2,
    [
      [10, 20],
      [1, 2],
    ],
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
    "Flurry",
    "ability_ghoulfrenzy",
    [
      "Increases your attack speed by ",
      "% for your next 3 swings after dealing a melee critical strike.",
    ],
    5,
    [[10, 15, 20, 25, 30]],
    [{ x: 3, y: 2 }],
  ),
  null,
];

export default tier6;
