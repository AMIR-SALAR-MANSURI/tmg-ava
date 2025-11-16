import { _analizer } from "@/constants/analizer";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

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
  const isLoading = false;

  const data = {
    messages: [
      {
        role: "user",
        content: "introduce yourself",
      },
      {
        role: "assistance",
        content: "introduce yourself",
      },
      {
        role: "user",
        content: "introduce yourself",
      },
      {
        role: "assistance",
        content: "introduce yourself",
      },
      {
        role: "user",
        content: "introduce yourself",
      },
      {
        role: "assistance",
        content: "introduce yourself",
      },
      {
        role: "user",
        content: "introduce yourself",
      },
      {
        role: "assistance",
        content: "introduce yourself",
      },
    ],
  };

  return (
    <div
      id="chat-container"
      className="h-screen flex-1 p-4 flex flex-col gap-6 overflow-y-auto"
      ref={chatContainerRef}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
        {data.messages.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">سلام! چطور می‌تونم کمکتون کنم؟</p>
          </div>
        )}

        {data.messages.map((message) => (
          <div
            key={message.role}
            className={`
              flex  
              ${message.role === "user" ? "justify-start " : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm
              ${
                message.role === "user"
                  ? "bg-black text-white text-primary-foreground "
                  : "bg-card text-card-foreground border  bg-gray-100 text-gray-800"
              }
              `}
              //rounded-bl-sm rounded-br-sm
            >
              <p className="text-sm ">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-card border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
