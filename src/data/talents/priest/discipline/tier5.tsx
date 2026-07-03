import { Talent } from "../../Classes";

const tier5 = [
  null,
  new Talent(
    "Mental Strength",
    "spell_nature_enchantarmor",
    ["Increases your maximum Mana by ", "%."],
    3,
    [[3, 6, 9]],
    null,
    [{ x: 5, y: 0 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isNew: false, isChanged: true, isMoved: false },
  ),
  new Talent(
    "Divine Spirit",
    "spell_holy_divinespirit",
    [
      "Holy power infuses the target, increasing their spirit by 17. And increases their healing and spell damage by 10% of their total spirit.",
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    "70 Mana",
    "30 yd range",
    "Instant",
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false },
  ),
  null,
];

export default tier5;
