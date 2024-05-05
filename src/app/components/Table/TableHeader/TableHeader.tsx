"use client";

import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import SortButton from "../SortButton/SortButton";
import styles from "./styles.module.css";
import { Column } from "../types";

interface Props {
  columns: Column[];
}

function TableHeader({ columns }: Props) {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>
            <div>
              <span className={styles.header_title}>{column.title}</span>
              <SortButton
                columnKey={column.key}
                sortParams={searchParams.get("sort")}
                onChange={setSearchParams}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
