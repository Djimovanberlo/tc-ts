import { Talent } from "../../../data/talents/Classes";
import { ClassTalentType, GridDataType } from "../../../types/";

export const gridMaker = (spec: (Talent | null)[][]) => {
  const grid: Talent[][] | null[][] = [];
  for (let x = 0; x < 7; x++) {
    grid.push([]);
    for (let y = 0; y < 4; y++) {
      grid[x][y] = spec[x][y];
    }
  }
  return grid;
};

export const talentCalcMaker = (classTalent: ClassTalentType) => {
  const talentTrees = [];
  for (let i = 0; i < 3; i++) {
    talentTrees.push(gridMaker(classTalent[i]));
  }
  return talentTrees;
};

export const requiresTalentChecker = (
  talentData: any,
  x: number,
  y: number
) => {
  if (
    talentData[x][y].requires[0].x != null &&
    talentData[x][y].requires[0].y != null
  ) {
    const requiresX = talentData[x][y].requires[0].x;
    const requiresY = talentData[x][y].requires[0].y;
    const requiresTalent = talentData[requiresX][requiresY];

    if (requiresTalent.value === requiresTalent.maxValue) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const requiredTalentChecker = (
  talentData: any,
  x: number,
  y: number
) => {
  if (
    talentData[x][y].required[0].x !== null &&
    talentData[x][y].required[0].y !== null
  ) {
    const requiredX = talentData[x][y].required[0].x;
    const requiredY = talentData[x][y].required[0].y;
    const requiredTalent = talentData[requiredX][requiredY];
    if (requiredTalent.value === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const requiredPointsChecker = (pointsPerTree: number, x: number) => {
  if (x * 5 <= pointsPerTree) {
    return true;
  } else {
    return false;
  }
};

export const enabledChecker = (
  talentData: any,
  x: number,
  y: number,
  pointsPerTree: number
) => {
  if (talentData[x][y].value === talentData[x][y].maxValue) {
    return "yellow";
  } else if (
    requiresTalentChecker(talentData, x, y) &&
    requiredPointsChecker(pointsPerTree, x)
  ) {
    return "green";
  } else {
    return "grey";
  }
};

export const maxValueChecker = (talentData: any) => {
  console.log("W");
};
