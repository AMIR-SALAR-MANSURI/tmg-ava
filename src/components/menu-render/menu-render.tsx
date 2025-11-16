import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Menu, Select } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useMenuHook } from "./menu-hook";
import { ItemMenu } from "./menu-type";
import { Bot, Eye, Map, MapIcon, ScanEye, ScanSearch } from "lucide-react";

interface Props {
  className?: string;
  onClose?: () => void;
  disabled?: boolean;
}

export default function MenuRender({ className, onClose, disabled }: Props) {
  const [items, setItems] = useState<ItemMenu[]>([
    {
      key: "1",
      url: "/dashboard",
      label: "داشبورد",
      icon: <Squares2X2Icon />,
      permission: [],
    },
    {
      key: "33",
      url: "/support/client",
      label: "پشتیبان",
      icon: <Bot />,
      permission: [],
    },
    { key: "2", type: "divider", permission: [] },
    {
      key: "3",
      url: "/ocr",
      label: "تبدیل عکس به متن",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "4",
      url: "/speech",
      label: "تبدیل گفتار به نوشتار",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "5",
      url: "/voice",
      label: "تبدیل صوت به نوشته",
      icon: <ScanSearch />,
      permission: [],
    },
    { key: "6", type: "divider", permission: [] },
    {
      key: "7",
      url: "/obj",
      label: "شناسایی اشیا",
      icon: <ScanEye />,
      permission: [],
    },
    {
      key: "8",
      url: "/gun",
      label: "شناسایی اسلحه",
      icon: <ScanEye />,
      permission: [],
    },
    {
      key: "11",
      url: "/face-reco",
      label: "تشخیص چهره",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "9",
      url: "/face",
      label: "شناسایی چهره",
      icon: <ScanEye />,
      permission: [],
    },
    { key: "10", type: "divider", permission: [] },
    {
      key: "14",
      url: "/plaque-reader",
      label: "پلاک خوان",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "12",
      url: "/vehicle",
      label: "تشخیص خودرو سنگین",
      icon: <ScanSearch />,
      disabled: true,
      permission: [],
    },
    {
      key: "13",
      url: "/plaque",
      label: "تشخیص پلاک",
      disabled: true,
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "15",
      url: "/signature-detection",
      label: "تشخیص امضا",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "16",
      url: "/detectLanguage",
      label: "تشخیص زبان از روی متن",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "23",
      url: "/comparator",
      label: "شباهت سنجی متون",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "24",
      url: "/categorize",
      label: "تعیین بندی متون",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "23",
      url: "/comparator",
      label: "شباهت سنجی متون",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "25",
      url: "/categorize",
      label: "تعیین بندی متون",
      icon: <ScanSearch />,
      permission: [],
    },
    {
      key: "17",
      url: "/discussion",
      label: "دستیار تحلیل گر هوشمند",
      icon: <Bot />,
      permission: [],
    },
    {
      key: "18",
      url: "/translate",
      label: "مترجم",
      icon: <Bot />,
      permission: [],
    },
    {
      key: "19",
      url: "/summary",
      label: "خلاصه ساز",
      icon: <Bot />,
      permission: [],
    },
    { key: "20", type: "divider", permission: [] },
    {
      key: "21",
      url: "/map-point-address",
      label: "انتخاب نقطه و نمایش آدرس",
      icon: <MapIcon />,
      permission: [],
    },
    {
      key: "22",
      url: "/map-address-point",
      label: "تبدیل آدرس یه مختصات",
      icon: <MapIcon />,
      permission: [],
    },
    {
      key: "32",
      url: "/chat-support",
      label: "پشتیبانی هوشمند شرکت بنیان آوا",
      icon: <Bot />,
      permission: [],
    },
    {
      key: "32",
      url: "/chat-srd",
      label: "پشتیبانی هوشمند درگاه ملی حمل بار",
      icon: <Bot />,
      permission: [],
    },
  ]);

  const { openKeys, setOpenKeys, selectedKey, pathname } = useMenuHook(items);

  const checker = (arr: string[] | undefined, target: string[] | undefined) => {
    if (Array.isArray(target) && target.length == 0) {
      return true;
    }

    if (!(Array.isArray(arr) && Array.isArray(target))) {
      return false;
    }

    return target.every((v) => arr.includes(v));
  };

  const renderMenuItem = useCallback(
    (item: ItemMenu): any => {
      if (
        checker(
          [],
          // [...(permissions?.map((i) => i.name as string) || [])],
          item.permission
        )
      ) {
        if (item.type === "divider") {
          return <Menu.Divider key={item.key} />;
        }
        if (item.type === "group" && item.children) {
          return (
            <Menu.ItemGroup key={item.key} title={item.label}>
              {item.children.map((child) => renderMenuItem(child))}
            </Menu.ItemGroup>
          );
        }
        if (item.children) {
          return (
            <Menu.SubMenu
              key={item.key}
              icon={item.icon}
              title={item.label}
              disabled={item.disabled}
            >
              {item.children.map((child) => renderMenuItem(child))}
            </Menu.SubMenu>
          );
        }
        return (
          <>
            {item.disabled || item.url === undefined ? (
              <Menu.Item
                disabled={item.disabled}
                key={item.key}
                icon={item.icon}
                onClick={onClose}
              >
                <span>{item.label}</span>
              </Menu.Item>
            ) : (
              <Menu.Item
                disabled={item.disabled}
                key={item.key}
                icon={item.icon}
                onClick={onClose}
              >
                <Link href={item.url}>{item.label}</Link>
              </Menu.Item>
            )}
          </>
        );
      }
    },
    [onClose, pathname] // permissions.length
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Menu
        disabled={disabled}
        mode="inline"
        className={className}
        openKeys={openKeys}
        selectedKeys={selectedKey ? [selectedKey] : []}
        onOpenChange={(keys) => setOpenKeys(keys as string[])}
      >
        {/* {getUserInfo.isPending ||
        getUserInfo.isLoading ||
        getUserInfo.isFetching ? (
          <MenuLoading />
        ) : ( */}
        {items.map((item) => renderMenuItem(item))}
        {/* )} */}
      </Menu>
    </motion.div>
  );
}
