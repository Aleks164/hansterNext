import React from "react";

import { Column, TableRowData } from "./types";
import { SearchParams, TableDataResponse } from "@/app/types";
import styles from "./styles.module.css";

interface Props {
  columns: Column[];
  children?: React.ReactNode;
  tableData: TableDataResponse<TableRowData> | undefined;
}

async function Table({ columns, children, tableData }: Props) {
  return (
    <div className={styles.table_wrapper}>
      <div className={styles.table_scroll_container}>
        <table>
          {children}
          <tbody>
            {tableData?.items.map((item) => (
              <tr key={item._id}>
                {columns.map(({ dataIndex, key }) => (
                  <td key={key}>{item[dataIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
