"use client";

import { LIST_SIZES } from "./consts";
import styles from "./styles.module.css";
import "./styles.module.css";

interface Props {
  maxPage: number;
  currentPage: number;
  currentListSize: number;
  onChange: (key: string, currentDirection: string) => void;
}

export function Pagination({
  maxPage,
  currentPage,
  currentListSize,
  onChange,
}: Props) {
  const onChangePaginationSize = (newSize: string) => {
    if (newSize) onChange("size", newSize);
  };
  return (
    <div>
      <button disabled={currentPage <= 1} onClick={() => {}}>
        <span>{"<"}</span>
      </button>
      <span>{currentPage}</span>
      <button disabled={currentPage >= maxPage} onClick={() => {}}>
        <span>{">"}</span>
      </button>
      <select
        name="page"
        value={currentListSize}
        onChange={(e) => onChangePaginationSize(e.target.value)}
      >
        {LIST_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
