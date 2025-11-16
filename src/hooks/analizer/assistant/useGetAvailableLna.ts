import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { DefaultOptionType } from "antd/es/select";
import { z } from "zod";

const { url, method, response } = _analizer.languges;

export default function useGetAvailableLna() {
  const query = useQuery({
    queryKey: [url],
    queryFn: () =>
      customFetcher({
        url,
        axiosInstance: analizer,
        method,
        notify: false,
      }),
    select: (data: z.infer<typeof response>) => data.data,
  });

  const options: DefaultOptionType[] | undefined = query.data?.map((item) => ({
    label: item.label,
    value: item.locale,
  }));

  return { ...query, options };
}
