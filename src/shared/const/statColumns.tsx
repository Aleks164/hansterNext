import { Column } from "../ui/Table/types";
import ProductImage from "./FotoCell";

const statColumns: Column[] = [
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
    renderFunc: (id) => <ProductImage id={id as number} />,
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

export default statColumns;
