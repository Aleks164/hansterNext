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
  return (
    <div>
      <button disabled={currentPage <= 1} onClick={() => {}}>
        <span>U+27A4</span>
      </button>
      <span>{currentPage}</span>
      <button disabled={currentPage >= maxPage} onClick={() => {}}>
        <span>U+27A4</span>
      </button>
      <select name="page" value={currentListSize}>
        {LIST_SIZES.map((size) => (
          <option value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
}
