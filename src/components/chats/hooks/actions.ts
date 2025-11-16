import { useEffect, useRef } from "react";
import { Form, InputRef, message } from "antd";
import { parseAsString, useQueryState } from "nuqs";
import { _analizer } from "@/constants/analizer";
import useGetConversation from "@/hooks/analizer/useGetConversation";
import {
  TCreateType,
  useNewConversation,
} from "@/hooks/analizer/useNewConversation";
import { queryClient } from "@/libs/queryClient";
import useOpenDrawerHistory from "./open-drawer-history";
import useGetLanguageModels from "@/hooks/analizer/general/useGetLanguageModels";
import { useChatStore } from "../store";

export const useChatBoxLogic = (externalConversationId?: string) => {
  const [chatID, setChatID] = useQueryState("uuid", parseAsString);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [form] = Form.useForm();
  const { open, setOpen } = useOpenDrawerHistory();
  const chat = useNewConversation();
  const { setUid, uid } = useChatStore();

  const { data, isPending, isFetching } = useGetConversation({
    uid: chatID as string,
  });

  const handleSendMessage = async (value: TCreateType) => {
    const userInput = value.userInput?.trim();
    if (!userInput) {
      message.warning("Please enter a message");
      return;
    }

    form.resetFields();

    const res = await chat.mutateAsync({
      languageModelId: uid,
      supportId: externalConversationId as string,
      userInput,
      conversationId: chatID,
    });

    if (res.isSuccess) {
      setChatID(res.data.id);
    }
  };

  const handleNewChat = (id: string | null) => {
    form.resetFields();
    queryClient.removeQueries({
      queryKey: [_analizer.GetConver.url],
      exact: false,
    });
    setChatID(id);
  };

  useEffect(() => {
    if (!isFetching && !chat.isPending) {
      inputRef.current?.focus();
    }
  }, [chat.isPending, isFetching]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const isTextArea = document.activeElement?.tagName === "TEXTAREA";
      const isShiftPressed = e.shiftKey;

      if (e.key === "Enter" && !isShiftPressed && isTextArea) {
        e.preventDefault();
        form.submit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [form]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [_analizer.GetConver.url],
        exact: false,
      });
    };
  }, []);

  const models = useGetLanguageModels();

  useEffect(() => {
    if (models.data?.length) {
      setUid(models.data[0].id!);
    }
  }, [models.data]);

  return {
    models,
    form,
    inputRef,
    chat,
    chatID,
    data,
    isPending,
    isFetching,
    handleSendMessage,
    handleNewChat,
    open,
    setOpen,
    uid,
    setUid,
  };
};
