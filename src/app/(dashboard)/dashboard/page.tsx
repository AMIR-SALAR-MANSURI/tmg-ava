// "use client";

// import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
// import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
// import { Button } from "antd";
// import RenderCardSection from "./RenderCardSection";
// import { ReactNode } from "react";
// import {
//   IceCream2,
//   Bot,
//   MessageSquare,
//   Headphones,
//   Shield,
//   CreditCard,
//   Image as ImageIcon,
//   Mic,
//   Volume2,
//   Box,
//   User,
//   Truck,
//   Car,
//   FileSignature,
//   Languages,
//   FileText,
//   FileSearch,
//   FileCheck,
//   FileWarning,
//   Smile,
//   Tag,
//   Landmark,
//   FileInput,
//   MapPin,
//   Map,
//   Workflow,
//   FormInput,
//   BadgeCheck,
//   GuitarIcon,
// } from "lucide-react";

// interface props {
//   title: string;
//   image: string;
//   link: string;
//   disabled?: boolean;
//   icon?: React.ReactNode; // Optional icon replacement
// }

// // const cardData: props[] = [
// //   {
// //     title: "تبدیل عکس به متن",
// //     image: "/images/ocr.jpg",
// //     link: "/ocr",
// //   },
// //   {
// //     title: "تبدیل گفتار به نوشتار",
// //     image: "/images/voice-speech.jpg",
// //     link: "/speech",
// //   },
// //   {
// //     title: "تبدیل صوت به نوشته",
// //     image: "/images/voice.png",
// //     link: "/voice",
// //   },
// //   {
// //     title: "شناسایی اسلحه",
// //     image: "/images/gun.webp",
// //     link: "/gun",
// //   },
// //   {
// //     title: "شناسایی اشیا",
// //     image: "/images/obj.jpg",
// //     link: "/obj",
// //   },
// //   {
// //     title: "شناسایی چهره",
// //     image: "/images/face-detect.jpg",
// //     link: "/face",
// //   },
// //   {
// //     title: "شناسایی نوع خودرو سنگین",
// //     image: "/images/vhicle.webp",
// //     link: "/vehicle",
// //     disabled: true,
// //   },
// //   {
// //     title: "تشخیص پلاک",
// //     image: "/images/plaque.jpg",
// //     link: "/plaque",
// //     disabled: true,
// //   },
// //   {
// //     title: "پلاک خوان",
// //     image: "/images/plaque-reader.jpg",
// //     link: "/plaque-reader",
// //   },
// //   {
// //     title: "تشخیص امضا",
// //     image: "/images/emza.jpg",
// //     link: "/signature-detection",
// //   },
// //   {
// //     title: "تشخیص چهره",
// //     image: "/images/face-reco.jpg",
// //     link: "/face-reco",
// //   },
// //   {
// //     title: "دستیار تحلیل گر هوشمند",
// //     image: "/images/chat.jpg",
// //     link: "/discussion",
// //   },
// //   {
// //     title: "مترجم",
// //     image: "/images/translate.png",
// //     link: "/translate",
// //   },
// //   {
// //     title: "خلاصه ساز",
// //     image: "/images/summary.jpg",
// //     link: "/summary",
// //   },
// //   {
// //     title: "تشخیص زبان از روی متن",
// //     image: "/images/detect-lan.png",
// //     link: "/detectLanguage",
// //   },
// //   {
// //     title: "شباهت سنجی متون",
// //     image: "/images/similarity-text.png",
// //     link: "/comparator",
// //   },
// //   {
// //     title: "تعیین دسته بندی",
// //     image: "/images/categorize.jpg",
// //     link: "/categorize",
// //   },
// //   {
// //     title: "تشخیص محتوای غیر اخلاقی از روی متن",
// //     image: "/images/unethical-text.png",
// //     link: "/unethicalText",
// //   },
// //   {
// //     title: "تحلیل احساس و هیجان در متن",
// //     image: "/images/exciting-text.png",
// //     link: "/emotionalText",
// //   },
// //   {
// //     title: "شناسایی موجودیت های اسمی",
// //     image: "/images/ner.png",
// //     link: "/entityName",
// //   },
// //   {
// //     title: "تشخیص و تفکیک موضوع اقتصادی و غیر اقتصادی",
// //     image: "/images/seperation-econo.png",
// //     link: "/economicReco",
// //   },
// //   {
// //     title: "تبدیل نامه به نامه اداری و رسمی",
// //     image: "/images/officailLetter.png",
// //     link: "/officailLetter",
// //   },
// // ];
// // const moduleData: props[] = [
// //   {
// //     title: "گردش کار",
// //     image: "/images/wf.jpeg",
// //     link: "/map-point-address",
// //     disabled: true,
// //   },
// //   {
// //     title: "فرم ساز",
// //     image: "/images/formMaker1.png",
// //     link: "/map-address-point",
// //     disabled: true,
// //   },
// // ];
// // const mapData: props[] = [
// //   {
// //     title: "انتخاب نقطه و نمایش آدرس",
// //     image: "/images/map.jpg",
// //     link: "/map-point-address",
// //   },
// //   {
// //     title: "تبدیل آدرس یه مختصات",
// //     image: "/images/map1.jpg",
// //     link: "/map-address-point",
// //   },
// // ];

