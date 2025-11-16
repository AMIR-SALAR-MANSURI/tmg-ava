import { _face } from "@/constants/face";
import { _map } from "@/constants/map";
import { mapAxios } from "@/service/baseAxios";
import customFetcher from "@/service/CustomRequest";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const { url, method } = _face.status;

export default function useServiceStatus() {
    
  const query = useQuery({
    queryKey: [url],
    queryFn: () =>
      customFetcher({
       url,
        method,
      }),

  });

  return { ...query };
}