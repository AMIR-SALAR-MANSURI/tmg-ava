import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { url, type, response, method } = _analizer.translate;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useAssistantTranslate = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<TCreateRes> =>
      CustomRequest({
        url,
        method,
        data,
        axiosInstance: analizer,
        notify: true,
      }),
  });

export { useAssistantTranslate };
export type { TCreateRes, TCreateType };