// // const cahtBot: props[] = [
// //   {
// //     title: "پشتیبانی هوشمند شرکت بنیان آوا",
// //     image: "/images/chat.jpg",
// //     link: "/chat-support",
// //   },
// //   {
// //     title: "پشتیبانی هوشمند درگاه ملی حمل بار",
// //     image: "/images/chat.jpg",
// //     link: "/chat-srd",
// //   },
// //   {
// //     title: "پشتیبانی هوشمند تراکنش های مشکوک",
// //     image: "/images/chat.jpg",
// //     link: "/chat-str",
// //   },
// //   {
// //     title: "پشتیبانی هوشمند ثامن",
// //     image: "/images/chat.jpg",
// //     link: "/chat-samen",
// //   },
// //   {
// //     title: "پشتیبانی هوشمند اعتبار سنجی",
// //     image: "/images/chat.jpg",
// //     link: "/chat-validate",
// //   },
// //   {
// //     title: "پشتیبانی هوشمند اعتبارینو",
// //     image: "/images/chat.jpg",
// //     link: "/chat-validator",
// //   },
// // ];

// interface CardItem {
//   title: string;
//   link: string;
//   disabled?: boolean;
//   icon?: ReactNode;
//   description?: string;
// }

// const cardData: CardItem[] = [
//   {
//     title: "تبدیل عکس به متن",
//     link: "/ocr",
//     icon: <ImageIcon className="w-8 h-8" />,
//   },
//   {
//     title: "تبدیل گفتار به نوشتار",
//     link: "/speech",
//     icon: <Mic className="w-8 h-8" />,
//   },
//   {
//     title: "تبدیل صوت به نوشته",
//     link: "/voice",
//     icon: <Volume2 className="w-8 h-8" />,
//   },
//   {
//     title: "شناسایی اسلحه",
//     link: "/gun",
//     icon: <GuitarIcon className="w-8 h-8" />,
//   },
//   { title: "شناسایی اشیا", link: "/obj", icon: <Box className="w-8 h-8" /> },
//   { title: "شناسایی چهره", link: "/face", icon: <User className="w-8 h-8" /> },
//   {
//     title: "شناسایی نوع خودرو سنگین",
//     link: "/vehicle",
//     disabled: true,
//     icon: <Truck className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص پلاک",
//     link: "/plaque",
//     disabled: true,
//     icon: <Car className="w-8 h-8" />,
//   },
//   {
//     title: "پلاک خوان",
//     link: "/plaque-reader",
//     icon: <Car className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص امضا",
//     link: "/signature-detection",
//     icon: <FileSignature className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص چهره",
//     link: "/face-reco",
//     icon: <User className="w-8 h-8" />,
//   },
//   {
//     title: "دستیار تحلیل گر هوشمند",
//     link: "/discussion",
//     icon: <Bot className="w-8 h-8" />,
//   },
//   {
//     title: "مترجم",
//     link: "/translate",
//     icon: <Languages className="w-8 h-8" />,
//   },
//   {
//     title: "خلاصه ساز",
//     link: "/summary",
//     icon: <FileText className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص زبان از روی متن",
//     link: "/detectLanguage",
//     icon: <FileSearch className="w-8 h-8" />,
//   },
//   {
//     title: "شباهت سنجی متون",
//     link: "/comparator",
//     icon: <FileCheck className="w-8 h-8" />,
//   },
//   {
//     title: "تعیین دسته بندی",
//     link: "/categorize",
//     icon: <Tag className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص محتوای غیر اخلاقی از روی متن",
//     link: "/unethicalText",
//     icon: <FileWarning className="w-8 h-8" />,
//   },
//   {
//     title: "تحلیل احساس و هیجان در متن",
//     link: "/emotionalText",
//     icon: <Smile className="w-8 h-8" />,
//   },
//   {
//     title: "شناسایی موجودیت های اسمی",
//     link: "/entityName",
//     icon: <Tag className="w-8 h-8" />,
//   },
//   {
//     title: "تشخیص و تفکیک موضوع اقتصادی و غیر اقتصادی",
//     link: "/economicReco",
//     icon: <Landmark className="w-8 h-8" />,
//   },
//   {
//     title: "تبدیل نامه به نامه اداری و رسمی",
//     link: "/officailLetter",
//     icon: <FileInput className="w-8 h-8" />,
//   },
// ];

