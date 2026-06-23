import { Talent } from "../../Classes";

export default [
  new Talent(
    "Tenacity",
    "ability_hunter_ferociousinspiration",
    [
      " Critical strikes from your pet have ",
      " chance to reduce the cooldown of Fervor, Intimidation and Bestial Wrath abilities by 5 sec.",
    ],
    2,
    [["a", "an increased"]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isChanged: false, isNew: true, isMoved: false },
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
