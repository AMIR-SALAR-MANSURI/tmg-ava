"use client";

import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "@nasirlo-m/opic-starter-tools";
import baseAxios, { baseAxiosResponseInterceptor } from "@/service/baseAxios";
import FullScreenLoading from "@/components/full-screen-loading/full-screen-loading";

interface Props {
  children: React.ReactNode;
  autoSignIn?: boolean;
}

export default function OidcAuthProvider({
  children,
  autoSignIn = false,
}: Props) {
  const [responseInterceptorSet, setResponseInterceptorSet] = useState(false);

  useEffect(() => {
    if (responseInterceptorSet) {
      // baseAxiosResponseInterceptor(notification);
    }
    setResponseInterceptorSet(true);
  }, [notification, responseInterceptorSet]);

  return (
    <AuthProvider
      responseType="code"
      loadUserInfo={false}
      autoSignIn={false}
      // axiosInstance={[baseAxios]}
      loading={<FullScreenLoading />}
      authority={process.env.NEXT_PUBLIC_OPIC_AUTHORITY}
      clientId={process.env.NEXT_PUBLIC_OPIC_CLIENT_ID}
      clientSecret={process.env.NEXT_PUBLIC_OPIC_CLIENT_SECRET}
      scope="openid profile offline_access estsecurity.read formservice.fullaccess"
      redirectUri={window.location.origin}
      onKillUser={(data, signOut) =>
        notification.open({
          type: "error",
          message: data,
          duration: 5,
          onClose: signOut,
        })
      }
    >
      {children}
    </AuthProvider>
  );
}
