import { _map } from "@/constants/map";
import { mapAxios } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const { url, method, type } = _map.GetMapAddress;

export default function useGetAddress({lat,long}:{lat:number | undefined,long:number| undefined}) {
    const data : z.infer<typeof type>={
    latitude:lat,
    longitude:long
  }
  const query = useQuery({
    queryKey: [url,lat,long],
    queryFn: () =>
      customFetcher({
        url: url,
        data,
        axiosInstance: mapAxios,
        method,
      }),

  });

  return { ...query };
}