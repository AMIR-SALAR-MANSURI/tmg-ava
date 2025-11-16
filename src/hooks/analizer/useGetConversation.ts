import { _analizer } from "@/constants/analizer";
import { _map } from "@/constants/map";
import { analizer, mapAxios } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const { url, method, response } = _analizer.GetConver;

export type GetConversationResponse = z.infer<typeof response>;

export default function useGetConversation({ uid }: { uid: string }) {
  const query = useQuery({
    queryKey: [url, uid],
    queryFn: (): Promise<GetConversationResponse> =>
      customFetcher({
        url: url + uid,
        axiosInstance: analizer,
        method,
      }),
    enabled: z.string().uuid().safeParse(uid).success,
    select: (data) => data.data,
  });

  return { ...query };
}
