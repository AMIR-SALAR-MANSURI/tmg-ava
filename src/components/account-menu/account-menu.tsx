import { authFn } from "@/libs/Auth/fn";
import {
  ArrowUturnRightIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Badge, Button, Card, Popover, Typography } from "antd";
import { useState } from "react";
import CustomModal from "../custom-modal/custom-modal";
import { useAuth } from "@/libs/Auth";
import { useAuthLoginHook } from "@/libs/Auth/useAuthLoginHook";

const moment = require("jalali-moment");

export default function AccountMenu() {
  const [open, setOpen] = useState<string | undefined>(undefined);

  const { handleLogout, token } = useAuthLoginHook();

  // const { signOutRedirect, isLoading } = useAuth();

  // const { data: userData, isFetching } = useGetUserInfo();

  // const userData = authFn.getData();

  // const display = `${userData?.given_name || ""} ${
  //   userData?.family_name || ""
  // }`;

  // const loginDate = new Date(authFn.getData()?.auth_time as number);

  // const jalaliDate = moment(loginDate)
  //   .locale("fa")
  //   .format("HH:mm jYYYY/jMM/jDD");

  return (
    <span className="flex flex-col gap-3 px-1.5 md:px-2 lg:px-3 py-4 md:py-5 lg:py-6">
      <Card>
        <span className="flex items-center flex-wrap gap-0 lg:gap-1 justify-between">
          <Typography className="flex text-base items-center gap-1 lg:gap-2">
            <Badge dot color="#2E7D32" offset={[35, 35]}>
              <Avatar size={40} alt="profile" icon={<UserCircleIcon />} />
            </Badge>
            <Popover
              className="w-36 truncate"
              placement="bottom"
              // content={display}
            >
              {token ? "سرویس ها فعال" : "سرویس ها غیر فعال"}
            </Popover>
          </Typography>
          {token && (
            <Button
              danger
              type="primary"
              onClick={() => setOpen("logout")}
              className="rounded-full max-h-6"
            >
              <div className="text-xs">خروج</div>
            </Button>
          )}
        </span>
      </Card>
      <div className="px-3">
        <Card>
          <div className="flex flex-col gap-3">
            <Typography className="text-base text-typography-secondary">
              اطلاعات
            </Typography>
            <div className="flex flex-col w-full gap-2">
              <span className="flex items-center justify-between">
                <Typography className="flex items-end gap-1 text-typography-secondary">
                  <ClockIcon className="size-5 " />
                  زمان ورود
                </Typography>
                {/* <div>{jalaliDate}</div> */}
                <div>12:53 1403/03/06</div>
              </span>

              <span className="flex items-center justify-between">
                <Typography className="flex items-end gap-1 text-typography-secondary">
                  <ArrowUturnRightIcon className="size-5 " />
                  ورود قبلی
                </Typography>
                <div>12:53 1403/03/06</div>
              </span>
              <span></span>
            </div>
          </div>
        </Card>
      </div>
      <CustomModal
        type="error"
        // loading={isLoading}
        open={open as boolean | undefined}
        confirmButtonText="خروج"
        title="خروج از حساب کاربری"
        onClose={() => setOpen(undefined)}
        onClick={handleLogout}
      >
        آیا قصد خروج از حساب کاربری خود را دارید؟
      </CustomModal>
    </span>
  );
}
