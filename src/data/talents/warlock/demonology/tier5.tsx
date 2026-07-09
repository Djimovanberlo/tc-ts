import React from "react";
import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Unholy Frenzy",
    "ability_creature_disease_05",
    [
      "Increases the damage done by your active demon by 100%, but it loses 50% of its total health over 10 sec.",
    ],
    1,
    [[]],
    null,
    null,
    "8% of base mana",
    null,
    "1.5 sec cast",
    "3 min cooldown",
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    },
  ),
  new Talent(
    "Demonic Sacrifice",
    "spell_shadow_psychicscream",
    [
      <>
        Sacrifices your demon to get an effect that lasts 30 min. Any demon
        summoned cancels the effect. <br />
        <br /> Imp: increases your Fire damage by 15%. <br />
        <br /> Void Walker: Restores 3% of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases your Shadow damage 15%. <br />
        <br />
        Felhunter: Restores 2% of total Mana every 4 sec.
      </>,
    ],
    1,
    [[]],
    null,
    [{ x: 6, y: 1 }],
    "100 yd range",
    null,
    "Instant",
    null,
    ["D2"],
  ),
  null,
  new Talent(
    "Fel Protection",
    "spell_shadow_demonictactics",
    [
      "Increases the armor rating of your active demon by ",
      "% and reduces area of effect damage taken by your active demon ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    },
  ),
];

export default tier5;
