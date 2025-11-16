import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { DefaultOptionType } from "antd/es/select";
import { z } from "zod";

const { url, method, response } = _analizer.GetLanguageModels;

export default function useGetLanguageModels() {
  const query = useQuery({
    queryKey: [url],
    queryFn: () =>
      customFetcher({
        url: url,
        axiosInstance: analizer,
        method,
      }),
    select: (data: z.infer<typeof response>) => data.data,
  });

  const options: DefaultOptionType[] | undefined = query.data?.map((item) => ({
    label: item.modelFarsiName,
    value: item.id,
  }));
  return { ...query, options };
}
