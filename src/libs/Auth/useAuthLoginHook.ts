"use client";
import baseAxios from "@/service/baseAxios";
import { useRouter } from "next/navigation";
import { TCreateType, useAuthLogin } from "./hook/auth-login";
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { babelIncludeRegexes } from "next/dist/build/webpack-config";

export const useAuthLoginHook = () => {
  const { token, setToken } = useAuth();

  const router = useRouter();
  const { mutateAsync, isPending } = useAuthLogin();

  const BaseAxiosAuthRequest = () => {
    baseAxios.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  };

  const handleLogin = async (values: TCreateType) => {
    const res = await mutateAsync(values);
    if (res) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      router.push("/");
      BaseAxiosAuthRequest();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
    setToken(null);
    window.location.reload();
  };

  useEffect(() => {
    const oldToken = localStorage.getItem("token");
    if (oldToken) {
      setToken(oldToken);
    }
    BaseAxiosAuthRequest();
  }, [token]);

  return {
    token,
    handleLogin,
    handleLogout,
    isPending,
  };
};