// const moduleData: CardItem[] = [
//   {
//     title: "گردش کار",
//     link: "/map-point-address",
//     disabled: true,
//     icon: <Workflow className="w-8 h-8" />,
//   },
//   {
//     title: "فرم ساز",
//     link: "/map-address-point",
//     disabled: true,
//     icon: <FormInput className="w-8 h-8" />,
//   },
// ];

// const mapData: CardItem[] = [
//   {
//     title: "انتخاب نقطه و نمایش آدرس",
//     link: "/map-point-address",
//     icon: <MapPin className="w-8 h-8" />,
//   },
//   {
//     title: "تبدیل آدرس یه مختصات",
//     link: "/map-address-point",
//     icon: <Map className="w-8 h-8" />,
//   },
// ];

// const chatBot: CardItem[] = [
//   {
//     title: "پشتیبانی هوشمند شرکت بنیان آوا",
//     link: "/chat-support",
//     icon: <IceCream2 className="w-8 h-8" />,
//     description: "چت هوشمند با پشتیبان",
//   },
//   {
//     title: "پشتیبانی هوشمند درگاه ملی حمل بار",
//     link: "/chat-srd",
//     icon: <Truck className="w-8 h-8" />,
//     description: "پشتیبانی حمل و نقل",
//   },
//   {
//     title: "پشتیبانی هوشمند تراکنش های مشکوک",
//     link: "/chat-str",
//     icon: <Shield className="w-8 h-8" />,
//     description: "امنیت تراکنش ها",
//   },
//   {
//     title: "پشتیبانی هوشمند ثامن",
//     link: "/chat-samen",
//     icon: <Landmark className="w-8 h-8" />,
//     description: "پشتیبانی مالی",
//   },
//   {
//     title: "پشتیبانی هوشمند اعتبار سنجی",
//     link: "/chat-validate",
//     icon: <CreditCard className="w-8 h-8" />,
//     description: "اعتبارسنجی هوشمند",
//   },
//   {
//     title: "پشتیبانی هوشمند اعتبارینو",
//     link: "/chat-validator",
//     icon: <BadgeCheck className="w-8 h-8" />,
//     description: "سیستم اعتبارسنجی",
//   },
// ];
// export default function Page() {
//   return (
//     <BreadcrumbPage
//       title="داشبورد"
//       BreadcrumbList={[{ label: "داشبورد", icon: Squares2X2Icon }]}
//       actions={[
//         <Button
//           key={1}
//           type="primary"
//           className="w-full"
//           iconPosition="end"
//           icon={<ArrowPathIcon className="size-5" />}
//           onClick={() => location.reload()}
//         >
//           به روز رسانی
//         </Button>,
//       ]}
//     >
//       <div className="p-1">
//         <RenderCardSection
//           title="پشتیبانی هوشمند"
//           data={chatBot}
//           borderColor="border-green-700"
//         />
//         <RenderCardSection
//           title="ماژول های هوش"
//           data={cardData}
//           borderColor="border-orange-700"
//         />
//         <RenderCardSection
//           title="ماژول های عمومی"
//           data={moduleData}
//           borderColor="border-blue-700"
//         />
//         <RenderCardSection
//           title="ماژول نقشه"
//           data={mapData}
//           borderColor="border-rose-700"
//         />
//       </div>
//     </BreadcrumbPage>
//   );
// }

"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import RenderCardSection from "./RenderCardSection";

interface props {
  title: string;
  image: string;
  link: string;
  disabled?: boolean;
}

