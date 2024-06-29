export interface TableRowData {
  _id: string;[index: string]: any;
}

export interface TestData {
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

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  width?: number;
  renderFunc?: (value:string|number,record:any)=>React.ReactNode;
}

export type Keys = keyof TestData;

export type SortDirection = "asc" | "desc" | "none";