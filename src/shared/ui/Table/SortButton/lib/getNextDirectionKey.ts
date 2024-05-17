import { SortDirection } from "../../types";

function getNextDirectionKey(
    currentDirection: SortDirection,
    columnKey: string
): string {
    switch (currentDirection) {
        case "asc":
            return "";
        case "desc":
            return `asc,${columnKey}`;
        default:
            return `desc,${columnKey}`;
    }
}

export default getNextDirectionKey;