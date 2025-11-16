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
        <AboutService text="سرویس تبدیل گفتار به متن(بدون نیاز به آپلود فایل):این سامانه تحت وب با فناوری تبدیل گفتار به متن در لحظه (Real-Time Speech-to-Text) کار می‌کند. کاربر با کلیک روی دکمه شروع صحبت، میکروفن را فعال کرده و همزمان با صحبت کردن، متن گفتار او بلافاصله و بدون تأخیر محسوس در صفحه نمایش داده می‌شود. پس از اتمام صحبت، با کلیک روی دکمه توقف صبحت، متن نهایی آماده کپی، ذخیره (در قالب TXT, DOC) یا اشتراک‌گذاری است.ویژگی‌های کلیدی:پردازش کاملاً آنلاین (بدون نیاز به آپلود فایل صوتی)  پشتیبانی از چندین زبان و لهجه با دقت بالا  نمایش همزمان متن حین صحبت کاربر (Real-Time)  امنیت بالا (عدم ذخیره خودکار گفتار کاربران در سرور)  مورد استفاده:جلسات و مصاحبات آنلاین: مستندسازی خودکار مذاکرات، وبینارها و جلسات مجازی  یادداشت‌برداری سریع: تبدیل گفتار به متن برای مدیران و کارشناسان.پشتیبانی مشتری: ثبت خودکار توضیحات کاربران در چت‌های صوتی  دسترس‌پذیری: کمک به افراد ناشنوا یا کم‌شنوا برای درک گفتار " />
      </div>
      <div className="p-2">
        <VoiceUploadFile />
      </div>
    </BreadcrumbPage>
  );
}
