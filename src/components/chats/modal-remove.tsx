import { useDeleteConserv } from "@/hooks/analizer/useDeleteConserv";
import { Button, Col, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ModalRemove = ({ uid }: { uid?: string }) => {
  const [open, setOpen] = useState<boolean>();

  const handleOk = () => {
    setOpen(undefined);
  };

  const handleCancel = () => {
    setOpen(undefined);
  };

  const searchParams = useSearchParams();

  const search = searchParams.get("uuid");

  const router = useRouter();
  const [form] = useForm();
  const deleteHistory = useDeleteConserv();

  const handleSubmitForm = async () => {
    const res = await deleteHistory.mutateAsync({ uid: uid as string });
    if (res) {
      setOpen(undefined);
      form.resetFields();

      if (search === uid) {
        router.push("/discussion");
      }
    }
  };

  return (
    <>
      <Button
        type="text"
        danger
        className="w-full"
        onClick={() => setOpen(true)}
      >
        <span className="flex w-full items-center justify-between gap-4 text-sm">
          حذف
          <Trash2 size={19} />
        </span>
      </Button>
      <Modal
        title="حذف"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
      >
        <div className="mt-3">
          <p>آبا از حذف این مورد اطمینان دارید؟</p>
        </div>
        <Row justify="end" gutter={[16, 16]} className="mt-2">
          <Col xs={24} sm={24} lg={4} md={12}>
            <Button className="w-full" danger onClick={handleCancel}>
              بستن
            </Button>
          </Col>
          <Col xs={24} sm={24} lg={4} md={12}>
            <Button
              className="w-full"
              type="primary"
              danger
              htmlType="submit"
              onClick={handleSubmitForm}
              loading={deleteHistory.isPending}
            >
              حذف
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalRemove;
