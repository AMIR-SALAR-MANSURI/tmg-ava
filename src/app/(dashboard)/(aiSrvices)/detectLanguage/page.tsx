"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import DetectLanguage from "./_components/detectLanguage";

export default function Page() {
  return (
    <BreadcrumbPage
      title="تشخیص زبان"
      BreadcrumbList={[{ label: "تشخیص زبان", icon: Squares2X2Icon }]}
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
      <div className="h-full">
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden h-full overflow-y-auto">
          <DetectLanguage />
        </div>
      </div>
    </BreadcrumbPage>
  );
}
