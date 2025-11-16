"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Button, Card, Typography } from "antd";
import { Squares2X2Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import AboutService from "../../../../components/result-desc/aboutService";
import VehicleUploadFile from "./_components/vehicleUploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="تشخیص خودرو سنگین"
      BreadcrumbList={[{ label: "تشخیص خودرو سنگین", icon: Squares2X2Icon }]}
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
      <div className="p-2">
        <AboutService />
      </div>
      <div className="p-2">
        <VehicleUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
