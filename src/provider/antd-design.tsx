"use client";

import React, { useEffect, useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, notification, theme } from "antd";
import frFR from "antd/locale/fa_IR";
import CustomTheme from "@/theme/custom-theme";
import useNotification from "antd/lib/notification/useNotification";

interface Props {
  children: React.ReactNode;
}

export default function AntdDesign({ children }: Props) {
  const { compactAlgorithm, defaultAlgorithm } = theme;

  const [notification, context] = useNotification({ placement: "topLeft" });

  const [responseInterceptorSet, setResponseInterceptorSet] = useState(false);

  useEffect(() => {
    if (responseInterceptorSet) {
      // baseAxiosResponseInterceptor(notification);
    }
    setResponseInterceptorSet(true);
  }, [notification, responseInterceptorSet]);
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={frFR}
        direction="rtl"
        theme={{
          ...CustomTheme,
          algorithm: [defaultAlgorithm, compactAlgorithm],
        }}
      >
        {context}
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
