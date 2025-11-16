"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import AboutService from "../../../../components/result-desc/aboutService";
import VoiceUploadFile from "./_components/voiceUploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="تبدیل صدا به متن"
      BreadcrumbList={[{ label: "تبدیل صدا به متن", icon: Squares2X2Icon }]}
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
        <AboutService text="این سامانه امکان آپلود فایل‌های صوتی در فرمت‌های استاندارد (MP3, WAV و... ) را فراهم کرده و با استفاده از هوش مصنوعی پیشرفته، محتوای گفتاری آن‌ها را به متن دقیق و قابل ویرایش تبدیل می‌کند. کاربران می‌توانند فایل خود را بارگذاری کرده و پس از پردازش، متن استخراج‌شده را دانلود نمایند.ویژگی‌های کلیدی:پشتیبانی از فرمت‌های متنوع صوتی با کیفیت‌های استاندارد.  تبدیل خودکار با دقت بالا حتی در فایل‌های طولانی.پشتیبانی از چندین زبان و لهجه.امنیت داده‌ها و محرمانگی فایل‌های آپلود شده.کاربردها:مستندسازی جلسات و مصاحبات ضبط شده.تولید محتوا: ساخت رونوشت از فایلهای صوتی و ویدیوها.تحقیقات دانشگاهی: تبدیل سخنرانی‌ها به متن.خدمات حقوقی: پیاده‌سازی مکالمات و شهادت‌ها.پزشکی: ثبت خودکار تشخیص‌های شفاهی.مزایا:پشتیبانی از فایل‌های طولانی (تا چند ساعت).حفظ ساختار گفتگو در متن خروجی.سیستم خودکار تشخیص گویندگان مختلف." />
      </div>
      <div className="p-2">
        <VoiceUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
