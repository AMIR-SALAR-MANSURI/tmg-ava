"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Button, Card, Typography } from "antd";
import { Squares2X2Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import AboutService from "../../../../components/result-desc/aboutService";
import ObjUploadFile from "./_components/objUploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="شناسایی اشیا"
      BreadcrumbList={[{ label: "شناسایی اشیا", icon: Squares2X2Icon }]}
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
          text="سرویس تشخیص اشیاء:این ماژول مبتنی بر هوش مصنوعی و پردازش تصویر است که قادر به شناسایی و طبقه‌بندی طیف گسترده‌ای از اشیاء در تصاویر می‌باشد. برای آزمون این ماژول، یک صفحه تست آنلاین (همین سایت) ایجاد شده است که به کاربران امکان می‌دهد تصاویر مورد نظر خود را آپلود کرده و نتایج تشخیص را به صورت بلادرنگ مشاهده نموده و سیستم را در محیطی واقعی ارزیابی کنند. این ماژول به صورت stand-alone یا قابل ادغام با سیستم‌های موجود (API) ارائه می‌شود.  
ویژگی‌های کلیدی:تشخیص اشیاء مختلف (از جمله وسایل نقلیه، حیوانات، لوازم الکترونیکی، مبلمان و ...)  پشتیبانی از تصاویر با فرمت‌های استاندارد (JPG, PNG و ...)  نمایش نتایج به صورت جعبه‌های محدودکننده (Bounding Box) و درصد دقت خروجی JSON/API برای توسعه‌دهندگان  پردازش سریع (کمتر از ۲ ثانیه برای تصاویر استاندارد)  کاربردها: پروژه‌های تحقیقاتی (داده‌کاوی تصاویر، یادگیری ماشین)  فروشگاه‌های آنلاین (دسته‌بندی خودکار محصولات)  سیستم‌های نظارتی (شناسایی اشیاء خاص در دوربین‌ها)  مزایا:پشتیبانی از توسعه سفارشی بر اساس نیاز کاربر.مستندات کامل API برای یکپارچه‌سازی آسان.مناسب شرکت‌های نرم‌افزاری و پروژه‌های هوش مصنوعی"
        />
      </div>
      <div className="p-2">
        <ObjUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
