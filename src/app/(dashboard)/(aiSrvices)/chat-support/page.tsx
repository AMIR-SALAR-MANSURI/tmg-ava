"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import ChatBox from "@/components/chats/chat-box";
import { DomainNames, domains } from "@/components/chats/hooks/domain";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function Page() {
  return (
    <NuqsAdapter>
      <BreadcrumbPage
        title="پشتیبانی هوشمند شرکت بنیان آوا"
        BreadcrumbList={[
          { label: "پشتیبانی هوشمند شرکت بنیان آوا", icon: Squares2X2Icon },
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
          <ChatBox hideHistory={true} domainName="support" />
        </div>
      </BreadcrumbPage>
    </NuqsAdapter>
  );
}
