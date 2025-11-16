import { ReactNode, useEffect, useState } from "react";

export type Props = {
  page?: number;
  pageSize?: number;
  disabled?: boolean;
  length?: number;
};

type ShowTotal = (total: number, range: [number, number]) => ReactNode;

export default function usePagination(props?: Props) {
  const [page, setPage] = useState(props?.page || 0);

  const [pageSize, setPageSize] = useState(props?.pageSize || 10);

  const onChange = (page: number, pageSize: number) => {
    if (page >= 0) {
      setPage(page);
    }
    setPageSize(pageSize);
  };

  const showTotal: ShowTotal = (total, range) =>
    `${range[0]} - ${range[1]} از ${total} شماره`;

  useEffect(() => {
    if (props?.length == 0) {
      onChange(page - 1, pageSize);
    }
  }, [page, pageSize, props?.length]);

  return {
    current: page,
    pageSize,
    onChange,
    disabled: props?.disabled || false,
    showSizeChanger: true,
    showTotal,
  };
}
