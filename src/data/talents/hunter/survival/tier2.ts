import { NewTalent, Talent } from "../../Classes";

export default [
  new Talent(
    "Entrapment",
    "spell_nature_stranglevines",
    [
      "Gives your Immolation Trap, Frost trap and Explosive Trap a ",
      "% chance to entrap the target, preventing them from moving for 5 sec.",
    ],
    3,
    [[8, 16, 25]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    },
  ),
  new NewTalent({
    name: "Savage Strikes",
    icon: "ability_racial_bloodrage",
    description: [
      "Increases the critical strike chance of Raptor Strike and Mongoose Bite by ",
      "%.",
    ],
    maxValue: 2,
    valueIteration: [[10, 20]],
    requiring: [{ x: 2, y: 1 }],
    arrows: ["D1"],
  }),
  new Talent(
    "Improved Wing Clip",
    "ability_rogue_trip",
    ["Gives your Wing Clip a ", "% to immobilize the target for 5 sec."],
    3,
    [[7, 14, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    },
  ),
  null,
];
