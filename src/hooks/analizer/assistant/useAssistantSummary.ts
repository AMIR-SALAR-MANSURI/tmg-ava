import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { analizer } from "@/service/baseAxios";
import { _analizer } from "@/constants/analizer";

const { url, type, response, method } = _analizer.summary;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useAssistantSummary = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<TCreateRes> =>
      CustomRequest({
        url,
        method,
        data,
        axiosInstance: analizer,
      }),
  });

export type { TCreateType, TCreateRes };
export { useAssistantSummary };
