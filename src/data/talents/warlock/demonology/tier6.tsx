import React from "react";
import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Master Demonologist",
    "spell_shadow_shadowpact",
    [
      <>
        Gives the Warlock and the summoned Demon an effect as long as the Demon
        is active.
        <br />
        <br />
        Imp: Reduces threat caused by{" "}
      </>,
      <>
        %. <br />
        <br />
        Void Walker: Reduces physical damage taken by{" "}
      </>,
      <>
        %.
        <br />
        <br />
        Succubus/Incubus: increases all damage caused by{" "}
      </>,
      <>
        %. <br />
        <br />
        Felhunter: Increases all resistances by{" "}
      </>,
      " per level.",
    ],
    5,
    [
      [4, 8, 12, 16, 20],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [0.2, 0.4, 0.6, 0.8, 1],
    ],
    [{ x: 3, y: 2 }],
  ),
  null,
];

export default tier6;
