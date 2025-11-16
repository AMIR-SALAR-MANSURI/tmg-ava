import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const { url, method, response } = _analizer.GetConverList;

export default function useGetConversationList() {
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

  return { ...query };
}
