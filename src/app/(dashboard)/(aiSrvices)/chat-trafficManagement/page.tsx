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
        title="پشتیبان هوشمند مدیریت تردد و محاسبه کارکرد در نرم افزار نرم نگاران"
        BreadcrumbList={[
          {
            label:
              "پشتیبان هوشمند مدیریت تردد و محاسبه کارکرد در نرم افزار نرم نگاران",
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
          <ChatBox hideHistory={true} domainName="trafficManagement" />
        </div>
      </BreadcrumbPage>
    </NuqsAdapter>
  );
}
