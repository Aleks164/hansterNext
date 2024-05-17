import SortButton from "../SortButton";
import styles from "./styles.module.css";
import { Column } from "../types";
import { SearchParams } from "@/app/types";

interface Props {
  columns: Column[];
  searchParams: SearchParams;
}

function TableHeader({ columns, searchParams }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>
            <div>
              <span className={styles.header_title}>{column.title}</span>
              <SortButton
                columnKey={column.key}
                sortParams={searchParams.sort}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
