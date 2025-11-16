"use client";
import React from "react";
import ChatLayoutNoHooks from "./chat-layout-support";
import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Button } from "antd";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function page() {
  const handleNewChat = () => {};
  const handleSendMessage = () => {};

  return (
    <NuqsAdapter>
      <BreadcrumbPage
        title="پشتیبان"
        BreadcrumbList={[
          {
            label: "پشتیبان ",
            icon: Squares2X2Icon,
          },
        ]}
        actions={[
          <Button
            key={1}
            type="primary"
            className="w-full"
            iconPosition="end"
            icon={<ArrowPathIcon className="size-5" />}
            onClick={() => location.reload()}
          >
            به روز رسانی
          </Button>,
        ]}
      >
        <div className="flex flex-col md:flex-row border-gray-300 rounded-lg h-full shadow-lg">
          <ChatLayoutNoHooks
            handleNewChat={handleNewChat}
            handleSendMessage={handleSendMessage}
            hideHistory={false}
            isPending={false}
            isFetching={false}
            data={{}}
            chatID={""}
            models={[]}
            uid={""}
            onUidChange={() => {}}
            ChatDrawer={() => null}
            ChatBlocks={() => null}
            SelectModel={() => null}
            form={{}}
          />
        </div>
      </BreadcrumbPage>
    </NuqsAdapter>
  );
}
