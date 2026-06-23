import { Talent } from "../../Classes";

const tier5 = [
  null,
  new Talent(
    "Divine Favor",
    "spell_holy_heal",
    [
      "When activated, gives your next Flash of Light, Holy Light or Holy Shock spell a 100% critical effect chance.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    "4% of base mana",
    null,
    "Instant",
    "2 min cooldown",
    ["D2"],
  ),
  new Talent(
    "Reprisal",
    "spell_holy_harmundeadaura",
    [
      "Your critical strikes from spells and attacks have a ",
      "% chance to reset the cooldown of your Exorcism and Holy Wrath and reduce their mana cost by 100%. This effect cannot occur more than once every 10 sec.",
    ],
    2,
    [[50, 100]],
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
  null,
  null,
];

export default tier5;
