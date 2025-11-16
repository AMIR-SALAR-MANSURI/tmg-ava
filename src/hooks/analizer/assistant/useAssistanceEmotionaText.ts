import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { url, type, response, method } = _analizer.emotionalText;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useAssistanceEmotionaText = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<TCreateRes> =>
      CustomRequest({
        url,
        method,
        data,
        axiosInstance: analizer,
      }),
  });

export { useAssistanceEmotionaText };
export type { TCreateRes, TCreateType };
