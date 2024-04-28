"use server";

import React from "react";
import getStatistics from "../../lib/getStatistics";
import { Column, TestData } from "./types";
import { SearchParams, StatisticsResponse } from "@/app/types";
import "./styles.module.css";

interface Props {
  columns: Column[];
  children?: React.ReactNode;
  searchParams: SearchParams;
}

async function Table({ columns, children, searchParams }: Props) {
  const result = await getStatistics(searchParams);
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table>
          {children}
          <tbody>
            {result?.items.map((item) => (
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
