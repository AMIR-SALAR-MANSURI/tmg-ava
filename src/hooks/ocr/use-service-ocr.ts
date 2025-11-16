import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";

const { url, type, response, method } = _ocr.create;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useServiceOcr = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<ResponseType> =>
      CustomRequest({ url, method, data }),
  });

export type { TCreateType, TCreateRes };
export { useServiceOcr };
