import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Toxic Blades",
    "spell_nature_slowpoison",
    [
      "Causes your Eviscerate consume your Deadly Poison doses on the target, dealing ",
      " instant poison damage. One dose is consumed per combo point.",
    ],
    2,
    [["", "increased"]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false },
  ),
  new Talent(
    "Seal Fate",
    "spell_shadow_chilltouch",
    [
      "Your critical strikes from abilities that add combo points have a ",
      "% chance to add an additional combo point.",
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 4, y: 1 }],
  ),
  null,
  null,
];

export default tier6;
