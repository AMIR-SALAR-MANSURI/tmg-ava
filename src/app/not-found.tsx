"use client";

import { Button, theme, Typography } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import NotFoundPhoto from "../../public/svg/404-not-found.svg";

export default function NotFound() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: colorBgContainer }}
      className="min-w-screen min-h-dvh flex items-center justify-center"
    >
      <motion.div
        transition={{ duration: 0.35 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="border-none shadow-none p-4">
          <div className="space-y-5">
            <Image
              alt="404-error-connection"
              src={NotFoundPhoto}
              className="lg:w-[680px] lg:h-[436px] sm:w-[460px] sm:h-[280px] w-[240px] h-[160p]"
            />
            <div className="flex flex-col items-center justify-center gap-4">
              <Typography className="text-base sm:text-lg">
                ! Can Not Find The Page
              </Typography>
              <Typography className="text-base sm:text-lg">
                صفحه ای پیدا نشد !
              </Typography>
            </div>
            <div className="flex items-center justify-center gap-2 flex-col sm:gap-3 sm:flex-row">
              <Button type="primary" onClick={() => router.back()}>
                بازگشت به صفحه قبل
              </Button>
              <Button type="default" onClick={() => router.push("/dashboard")}>
                بازگشت به صفحه اصلی
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
