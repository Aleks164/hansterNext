"use client";

import { SortDirection } from "./types";

interface Props {
  direction: string | null;
  sortKey: string;
  children?: React.ReactNode;
  onChange: (key: string, currentDirection: SortDirection) => void;
}

function getNextDirection(currentDirection: SortDirection) {
  switch (currentDirection) {
    case "asc":
      return "none";
    case "desc":
      return "asc";
    default:
      return "desc";
  }
}

export function SortButton({ direction, children, sortKey, onChange }: Props) {
  const currentDirection =
    direction === "asc" || direction === "desc" ? direction : "none";
  const currentIcon =
    direction === "asc" ? "v" : direction === "desc" ? "^" : "-";
  return (
    <button
      onClick={() => onChange(sortKey, getNextDirection(currentDirection))}
    >
      {children}
      <span>{currentIcon}</span>
    </button>
  );
}
