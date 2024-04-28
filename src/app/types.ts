import { TestData } from "./components/Table/types";

export type SearchEnum = "sort" | "dateRange" | "currentPage" | 'size';
export interface Params { slug: string };
export type SearchParams = {
    [key in SearchEnum]: string | string[] | undefined;
};

export interface PageParams {
    params: Params
    searchParams: SearchParams
}

export interface StatisticsResponse { items: TestData[], size: number, currentPage: number }