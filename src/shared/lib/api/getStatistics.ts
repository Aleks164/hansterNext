import mongoose, { PipelineStage } from "mongoose";
import connectToDB from "../connectToDB";
import { saleSchema } from "../models/sales";
import { SearchParams, TableDataResponse } from "@/app/types";
import { TestData } from "../../ui/Table/types";

const testData = [
  {
    _id: "65ee7e3d4bd208a91cc26200",
    supplierArticle: "ШК-23Т/черный,горчичный",
    techSize: "72-74",
    barcode: "2003155046181",
    warehouseName: "Краснодар",
    finishedPrice: 2314,
    nmId: 34163500,
    subject: "Шорты",
  },
  {
    _id: "65ee7e3d4bd208a91cc261cc",
    supplierArticle: "ФПОЛО-21П/темно-синий,хаки",
    techSize: "84-86",
    barcode: "2003155046327",
    warehouseName: "Казань",
    finishedPrice: -2819,
    nmId: 15603979,
    subject: "Джемперы",
  },
  {
    _id: "65ee7e3d4bd208a91cc261f5",
    supplierArticle: "ФПОЛО-1ПМ/васильковый",
    techSize: "56",
    barcode: "2004054227800",
    warehouseName: "Казань",
    finishedPrice: 1507,
    nmId: 35869098,
    subject: "Футболки-поло",
  },
  {
    _id: "65efcfbd4bd208a91cc29381",
    supplierArticle: "Ф-2041/бордовый",
    techSize: "80-82",
    barcode: "2004242566148",
    warehouseName: "Казань",
    finishedPrice: 1596,
    nmId: 34237654,
    subject: "Футболки",
  },
  {
    _id: "65efcfbd4bd208a91cc293a7",
    supplierArticle: "К-1181/бордовый",
    techSize: "64-66",
    barcode: "2004368264393",
    warehouseName: "Казань",
    finishedPrice: 7553,
    nmId: 70469153,
    subject: "Куртки",
  },
  {
    _id: "65ee7e3d4bd208a91cc261bf",
    supplierArticle: "ФПОЛО-21П/бордовый",
    techSize: "64-66",
    barcode: "2004368264744",
    warehouseName: "Екатеринбург - Испытателей 14г",
    finishedPrice: 2819,
    nmId: 35869787,
    subject: "Джемперы",
  },
  {
    _id: "65efcfbd4bd208a91cc293bf",
    supplierArticle: "Фполо-29/черный,красный",
    techSize: "72-74",
    barcode: "2004368264898",
    warehouseName: "Коледино",
    finishedPrice: 2477.29,
    nmId: 36667352,
    subject: "Джемперы",
  },
  {
    _id: "65efcfbd4bd208a91cc2938e",
    supplierArticle: "ФПОЛО-21П/красный",
    techSize: "60-62",
    barcode: "2004599382514",
    warehouseName: "Электросталь",
    finishedPrice: 2819,
    nmId: 36554410,
    subject: "Джемперы",
  },
  {
    _id: "65ee7e3d4bd208a91cc261b8",
    supplierArticle: "ФПОЛО-21П/красный",
    techSize: "68-70",
    barcode: "2004599382538",
    warehouseName: "Новосибирск",
    finishedPrice: 2785,
    nmId: 36554410,
    subject: "Джемперы",
  },
  {
    _id: "65efcfbd4bd208a91cc293b6",
    supplierArticle: "КВ-121/черный",
    techSize: "64-66",
    barcode: "2007196748066",
    warehouseName: "Коледино",
    finishedPrice: 6304,
    nmId: 73207320,
    subject: "Ветровки",
  },
  {
    _id: "65efcfbd4bd208a91cc29393",
    supplierArticle: "Ф-013/зеленый",
    techSize: "80-82",
    barcode: "2008169076445",
    warehouseName: "Тула",
    finishedPrice: 1383,
    nmId: 41595188,
    subject: "Футболки",
  },
  {
    _id: "65efcfbd4bd208a91cc29388",
    supplierArticle: "ФПЛ-31П/синий",
    techSize: "72-74",
    barcode: "2008526592076",
    warehouseName: "Казань",
    finishedPrice: 2399,
    nmId: 43801366,
    subject: "Лонгсливы",
  },
  {
    _id: "65ee7e3d4bd208a91cc261e6",
    supplierArticle: "КА-10122/хаки",
    techSize: "60-62",
    barcode: "2011879440604",
    warehouseName: "Тула",
    finishedPrice: 9608,
    nmId: 104273736,
    subject: "Куртки",
  },
  {
    _id: "65ee7e3d4bd208a91cc261f6",
    supplierArticle: "ШКС-25/синий,горчичный",
    techSize: "60-62",
    barcode: "2016872184388",
    warehouseName: "Электросталь",
    finishedPrice: 1304,
    nmId: 67477912,
    subject: "Шорты",
  },
  {
    _id: "65efcfbd4bd208a91cc293af",
    supplierArticle: "ФПОЛО-1ПМ/темно-синий,хаки",
    techSize: "64-66",
    barcode: "2018558003495",
    warehouseName: "Электросталь",
    finishedPrice: 1888,
    nmId: 67497196,
    subject: "Футболки-поло",
  },
  {
    _id: "65efcfbd4bd208a91cc2937c",
    supplierArticle: "ФПОЛО-1ПМ/темно-синий,хаки",
    techSize: "72-74",
    barcode: "2018558003518",
    warehouseName: "Краснодар",
    finishedPrice: 1860,
    nmId: 67497196,
    subject: "Футболки-поло",
  },
  {
    _id: "65efcfbd4bd208a91cc293be",
    supplierArticle: "ФПОЛО-1ПМ/светло-серый,оранжевый",
    techSize: "72-74",
    barcode: "2028242497066",
    warehouseName: "Тула",
    finishedPrice: 2110,
    nmId: 84344460,
    subject: "Футболки-поло",
  },
  {
    _id: "65efcfbd4bd208a91cc293c8",
    supplierArticle: "Ф-20417/хаки",
    techSize: "84-86",
    barcode: "2029128234119",
    warehouseName: "Тула",
    finishedPrice: -1607,
    nmId: 84321049,
    subject: "Футболки",
  },
  {
    _id: "65ee7e3d4bd208a91cc261ca",
    supplierArticle: "Ф-20410/оранжевый",
    techSize: "56",
    barcode: "2031409919530",
    warehouseName: "Казань",
    finishedPrice: 1441,
    nmId: 87663624,
    subject: "Футболки",
  },
  {
    _id: "65efcfbd4bd208a91cc29391",
    supplierArticle: "КА-2063/красный",
    techSize: "80-82",
    barcode: "2036856713816",
    warehouseName: "Тула",
    finishedPrice: 10792,
    nmId: 135745763,
    subject: "Куртки",
  },
  {
    _id: "65efcfbd4bd208a91cc293c7",
    supplierArticle: "КБ-012341/темно-синий",
    techSize: "52",
    barcode: "2036999303752",
    warehouseName: "Электросталь",
    finishedPrice: -2875,
    nmId: 139830172,
    subject: "Куртки",
  },
];

