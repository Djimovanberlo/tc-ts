import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Serenity",
    "spell_holy_serendipity",
    [
      "Critical strikes from your direct damage spells and direct heals have a ",
      "% chance to heal a party member within 40 yards by 25% of the damage or healing done. Prioritizes party members with low health.",
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
  new Talent(
    "Devotion",
    "spell_holy_heroism",
    ["Increases your critical strike damage and healing by ", "%."],
    3,
    [[20, 40, 60]],
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
];

export default tier6;
