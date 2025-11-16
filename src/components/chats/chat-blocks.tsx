import DotLoading from "@/components/loading/dot-loading";
import { _analizer } from "@/constants/analizer";
import { Button, Typography } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { Copy } from "lucide-react";
import SelectModel from "./select-model";
import useGetLanguageModels from "@/hooks/analizer/general/useGetLanguageModels";
import { useChatStore } from "./store";

interface ChatBlocksProps {
  data: z.infer<typeof _analizer.GetConver.response.shape.data> | undefined;
}

export default function ChatBlocks({ data: chats }: ChatBlocksProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [chats?.messages]);

  return (
    <div
      id="chat-container"
      className="h-screen flex-1 p-4 flex flex-col gap-6 overflow-y-auto"
      ref={chatContainerRef}
    >
      {chats?.messages?.length === undefined ||
      chats?.messages?.length === 0 ? (
        <>
          <div className="h-full flex flex-col gap-2 items-center justify-center">
            <Image
              width={240}
              height={240}
              alt="empty-chat"
              src="/images/empty-chat.webp"
            />
            <div className="text-center text-gray-500">
              هنوز پیامی وجود ندارد! گفتگو را شروع کنید.
            </div>
          </div>
        </>
      ) : (
        chats?.messages.map((msg) => (
          <React.Fragment key={msg.id}>
            <div className="flex flex-col items-start">
              {msg.userInput && (
                <>
                  <div className="px-4 py-2 rounded-lg max-w-[800px] bg-black text-white">
                    <Typography.Text className="text-white prose">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.userInput}
                      </ReactMarkdown>
                    </Typography.Text>
                  </div>
                  <Button
                    type="text"
                    size="large"
                    onClick={() =>
                      handleCopy(msg.userInput, `user-${msg.userInput}`)
                    }
                    className="text-gray-400 hover:text-black mt-1"
                    aria-label="Copy user message"
                  >
                    {copiedId === `user-${msg.userInput}` ? (
                      <CheckOutlined className="text-green-400" />
                    ) : (
                      <Copy />
                    )}
                  </Button>
                </>
              )}
            </div>
            <div className="mb-4 flex flex-col items-end">
              {msg.botResponse && (
                <>
                  <div className="mt-16 md:mt-8 px-4 py-2 rounded-lg max-w-[800px] bg-gray-100 text-gray-800">
                    <Typography.Text className="text-gray-800">
                      {msg.isLoading ? (
                        <DotLoading />
                      ) : (
                        <div className="prose prose-sm prose-table:border prose-td:p-2 prose-th:bg-gray-100 max-w-none test overflow-x-auto">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              code({
                                node,
                                inline,
                                className,
                                children,
                                ...props
                              }: any) {
                                return inline ? (
                                  <code
                                    className="bg-gray-900 text-white px-1 rounded"
                                    {...props}
                                  >
                                    {children}
                                  </code>
                                ) : (
                                  <pre
                                    className="bg-gray-900 text-white p-2 rounded overflow-auto"
                                    dir="ltr"
                                  >
                                    <code
                                      className={`${className} text-white`}
                                      {...props}
                                    >
                                      {children}
                                    </code>
                                  </pre>
                                );
                              },
                            }}
                          >
                            {msg.botResponse}
                          </ReactMarkdown>
                        </div>
                      )}
                    </Typography.Text>
                  </div>
                  <Button
                    type="text"
                    size="large"
                    onClick={() =>
                      handleCopy(msg.botResponse, `user-${msg.botResponse}`)
                    }
                    className="text-gray-400 hover:text-black mt-1"
                    aria-label="Copy user message"
                  >
                    {copiedId === `user-${msg.botResponse}` ? (
                      <CheckOutlined className="text-green-400" />
                    ) : (
                      <Copy />
                    )}
                  </Button>
                </>
              )}
            </div>
          </React.Fragment>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
