import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

import { XCircleIcon as XOutLine } from "@heroicons/react/24/outline";

const successConfirm = {
  className: "success-gradient",
  icon: <CheckCircleIcon className="text-primary" />,
  closable: true,
  okCancel: false,
  maskClosable: true,
  closeIcon: <XOutLine />,
  okButtonProps: { className: "w-[190px]" }
};

const errorConfirm = {
  className: "error-gradient",
  icon: <XCircleIcon fill="#F43F5E" />,
  closable: true,
  okCancel: false,
  maskClosable: true,
  closeIcon: <XOutLine />,
  okButtonProps: { className: "w-[190px]" }
};

export { successConfirm, errorConfirm };
