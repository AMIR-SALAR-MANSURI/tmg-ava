import { _analizer } from "@/constants/analizer";
import { queryClient } from "@/libs/queryClient";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { method, url } = _analizer.DeleteTitle;

const useDeleteConserv = () =>
  useMutation({
    mutationFn: ({ uid }: { uid: string }) =>
      CustomRequest({
        url: url + uid + "/delete",
        method,
        axiosInstance: analizer,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [_analizer.GetConverList.url],
        exact: false,
      });
      await queryClient.removeQueries({
        queryKey: [_analizer.GetConver.url, null],
        exact: false,
      });
    },
  });

export { useDeleteConserv };
