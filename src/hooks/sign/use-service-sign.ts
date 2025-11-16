import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { _obj } from "@/constants/obj";
import { _plaque } from "@/constants/plaque";
import { _sign } from "@/constants/sign";

const { url, type, response, method } = _sign.create;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useServiceSign = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<ResponseType> =>
      CustomRequest({ url, method, data ,  headers: { "Content-Type": "multipart/form-data" },notify:true
 }),
  });

export type { TCreateType, TCreateRes };
export { useServiceSign };
