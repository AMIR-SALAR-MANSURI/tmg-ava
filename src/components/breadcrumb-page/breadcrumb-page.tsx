"use client";

import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import useOpenDrawer from "@/layouts/open-drawer-menu";
import { Breadcrumb, Button } from "antd";
import { motion } from "framer-motion";
import {
  ArrowLongLeftIcon,
  Bars3Icon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

interface Props {
  BreadcrumbList: {
    label: string;
    pathName?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  title?: string;
  backLink?: string;
  actions?: React.ReactNode[];
  children: React.ReactNode;
}

export default function BreadcrumbPage({
  BreadcrumbList,
  backLink,
  title,
  actions,
  children,
}: Props) {
  const [showChildren, setShowChildren] = useState(false);

  const { open, setOpen } = useOpenDrawer();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setShowChildren(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  const breadcrumbItems = BreadcrumbList.map((item, index) => ({
    key: index,
    title: item.pathName ? (
      <Link
        href={item.pathName}
        className="flex items-center text-typography-secondary h-full justify-center gap-2"
      >
        {item.icon && (
          <item.icon className="hidden sm:block size-4 lg:size-5" />
        )}
        {item.label}
      </Link>
    ) : (
      <motion.div
        exit={{ x: -15 }}
        transition={{ duration: 0.4 }}
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="flex items-center h-full justify-center text-primary gap-2">
          {item.icon && (
            <item.icon className="hidden sm:block size-4 lg:size-5" />
          )}
          {item.label}
        </div>
      </motion.div>
    ),
  }));

  return (
    <div className="h-full w-full flex flex-col gap-8">
      <span className="flex w-full items-center justify-between h-6 lg:h-8">
        <motion.div
          className="flex items-center gap-2"
          exit={{ x: -15 }}
          transition={{ duration: 0.4 }}
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="hidden max-md:block">
            <Button onClick={() => setOpen(!open)}>
              <Bars3Icon className="size-4 lg:size-5" />
            </Button>
          </div>
          <Breadcrumb
            separator={
              <ChevronLeftIcon className="text-typography-secondary size-3 lg:size-4 lg:mt-1 h-full" />
            }
            className="text-sm h-full lg:text-base"
            items={breadcrumbItems}
          ></Breadcrumb>
        </motion.div>
        <div className="flex flex-wrap h-full flex-row-reverse justify-start gap-2.5">
          <motion.div
            exit={{ x: -15 }}
            transition={{ duration: 0.4 }}
            initial={{ x: 15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {backLink && (
              <Link href={backLink} className="hidden sm:block">
                <Button
                  type="link"
                  iconPosition="end"
                  icon={<ArrowLongLeftIcon />}
                  className="text-typography-secondary"
                >
                  بازگشت
                </Button>
              </Link>
            )}
          </motion.div>
          {actions?.map((item, index) => (
            <motion.div
              key={index}
              exit={{ x: -15 }}
              transition={{ duration: 0.4 }}
              initial={{ x: 15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </span>
      <motion.div
        exit={{ x: -15 }}
        transition={{ duration: 0.4 }}
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="text-lg text-typography font-semibold">{title}</div>
      </motion.div>
      {showChildren && (
        <motion.div
          exit={{ x: -15 }}
          transition={{ duration: 0.4 }}
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="w-full h-[calc(100vh-192px)] pl-1 md:pl-1.5 md:h-[calc(100vh-200px)] lg:h-[calc(100vh-224px)] overflow-y-auto space-y-8">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}
