import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Wyvern Sting",
    "inv_spear_02",
    [
      "A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 6 sec. Only one Sting per Hunter can be active on the target at a time.",
    ],
    1,
    [[]],
    null,
    null,
    "115 Mana",
    "35 yd range",
    "Instant cast",
    "2 min cooldown",
    null,
    { isNew: false, isChanged: true, isMoved: false },
  ),
  null,
  null,
];
