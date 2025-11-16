import { Modal } from "antd";
import { useRouter } from "next-nprogress-bar";
import { errorConfirm, successConfirm } from "@/utils/modal-configs";
import { ResponseType } from "@/types/responseType";

interface ActionMutation {
  confirm: {
    title: string;
    content?: string;
    type: "error" | "success";
  };
  redirectOnSuccess?: string;
  mutationFn: () => Promise<ResponseType<any>>;
}

export const useActionMutation = () => {
  const router = useRouter();

  const [modal, contextHolder] = Modal.useModal();

  const handleMutation = (arg: ActionMutation) => {
    const config =
      arg.confirm.type == "success" ? successConfirm : errorConfirm;

    modal.confirm({
      ...config,
      ...arg.confirm,
      onOk: () =>
        arg
          .mutationFn()
          .then(
            (res) => arg.redirectOnSuccess && router.push(arg.redirectOnSuccess)
          ),
    });
  };

  return { handleMutation, contextHolder };
};
