// "use client";

// import React, { useEffect, useState } from "react";
// import AuthModal, { AuthType } from "./AuthModal";
// import axios, { InternalAxiosRequestConfig } from "axios";
// import { authFn } from "./fn";
// import { useAuth } from "./useAuth";
// import { useRouter } from "next/navigation";

// interface TProps {
//   children: React.ReactNode;
// }

// export default function ProtectedRouteProvider({ children }: TProps) {
//   const [open, setOpen] = useState(false);

//   const router = useRouter();
//   const { token, setToken } = useAuth();

//   const CancelToken = axios.CancelToken;
//   const source = CancelToken.source();

//   const storeToken = (newToken: string) => {
//     authFn.login(newToken);
//     setToken(newToken);

//     setTimeout(() => {
//       localStorage.removeItem("accessToken");
//     }, 3600000);
//   };

//   const handleAuth = (conf: InternalAxiosRequestConfig<any>) => {
//     if (!token) {
//       source.cancel("لطفا وارد شوید.");
//       setOpen(true);
//     }
//   };

//   const handleInterceptor = (newToken: string | null) => {
//     if (newToken) {
//       storeToken(newToken);
//     }

//     // baseAxiosRequestInterceptor(newToken || token || "", source, handleAuth);
//   };

//   // useEffect(() => {
//   //   handleInterceptor(authFn.getToken());
//   // }, []);

//   if (!token) {
//     router.push("/login");
//   }
//   return (
//     <>
//       <AuthModal
//         open={open}
//         setOpen={setOpen}
//         onSubmit={(token) => handleInterceptor(token)}
//       />
//       {children}
//     </>
//   );
// }
