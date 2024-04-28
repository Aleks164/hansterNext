"use server";

import React from "react";
import getStatistics from "../../lib/getStatistics";
import { Column, TableRowData, TestData } from "./types";
import { SearchParams, TableDataResponse } from "@/app/types";
import "./styles.module.css";

interface Props {
  columns: Column[];
  children?: React.ReactNode;
  searchParams: SearchParams;
  tableData: TableDataResponse<TableRowData> | undefined;
}

async function Table({ columns, children, searchParams, tableData }: Props) {
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
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
