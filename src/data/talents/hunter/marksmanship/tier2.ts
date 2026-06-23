import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Improved Hunter's Mark",
    "ability_hunter_snipershot",
    [
      "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by ",
      "%.",
    ],
    5,
    [[3, 6, 9, 12, 15]],
  ),
  new Talent(
    "Lethal Shots",
    "ability_searingarrow",
    ["Increases your critical strike chance with ranged weapons by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"],
  ),
  null,
];
