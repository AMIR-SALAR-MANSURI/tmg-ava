import { _analizer } from "@/constants/analizer";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { url, type, response, method } = _analizer.economic;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useAssistanceEconomicReco = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<TCreateRes> =>
      CustomRequest({
        url,
        method,
        data,
        axiosInstance: analizer,
      }),
  });

export { useAssistanceEconomicReco };
export type { TCreateRes, TCreateType };
