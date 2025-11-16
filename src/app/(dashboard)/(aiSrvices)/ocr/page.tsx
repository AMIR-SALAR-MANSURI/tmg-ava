"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import AboutService from "../../../../components/result-desc/aboutService";
import UploadFile from "./_components/uploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="تبدیل عکس به متن"
      BreadcrumbList={[{ label: "تبدیل عکس به متن", icon: Squares2X2Icon }]}
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
        <AboutService
          text={`این سامانه با بهره‌گیری از الگوریتم‌های پیشرفته هوش مصنوعی و فناوری OCR، تصاویر را در فرمت‌های مختلف عکس (JPG, PNG و غیره) دریافت کرده و با دقت بالا متن را استخراج می‌کند.
در حال حاضر با پشتیبانی از چندین زبان و فونت‌های پیچیده تنها متن‌های تایپی را پردازش می‌کند که در حال بهبود و افزودن امکان خوانش متن‌های دست‌نویس می‌باشد.
خروجی به‌صورت متن قابل جستجو، فایل‌های متنی (TXT, DOC) ارائه می‌شود.
یادگیری ماشینی (ML) باعث افزایش دقت و کاهش خطا در پردازش تصاویر کم‌کیفیت می‌شود.
این راه‌حل برای اتوماسیون اداری، آرشیو اسناد و پردازش داده‌ها ایده‌آل است.`}
        />
      </div>
      <div className="p-2">
        <UploadFile />
      </div>
    </BreadcrumbPage>
  );
}
