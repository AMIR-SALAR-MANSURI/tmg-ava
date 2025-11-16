import { _analizer } from "@/constants/analizer";
import { queryClient } from "@/libs/queryClient";
import { analizer } from "@/service/baseAxios";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { GetConversationResponse } from "./useGetConversation";

const { method, type, url, response } = _analizer.NewConversation;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;
interface Response {
  isSuccess: boolean;
  data: {
    id: string;
    title: string;
    removedOn: any;
    userId: string;
    messages: [
      {
        id: string;
        userInput: string;
        botResponse: string;
        createdAt: string;
      }
    ];
  };
}

const useNewConversation = () => {
  return useMutation({
    mutationFn: (data: TCreateType): Promise<Response> =>
      CustomRequest({ url, method, data, axiosInstance: analizer }),

    onMutate: async (newChat) => {
      const queryKey = [_analizer.GetConver.url, newChat.conversationId];

      await queryClient.cancelQueries({ queryKey, exact: false });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old?: GetConversationResponse) => {
        const loadingMessage = {
          id: "",
          createdAt: "",
          userInput: newChat.userInput,
          isLoading: true,
          botResponse: "loading",
        };

        if (!old?.data) {
          return {
            data: { messages: [loadingMessage] },
          } as GetConversationResponse;
        }

        return {
          ...old,
          data: {
            ...old.data,
            messages: [...old.data.messages, loadingMessage],
          },
        };
      });

      return { previousData };
    },

    onError: (err, newChat, context: any) => {
      queryClient.setQueryData(
        [_analizer.GetConver.url],
        context?.previousData
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [_analizer.GetConver.url],
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: [_analizer.GetConverList.url],
        exact: false,
      });
    },
  });
};
export { useNewConversation };
export type { TCreateRes, TCreateType };
