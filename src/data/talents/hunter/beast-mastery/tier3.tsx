import React from "react";
import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Pathfinding",
    "ability_mount_jungletiger",
    [
      "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ",
      "% and increases the outdoor movement speed of your pets by ",
      "%.",
    ],
    2,
    [
      [3, 6],
      [15, 30],
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
    "Fervor",
    "ability_druid_predatoryinstincts",
    ["Instantly restores 50 Focus to your pet."],
    1,
    [[]],
    null,
    null,
    "Instant",
    "30 sec cooldown",
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  new Talent(
    "Unleashed Fury",
    "ability_bullrush",
    ["Increases the damage done by your pets by ", "%."],
    5,
    [[4, 8, 12, 16, 20]],
  ),
  null,
];

export default tier3;
