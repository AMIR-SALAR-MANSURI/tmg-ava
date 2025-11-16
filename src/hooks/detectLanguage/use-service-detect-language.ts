import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { _obj } from "@/constants/obj";
import { _plaque } from "@/constants/plaque";
import { _detectLanguage } from "@/constants/detecLanguage";

const { url, type, response, method } = _detectLanguage.create;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useServiceDetectLanguage = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<ResponseType> =>
      CustomRequest({
        url,
        method,
        data,
        notify: true,
      }),
  });

export type { TCreateType, TCreateRes };
export { useServiceDetectLanguage };
