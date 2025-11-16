"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Button, Card, Typography } from "antd";
import { Squares2X2Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import AboutService from "../../../../components/result-desc/aboutService";
import VehicleUploadFile from "./_components/plaqueReadUploadFile";
import PlaqueReadUploadFile from "./_components/plaqueReadUploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="پلاک خوان"
      BreadcrumbList={[{ label: "پلاک خوان", icon: Squares2X2Icon }]}
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
        <PlaqueReadUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
