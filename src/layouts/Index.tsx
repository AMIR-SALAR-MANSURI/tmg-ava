"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Layout, theme } from "antd";
import { motion } from "framer-motion";
import baseAxios, {
  baseAxiosResponseInterceptor,
  mapAxios,
} from "@/service/baseAxios";
import useNotification from "antd/lib/notification/useNotification";
import AuthProvider from "@/provider/AuthProvider";

interface Props {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: Props) {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const [api, context] = useNotification();

  const [responseInterceptorSet, setResponseInterceptorSet] = useState(false);

  useEffect(() => {
    if (responseInterceptorSet) {
      baseAxiosResponseInterceptor(api);
      baseAxiosResponseInterceptor(api);
    }
    setResponseInterceptorSet(true);
  }, [api, responseInterceptorSet]);

  return (
    <AuthProvider>
      <Layout
        hasSider
        style={{ backgroundColor: colorBgLayout }}
        className="min-h-dvh max-h-dvh p-1 md:p-5 lg:p-6 gap-0 md:gap-3 lg:gap-4 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            dir="ltr"
            className="hidden md:block h-[calc(100vh-32px)] md:h-[calc(100vh-40px)] lg:h-[calc(100vh-48px)] md:w-[280px] lg:w-[320px]"
          >
            <div dir="rtl" className="h-full">
              <Sidebar />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-[calc(100%-292px)] lg:w-[calc(100%-336px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Layout.Content className="h-[calc(100vh-32px)] md:h-[calc(100vh-40px)] lg:h-[calc(100vh-48px)] bg-white rounded-2xl p-4 md:p-5 lg:p-6 shadow-sm ">
            {children}
            {context}
          </Layout.Content>
        </motion.div>
      </Layout>
    </AuthProvider>
  );
}
