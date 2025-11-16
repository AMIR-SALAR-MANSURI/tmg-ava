import { PaginationType } from "@/types/responseType";

interface Props<T> {
  keyName?: string;
  totalCount?: number;
  data?: T[];
  pageData?: PaginationType;
}

export function addIndexToData<T = undefined>({
  data: dataList,
  keyName = "row",
  pageData,
  totalCount,
}: Props<T>) {
  if (dataList) {
    const pageNumber = pageData?.page || 1;
    const pageSize = pageData?.size || 10;
    const startIndex = (pageNumber - 1) * pageSize + 1;

    const data = dataList.map((item: T, index: number) => {
      return {
        ...item,
        [keyName]: startIndex + index,
      };
    });

    return data;
  }

  return [];
}
