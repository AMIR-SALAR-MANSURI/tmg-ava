"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/libs/Auth";
import { useAuthLoginHook } from "@/libs/Auth/useAuthLoginHook";
import FlipLoading from "@/components/loading/flip-loading";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const { token } = useAuthLoginHook();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !token) {
      router.push("/login");
    }
  }, [isLoading, token, router]);

  if (isLoading || !token) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-dvh space-y-8">
        <FlipLoading />
        <span> ...درحال دریافت اطلاعات</span>
      </div>
    );
  }

  return <>{children}</>;
}
