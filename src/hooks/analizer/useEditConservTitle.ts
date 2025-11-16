import { _analizer } from "@/constants/analizer";
import { queryClient } from "@/libs/queryClient";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { method, type, url } = _analizer.EditTitle;

type TEditType = z.infer<typeof type>;

export default function useEditConservTitle() {
  return useMutation({
    mutationFn: (data: TEditType) =>
      CustomRequest({
        url: url + data.uid + "/title",
        method,
        data,
        axiosInstance: analizer,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [_analizer.GetConverList.url],
        exact: false,
      });
    },
  });
}

export type { TEditType };
export { useEditConservTitle };
