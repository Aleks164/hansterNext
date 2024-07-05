import Link from "next/link";
import styles from "./styles.module.css";
import getNextDirectionKey from "./lib/getNextDirectionKey";
import { SearchParams } from "@/app/types";

interface Props {
  sortParams?: string;
  sortFiledName: string;
  sortKey: keyof SearchParams;
  children?: React.ReactNode;
}

function SortButton({ sortParams, children, sortFiledName, sortKey }: Props) {
  const [direction, sortColumKey] = sortParams?.split(",") || [];

  const currentDirection =
    sortFiledName === sortColumKey &&
    (direction === "asc" || direction === "desc")
      ? direction
      : "none";

  const currentIcon =
    currentDirection === "asc" ? "↓" : currentDirection === "desc" ? "↑" : "↕";

  return (
    <Link
      href={{
        query: {
          [sortKey]: getNextDirectionKey(currentDirection, sortFiledName),
        },
      }}
    >
      <button
        className={
          styles.sort_button +
          (currentDirection === "none" ? "" : " " + styles.active_box)
        }
      >
        {children}
        <span
          className={
            currentDirection === "none" ? undefined : styles.active_row
          }
        >
          {currentIcon}
        </span>
      </button>
    </Link>
  );
}

export default SortButton;
