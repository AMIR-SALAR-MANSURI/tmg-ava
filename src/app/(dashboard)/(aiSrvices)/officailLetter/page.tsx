"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import OfficailLetter from "./_components/OfficailLetter";

export default function Page() {
  return (
    <BreadcrumbPage
      title="تبدیل متن نامه به نامه اداری و رسمی"
      BreadcrumbList={[
        { label: "تبدیل متن نامه به نامه اداری و رسمی", icon: Squares2X2Icon },
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
      <div className="h-full">
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden h-full">
          <OfficailLetter />
        </div>
      </div>
    </BreadcrumbPage>
  );
}
