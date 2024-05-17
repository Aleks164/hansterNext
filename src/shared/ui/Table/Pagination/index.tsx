"use client";

import Link from "next/link";
import { LIST_SIZES } from "../consts";
import styles from "./styles.module.css";

interface Props {
  maxPage: number;
  currentPage: number;
  currentListSize: number;
  onChange: (key: string, currentDirection: string) => void;
}

function Pagination({
  maxPage,
  currentPage,
  currentListSize,
  onChange,
}: Props) {
  const onChangePaginationSize = (newSize: string) => {
    if (newSize) onChange("size", newSize);
  };
  return (
    <div className={styles.pagination_container}>
      <Link
        href={{
          query: { page: currentPage - 1 },
        }}
      >
        <button disabled={currentPage <= 1}>
          <span>{"<"}</span>
        </button>
      </Link>
      <span>{currentPage}</span>
      <Link
        href={{
          query: { page: currentPage + 1 },
        }}
      >
        <button disabled={currentPage >= maxPage}>
          <span>{">"}</span>
        </button>
      </Link>
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

export default Pagination;
