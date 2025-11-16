import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { _obj } from "@/constants/obj";
import { mapAxios } from "@/service/baseAxios";
import { _map } from "@/constants/map";

const { url, type, response, method } = _map.getAddress;

interface TResponse {
location:{
    x:number,
    y:number,
}
status:string
}

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useGetLocation = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<TResponse> =>
      CustomRequest({ url, method, data, axiosInstance: mapAxios,
 }),
  });

export type { TCreateType, TCreateRes };
export { useGetLocation };
