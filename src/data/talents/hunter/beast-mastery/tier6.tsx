import { Talent } from "../../Classes";

export default [
  new Talent(
    "Ferocious Inspiration",
    "ability_hunter_animalhandler",
    [
      "When your pet scores a critical hit, increases the movement speed of all party members by ",
      "% and increases the damage dealt by all pets and summons by ",
      "% for 10 sec.",
    ],
    2,
    [
      [4, 8],
      [4, 8],
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
    "Frenzy",
    "inv_misc_monsterclaw_03",
    [
      "Gives your pet a ",
      "% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.",
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 3, y: 2 }],
  ),
  null,
];
