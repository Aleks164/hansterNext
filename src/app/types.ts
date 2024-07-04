export type SearchEnum = "sort" | "dateRange" | "currentPage" | "size";
export interface Params {
  slug: string;
}
export type SearchParams = {
  sort?: string;
  dateRange?: string;
  currentPage?: string;
  size?: string;
  feedbackId?: string;
};

export interface PageParams {
  params: Params;
  searchParams: SearchParams;
}

export interface TableDataResponse<T> {
  items: T[];
  size: number;
  currentPage: number;
}

export interface Feedback {
  id: number;
  description: string;
  name: string;
  date: string;
  rating: number;
}
