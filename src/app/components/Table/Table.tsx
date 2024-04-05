"use server";
import React from "react";
import getStatistics from "../../lib/getStatistics";
import "./table.css";

interface TestData {
  _id: string;
  supplierArticle: string;
  techSize: string;
  barcode: string;
  warehouseName: string;
  finishedPrice: number;
  nmId: number;
  subject: string;
  [index: string]: any;
}

interface Column {
  title: string;
  dataIndex: string;
  key: string;
  width?: number;
}

type Keys = keyof TestData;

const columns: Column[] = [
  {
    title: "Бар-код",
    dataIndex: "barcode",
    key: "barcode",
    width: 90,
  },
  {
    title: "Предмет",
    dataIndex: "subject",
    key: "subject",
    width: 90,
  },
  {
    title: "Склад",
    dataIndex: "warehouseName",
    key: "warehouseName",
    width: 80,
  },
  {
    title: "Артикул WB",
    dataIndex: "nmId",
    key: "nmId",
    width: 100,
  },
  {
    title: "Фото",
    dataIndex: "nmId",
    key: "photo",
    width: 50,
  },
  {
    title: "Рейтинг",
    dataIndex: "valuation",
    key: "valuation",
  },
  {
    title: "Артикул продавца",
    dataIndex: "supplierArticle",
    key: "supplierArticle",
  },

  {
    title: "Размер",
    dataIndex: "techSize",
    key: "techSize",
    width: 80,
  },
  {
    title: "Фактическая цена",
    dataIndex: "finishedPrice",
    key: "finishedPrice",
    width: 85,
  },
  {
    title: "Кол-во заказов",
    dataIndex: "orderQuantity",
    key: "orderQuantity",
    width: 85,
  },
  {
    title: "Кол-во продаж",
    dataIndex: "saleQuantity",
    key: "saleQuantity",
    width: 85,
  },
  {
    title: "Кол-во на складе",
    dataIndex: "quantity",
    key: "quantity",
    width: 85,
  },
];

async function Table() {
  const result = (await getStatistics()) as TestData[];
  const keys = Object.keys(result?.[0]) as Keys[];
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
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
      <div></div>
    </>
  );
}

export default Table;
