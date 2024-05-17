import Link from "next/link";
import styles from "./styles.module.css";
import getNextDirectionKey from "./lib/getNextDirectionKey";

interface Props {
  sortParams?: string;
  columnKey: string;
  children?: React.ReactNode;
}

function SortButton({ sortParams, children, columnKey }: Props) {
  const [direction, sortColumKey] = sortParams?.split(",") || [];

  const currentDirection =
    columnKey === sortColumKey && (direction === "asc" || direction === "desc")
      ? direction
      : "none";

  const currentIcon =
    currentDirection === "asc" ? "↓" : currentDirection === "desc" ? "↑" : "↕";

  return (
    <Link
      href={{
        query: { sort: getNextDirectionKey(currentDirection, columnKey) },
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
