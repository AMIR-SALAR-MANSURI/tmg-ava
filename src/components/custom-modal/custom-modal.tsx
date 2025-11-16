import React from "react";
import { Button, Modal, Typography, ModalProps } from "antd";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  XCircleIcon as XCircleIconSolid,
  InformationCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

type ModalType = "info" | "warning" | "error" | "success" | "default";

interface Props {
  loading?: boolean;
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
  maskClosable?: boolean;
  onClose: (arg: any) => void;
  type?: "info" | "warning" | "error" | "success" | "default";
  confirmButtonText?: string;
}

export default function CustomModal({
  children,
  open,
  onClose,
  loading,
  onClick,
  title,
  confirmButtonText,
  type = "default",
  maskClosable = false,
  ...props
}: Props & ModalProps) {
  const styleModal = (type: ModalType): React.CSSProperties | undefined => {
    let defaultStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "12px",
    };

    switch (type) {
      case "info":
        return {
          ...defaultStyle,
          background:
            "linear-gradient(86.13deg, #FFFFFF 0%, #FFFFFF 63.24%, #CCEFFF 100%)",
        };
      case "warning":
        return {
          ...defaultStyle,
          background:
            "linear-gradient(86.13deg, #FFFFFF 0%, #FFFFFF 63.24%, #FFF7CC 100%)",
        };
      case "error":
        return {
          ...defaultStyle,
          background:
            "linear-gradient(86.13deg, #FFFFFF 0%, #FFFFFF 63.24%, #FFEAEA 100%)",
        };
      case "success":
        return {
          ...defaultStyle,
          background:
            "linear-gradient(86.13deg, #FFFFFF 0%, #FFFFFF 63.24%, #E1FFF2 100%)",
        };
      default:
        return defaultStyle;
    }
  };

  const titleIcon = (type: ModalType) => {
    const iconType = (type: ModalType) => {
      switch (type) {
        case "info":
          return <InformationCircleIcon className="text-info" />;
        case "warning":
          return <ExclamationCircleIcon className="text-warning" />;
        case "error":
          return <XCircleIconSolid className="text-error" />;
        case "success":
          return <CheckCircleIcon className="text-primary" />;
        default:
          return;
      }
    };
    return (
      type !== "default" && (
        <div className="w-10 p-1 bg-white rounded-full">{iconType(type)}</div>
      )
    );
  };

  return (
    <Modal
      {...props}
      width={600}
      onCancel={onClose}
      maskClosable={maskClosable}
      //   closeIcon={<XCircleIcon />}
      open={open as boolean | undefined}
      styles={{
        content: styleModal(type),
        header: { background: "transparent" },
      }}
      title={
        <div className="flex items-center justify-start gap-2">
          {titleIcon(type)}
          <Typography className="text-base">{title}</Typography>
        </div>
      }
      footer={[
        <Button
          htmlType="submit"
          key={"submit"}
          loading={loading}
          onClick={onClick}
          className="w-1/4"
          danger={type === "error"}
          type={type === "success" || type === "error" ? "primary" : "primary"}
        >
          {confirmButtonText ?? "تایید"}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
}
