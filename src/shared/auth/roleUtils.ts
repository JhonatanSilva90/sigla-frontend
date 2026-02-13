import { Role } from "./roles";

export function allowedTargetsForCreator(creator: Role): Role[] {
  switch (creator) {
    case "SECRETARY":
      return [
        "COORDINATOR",
        "ANALYST",
        "ADMINISTRATIVE",
        "TECHNICAL_RESPONSIBLE",
      ];

    case "COORDINATOR":
      return ["ANALYST", "ADMINISTRATIVE", "TECHNICAL_RESPONSIBLE"];

    case "ANALYST":
    case "ADMINISTRATIVE":
      return ["ANALYST", "ADMINISTRATIVE", "TECHNICAL_RESPONSIBLE"];

    case "TECHNICAL_RESPONSIBLE":
    default:
      return [];
  }
}

export function canCreate(creator: Role, target: Role) {
  return allowedTargetsForCreator(creator).includes(target);
}
