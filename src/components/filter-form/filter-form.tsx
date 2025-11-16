import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormInstance,
  FormProps,
  Row,
  Spin,
  Typography,
} from "antd";
import { AnimatePresence, motion } from "framer-motion";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Props<T> {
  loading?: boolean;
  children?: React.ReactNode;
  onSubmit?: (value?: T) => void;
  initialShowFilter?: boolean;
  isCloseable?: boolean;
  form?: FormInstance<any>;
  onFilterClose?: () => void;
  formProps?: FormProps;
}

export default function AdvancedSearchFilter<T>({
  children,
  initialShowFilter = false,
  isCloseable = true,
  onSubmit,
  loading,
  form,
  formProps,
  onFilterClose,
}: Props<T>) {
  const [showFilter, setShowFilter] = useState<boolean>(initialShowFilter);

  return (
    <Card>
      <div className="flex w-full items-center max-h-5 justify-between">
        <span
          onClick={isCloseable ? () => setShowFilter(!showFilter) : undefined}
          className={`flex items-center gap-1 md:gap-2 ${
            isCloseable ? "cursor-pointer" : ""
          }`}
        >
          <AdjustmentsHorizontalIcon className="size-5" />
          <Typography className="lg:text-base select-none">
            جستجوی پیشرفته
          </Typography>
        </span>
        {isCloseable && showFilter && (
          <Button
            type="link"
            iconPosition="end"
            icon={<XMarkIcon />}
            onClick={
              onFilterClose
                ? () => {
                    setShowFilter(false);
                    onFilterClose();
                  }
                : () => setShowFilter(false)
            }
          >
            حذف فیلتر
          </Button>
        )}
      </div>
      <div>
        <AnimatePresence initial={false}>
          {showFilter && (
            <motion.div
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  type: "just",
                  bounce: 0.4,
                  delay: 0.03,
                },
              }}
              transition={{
                duration: 0.3,
                type: "just",
                bounce: 0,
                delay: 0.01,
              }}
            >
              {children && (
                <Spin spinning={loading}>
                  <Form
                    {...formProps}
                    form={form}
                    className="pt-5"
                    layout="vertical"
                    onFinish={onSubmit}
                  >
                    <Row gutter={[16, 16]}>{children}</Row>
                  </Form>
                </Spin>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
