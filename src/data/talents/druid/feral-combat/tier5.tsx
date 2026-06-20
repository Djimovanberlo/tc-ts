import React from "react";
import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Savage Fury",
    "ability_druid_ravage",
    [
      "Increases the damage caused by your Claw, Rake, Maul and Swipe abilites by ",
      "%.",
    ],
    2,
    [[10, 20]],
  ),
  null,
  new Talent(
    "Adaptive instincts",
    "ability_druid_mastershapeshifter",
    [
      <>
        When activated, Grants you 20% spell damage and healing when in caster
        form, 30% increased health when in Bear Form or Dire Bear Form, or 50%
        energy regeneration when in Cat Form. Lasts 15 sec.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "5 min cooldown",
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    },
  ),
  null,
];

export default tier5;
