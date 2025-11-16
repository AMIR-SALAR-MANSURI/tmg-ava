"use client";
import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";
import { Bot } from "lucide-react";
import React from "react";
import { SupportCards } from "./_components/support-card";

export default function page() {
  return (
    <BreadcrumbPage
      title="پشتیبان هوشمند(لیست کلاینت و اتاق ها)"
      BreadcrumbList={[{ label: "پشتیبان", icon: Bot }]}
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
      <SupportCards />
    </BreadcrumbPage>
  );
}
