"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Button, Card, Typography } from "antd";
import { Squares2X2Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import AboutService from "../../../../components/result-desc/aboutService";
import GunUploadFile from "./_components/objUploadFile";

export default function Page() {
  return (
    <BreadcrumbPage
      title="شناسایی اسلحه"
      BreadcrumbList={[{ label: "شناسایی اسلحه", icon: Squares2X2Icon }]}
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
          text="
سرویس تشخیص و شناسایی اسلحه:این سامانه پیشرفته با بهره‌گیری از هوش مصنوعی و پردازش تصویر، قادر به شناسایی انواع سلاح‌های گرم در تصاویر ثابت و جریان‌های ویدیویی است. سیستم به صورت ماژولار طراحی شده و امکان اتصال به سامانه‌های تصویربرداری مختلف مانند دوربین‌های امنیتی، گیت‌های بازرسی و سیستم‌های نظارتی را دارد. این سامانه به عنوان لایه اضافه امنیتی می‌تواند به سیستم‌های نظارتی موجود اضافه شود و امکان شناسایی خودکار تهدیدات را قبل از وقوع حادثه فراهم کند.ویژگی‌های کلیدی:پشتیبانی از ورودی‌های متنوع (تصاویر ثابت، ویدیوهای زنده، فید دوربین‌های امنیتی).تشخیص انواع سلاح (7 گروه تفنگ) با دقت بالا.امکان یکپارچه‌سازی با سیستم‌های موجود نظارتی و امنیتی  کاربردها: گیت‌های امنیتی فرودگاه‌ها، مترو و اماکن حساس.نظارت هوشمند بر اماکن عمومی (مراکز خرید، استادیوم‌ها).حفاظت از تأسیسات نظامی و حیاتی، پلیس و نیروهای امنیتی برای شناسایی سریع تهدیدات.بانک‌ها و مراکز حساس مالی برای مقابله با سرقت های مسلحانه.مزایا:سرعت بالا در پردازش تصاویر زنده (تا 60 فریم بر ثانیه).قابلیت نصب روی سخت‌افزارهای مختلف (از سرور تا دستگاه‌های لبه)  لیست سلاح‌های قابل تشخیص:سامانه قادر به شناسایی انواع سلاح‌های زیر با دقت بالا می‌باشد:1.	تفنگ‌های تهاجمی (Assault Rifle)  2.	نارنجک‌انداز (Grenade Launcher)  3.	سلاح‌های کمری (Handguns)  4.	مسلسل (Machine Gun)  5.	تفنگ ساچمه‌ای (Shotgun)  6.	تفنگ تکتیرانداز (Sniper Rifle)  7.	سلاح‌های سبک خودکار (Submachine Gun - SMGs)"
        />
      </div>
      <div className="p-2">
        <GunUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