const cardData: props[] = [
  {
    title: "تبدیل عکس به متن",
    image: "/images/ocr.jpg",
    link: "/ocr",
  },
  {
    title: "تبدیل گفتار به نوشتار",
    image: "/images/voice-speech.jpg",
    link: "/speech",
    disabled: true,
  },
  {
    title: "تبدیل صوت به نوشته",
    image: "/images/voice.png",
    link: "/voice",
  },
  {
    title: "شناسایی اسلحه",
    image: "/images/gun.webp",
    link: "/gun",
  },
  {
    title: "شناسایی اشیا",
    image: "/images/obj.jpg",
    link: "/obj",
  },
  {
    title: "شناسایی چهره",
    image: "/images/face-detect.jpg",
    link: "/face",
  },
  {
    title: "شناسایی نوع خودرو سنگین",
    image: "/images/vhicle.webp",
    link: "/vehicle",
    disabled: true,
  },
  {
    title: "تشخیص پلاک",
    image: "/images/plaque.jpg",
    link: "/plaque",
    disabled: true,
  },
  {
    title: "پلاک خوان",
    image: "/images/plaque-reader.jpg",
    link: "/plaque-reader",
  },
  {
    title: "تشخیص امضا",
    image: "/images/emza.jpg",
    link: "/signature-detection",
  },
  {
    title: "تشخیص چهره",
    image: "/images/face-reco.jpg",
    link: "/face-reco",
  },
  {
    title: "دستیار تحلیل گر هوشمند",
    image: "/images/chat.jpg",
    link: "/discussion",
  },
  {
    title: "مترجم",
    image: "/images/translate.png",
    link: "/translate",
  },
  {
    title: "خلاصه ساز",
    image: "/images/summary.jpg",
    link: "/summary",
  },
  {
    title: "تشخیص زبان از روی متن",
    image: "/images/detect-lan.png",
    link: "/detectLanguage",
  },
  {
    title: "شباهت سنجی متون",
    image: "/images/similarity-text.png",
    link: "/comparator",
  },
  {
    title: "تعیین دسته بندی",
    image: "/images/categorize.jpg",
    link: "/categorize",
  },
  {
    title: "تشخیص محتوای غیر اخلاقی از روی متن",
    image: "/images/unethical-text.png",
    link: "/unethicalText",
  },
  {
    title: "تحلیل احساس و هیجان در متن",
    image: "/images/exciting-text.png",
    link: "/emotionalText",
  },
  {
    title: "شناسایی موجودیت های اسمی",
    image: "/images/ner.png",
    link: "/entityName",
  },
  {
    title: "تشخیص و تفکیک موضوع اقتصادی و غیر اقتصادی",
    image: "/images/seperation-econo.png",
    link: "/economicReco",
  },
  {
    title: "تبدیل نامه به نامه اداری و رسمی",
    image: "/images/officailLetter.png",
    link: "/officailLetter",
  },
];
const moduleData: props[] = [
  {
    title: "گردش کار",
    image: "/images/wf.jpeg",
    link: "/map-point-address",
    disabled: true,
  },
  {
    title: "فرم ساز",
    image: "/images/formMaker1.png",
    link: "/map-address-point",
    disabled: true,
  },
];
const mapData: props[] = [
  {
    title: "انتخاب نقطه و نمایش آدرس",
    image: "/images/map.jpg",
    link: "/map-point-address",
  },
  {
    title: "تبدیل آدرس یه مختصات",
    image: "/images/map1.jpg",
    link: "/map-address-point",
  },
];

const cahtBot: props[] = [
  {
    title: "پشتیبانی هوشمند شرکت بنیان آوا",
    image: "/images/chat.jpg",
    link: "/chat-support",
  },
  {
    title: "پشتیبانی هوشمند درگاه ملی حمل بار",
    image: "/images/chat.jpg",
    link: "/chat-srd",
  },
  {
    title: "پشتیبانی هوشمند تراکنش های مشکوک",
    image: "/images/chat.jpg",
    link: "/chat-str",
  },
  {
    title: "پشتیبانی هوشمند ثامن",
    image: "/images/chat.jpg",
    link: "/chat-samen",
  },
  {
    title: "پشتیبانی هوشمند اعتبار سنجی",
    image: "/images/chat.jpg",
    link: "/chat-validate",
  },
  {
    title: "پشتیبانی هوشمند اعتبارینو",
    image: "/images/chat.jpg",
    link: "/chat-validator",
  },
  {
    title: "پشتیبانی هوشمند سامانه تجارت",
    image: "/images/chat.jpg",
    link: "/chat-business",
  },
  {
    title: "پشتیبان هوشمند فرآیند جذب و استخدام - معاونت سرمایه انسانی",
    image: "/images/chat.jpg",
    link: "/chat-hr",
  },
  {
    title: "پشتیبان هوشمند مدیریت تردد و محاسبه کارکرد در نرم افزار نرم نگاران",
    image: "/images/chat.jpg",
    link: "/chat-trafficManagement",
  },
  {
    title: "پشتیبان هوشمند فرآیند کاریابی کارکنان",
    image: "/images/chat.jpg",
    link: "/chat-employee-process",
  },
];

export default function Page() {
  return (
    <BreadcrumbPage
      title="داشبورد"
      BreadcrumbList={[{ label: "داشبورد", icon: Squares2X2Icon }]}
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
      <div className="p-1">
        <RenderCardSection title="پشتیبانی هوشمند" data={cahtBot} />
        <RenderCardSection title="ماژول های هوش" data={cardData} />
        <RenderCardSection title="ماژول های عمومی" data={moduleData} />
        <RenderCardSection title="ماژول نقشه" data={mapData} />
      </div>
    </BreadcrumbPage>
  );
}