export default async function getStatistics(
  searchParams: SearchParams
): Promise<TableDataResponse<TestData> | undefined> {
  console.log(searchParams);
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const { sort, dateRange, currentPage, size } = searchParams;
  if (dateRange) {
  }
  // const Sales = mongoose.models.SupplierSales || mongoose.model('SupplierSales', saleSchema);
  try {
    // const connect = await connectToDB();
    const fromDate = "2024-03-10";
    const toDate = "2024-03-11";
    // const sales = await Sales.aggregate(getSaleDataByDateRange(fromDate, toDate)).exec();
    const sales = (await new Promise((resolve, reject) => {
      setTimeout(() => resolve(testData), 300);
    })) as TestData[];
    return {
      items: sales,
      size: sales.length || 1,
      currentPage: currentPage ? +currentPage : 1,
    };
  } catch (e) {
    console.log(e);
  }
}

function getSaleDataByDateRange(
  fromDate: string,
  toDate: string
): PipelineStage[] {
  return [
    {
      $match: {
        date: {
          $gte: new Date(fromDate),
          $lte: getNextDayDate(toDate),
        },
      },
    },
    {
      $project: {
        warehouseName: 1,
        nmId: 1,
        barcode: 1,
        subject: 1,
        techSize: 1,
        finishedPrice: 1,
        supplierArticle: 1,
      },
    },
    {
      $sort: {
        barcode: 1,
      },
    },
  ];
}

function getNextDayDate(date: string) {
  const toDateInDateFormat = new Date(date);
  return new Date(toDateInDateFormat.setDate(toDateInDateFormat.getDate() + 1));
}
