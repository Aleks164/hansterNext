import React from "react";

import { Column, TableRowData } from "./types";
import { TableDataResponse } from "@/app/types";
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
                {columns.map(({ dataIndex, key, renderFunc }) => (
                  <td key={key}>
                    {renderFunc
                      ? renderFunc(item[dataIndex], item)
                      : item[dataIndex]}
                  </td>
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
