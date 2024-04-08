"use server";

import React from "react";
import getStatistics from "../../lib/getStatistics";
import { Column, TestData } from "./types";
import "./table.css";

interface Props {
  columns: Column[];
  children?: React.ReactNode;
}

async function Table({ columns, children }: Props) {
  const result = (await getStatistics()) as TestData[];
  return (
    <table>
      {children}
      <tbody>
        {result.map((item) => (
          <tr key={item._id}>
            {columns.map(({ dataIndex, key }) => (
              <td key={key}>{item[dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
