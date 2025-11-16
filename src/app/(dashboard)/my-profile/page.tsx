"use client";

import React from "react";
import BreadcrumbPage from "@/components/breadcrumb-page/breadcrumb-page";
import { Card, Descriptions, DescriptionsProps, Spin } from "antd";
import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { convertToPersianDate } from "@/libs/convert-to-persian-date";
import { authFn } from "@/libs/Auth/fn";

export default function Page() {
  // const { data, isFetching } = useGetUserInfo();

  // const userInfo = data?.userInfo
  // let userInfo = authFn.getData();

  const borderedItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "نام",
      children: "_",
    },
    {
      key: "2",
      label: "نام خانوادگی",
      children: "-",
    },
    {
      key: "3",
      label: "شماره ملی",
      children: "-",
    },
    {
      key: "4",
      label: "نام پدر",
      children: "-",
    },
    {
      key: "5",
      label: "تاریخ تولد",
      children: "-",
    },
    {
      key: "6",
      label: "محل تولد",
      children: "-",
    },
    {
      key: "7",
      label: "موبایل",
      children: "-",
    },
    {
      key: "8",
      label: "آدرس",
      children: "-",
    },
  ];

  return (
    <BreadcrumbPage
      title="پروفایل من"
      backLink="/dashboard"
      BreadcrumbList={[
        { label: "داشبورد", icon: Squares2X2Icon, pathName: "/dashboard" },
        { label: "پروفایل من", icon: UserCircleIcon },
      ]}
    >
      <Card>
        <Spin spinning={false}>
          <Descriptions
            bordered
            size="default"
            className="flex items-center"
            labelStyle={{ padding: 24, fontSize: 14, fontWeight: 500 }}
            contentStyle={{ padding: 24, fontSize: 14, fontWeight: 500 }}
            items={borderedItems}
          />
        </Spin>
      </Card>
    </BreadcrumbPage>
  );
}
