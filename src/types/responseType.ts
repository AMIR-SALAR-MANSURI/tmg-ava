export interface ResponseType<T = undefined> {
  errors: { code: number; message: string }[];
  responseMessage: string;
  result: T | undefined;
  success: boolean;
  message: string;
  data: T | undefined;
  isSuccess: boolean;
}

export interface PaginationType {
  page: number;
  size: number;
}

export type TPaginateResponse<T> = {
  items: T;
  totalItems: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
};

export type Response500Type = {
  message: string;
  detail: string;
  status: boolean;
  code: number;
  data: null;
};
