"use client";

import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import { Column } from "./types";
import SortButton from "./SortButton";

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
              <span className="headerTitle">{column.title}</span>
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
