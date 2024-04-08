"use client";

import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import { Column } from "./types";
import { SortButton } from "./SortButton";

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
              {column.title}
              <SortButton
                sortKey={column.key}
                direction={searchParams.get(column.key)}
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
