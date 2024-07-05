import { SortDirection } from "../../types";

function getNextDirectionKey(
  currentDirection: SortDirection,
  sortFiledName: string
): string {
  switch (currentDirection) {
    case "asc":
      return "";
    case "desc":
      return `asc,${sortFiledName}`;
    default:
      return `desc,${sortFiledName}`;
  }
}

export default getNextDirectionKey;
