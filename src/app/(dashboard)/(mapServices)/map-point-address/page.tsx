"use client";

import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { ArrowPathIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button, Tabs } from "antd";
import SetLocationMap from "./_components/setLocationMap";

export default function Page() {
  // const tabData = [
  //   {
  //     key: "1",
  //     label: "انتخاب نقطه و نمایش آدرس",

  //     children: (
  //       <>
  //         <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden h-full">
  //           <SetLocationMap />
  //         </div>
  //       </>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: "تبدیل آدرس یه مختصات",
  //     children: (
  //       <>
  //         <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden h-full">
  //           <GetAddressLocation />
  //         </div>
  //       </>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: "متن",
  //     children: (
  //       <>
  //         <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden h-full">
  //           <SetLocationMap />
  //         </div>
  //       </>
  //     ),
  //     disabled: true,
  //   },
  // ];

  return (
    <BreadcrumbPage
      title="نقشه"
      BreadcrumbList={[{ label: "نقشه", icon: Squares2X2Icon }]}
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
          <SetLocationMap />
        </div>
        {/* <Tabs items={tabData} tabPosition="top" className="h-full" /> */}
      </div>
    </BreadcrumbPage>
  );
}
