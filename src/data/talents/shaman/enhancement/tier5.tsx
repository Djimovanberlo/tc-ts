import React from "react";
import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Improved Weapon Totems",
    "spell_fire_enchantweapon",
    [
      "Causes your Windfury Totem to also increase melee attack speed by ",
      "% and your Flametongue Totem to increase spell damage by ",
      "%.",
    ],
    2,
    [
      [2, 4],
      [2, 4],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false },
  ),
  new Talent(
    "Elemental Weapons",
    "spell_fire_flametounge",
    [
      <>Increases the melee attack power bonus of your Rockbiter Weapon by </>,
      <>%, your Windfury Weapon effect by </>,
      <>
        % and increases the damage caused by your Flametongue Weapon and
        Frostbrand Weapon by{" "}
      </>,
      <>
        %.
        <br />
        <br />
        In addition, increases your spell damage and healing by{" "}
      </>,
      <>% of your attack power.</>,
    ],
    3,
    [
      [7, 14, 20],
      [13, 27, 40],
      [5, 10, 15],
      [10, 20, 30],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isChanged: true, isMoved: false, isNew: false },
  ),
  new Talent(
    "Unleash Enhancement",
    "spell_nature_elementalprecision_1",
    [
      <>
        Unleashes your current weapon enhancement.
        <br />
        <br />
        Rockbiter: Taunts the target to attack you and reduces your physical
        damage taken by 20% for 6 sec.
        <br />
        <br />
        Windfury: Deal 50% weapon damage as nature and increases the attack
        speed of your next 2 attacks by 20%.
        <br />
        <br />
        Flametongue: Deal 230 to 246 Fire damage.
        <br />
        <br />
        Frostbrand: Freeze the target in place for up to 4 sec.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    "Melee range",
    "8% of base mana",
    "Instant",
    "12 sec cooldown",
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  null,
];

export default tier5;
