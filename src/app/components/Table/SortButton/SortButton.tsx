"use client";

import { SortDirection } from "../types";
import styles from "./styles.module.css";

interface Props {
  sortParams: string | null;
  columnKey: string;
  children?: React.ReactNode;
  onChange: (key: string, currentDirection: string) => void;
}

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
function SortButton({ sortParams, children, columnKey, onChange }: Props) {
  const [direction, sortColumKey] = sortParams?.split(",") || [];

  const currentDirection =
    columnKey === sortColumKey && (direction === "asc" || direction === "desc")
      ? direction
      : "none";
  const currentIcon =
    currentDirection === "asc" ? "↓" : currentDirection === "desc" ? "↑" : "↕";

  return (
    <button
      className={
        styles.sort_button +
        (currentDirection === "none" ? "" : " " + styles.active_box)
      }
      onClick={() =>
        onChange("sort", getNextDirectionKey(currentDirection, columnKey))
      }
    >
      {children}
      <span
        className={currentDirection === "none" ? undefined : styles.active_row}
      >
        {currentIcon}
      </span>
    </button>
  );
}

export default SortButton;
