import {
  TEditType,
  useEditConservTitle,
} from "@/hooks/analizer/useEditConservTitle";
import useGetConversation from "@/hooks/analizer/useGetConversation";
import { dataTagSymbol } from "@tanstack/react-query";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { EditIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ModalEdit = ({ uid }: { uid?: string }) => {
  const [open, setOpen] = useState<boolean>();

  const handleOk = () => {
    setOpen(undefined);
  };

  const handleCancel = () => {
    setOpen(undefined);
  };

  const [form] = useForm();
  const { data } = useGetConversation({ uid: open && uid ? uid : "" });

  const Edit = useEditConservTitle();

  const handleSubmitForm = async (values: TEditType) => {
    const res = await Edit.mutateAsync({
      title: values.title,
      uid: uid as string,
    });
    if (res) {
      setOpen(undefined);
      form.resetFields();
    }
  };

  useEffect(() => {
    if (data?.title) {
      form.setFieldValue("title", data.title);
    }
  }, [open, data, form]);

  return (
    <>
      <Button type="text" className="w-full" onClick={() => setOpen(true)}>
        <span className="flex w-full items-center justify-between gap-4 text-sm">
          ویرایش
          <EditIcon size={19} />
        </span>
      </Button>
      <Modal
        title="ویرایش"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
      >
        <div className="flex-grow mt-2">
          <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} lg={24} md={24}>
                <Form.Item
                  name="title"
                  label="عنوان"
                  rules={[
                    { required: true, message: "لطفا فایل را انتخاب کنید" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end" gutter={[16, 16]} className="mt-4">
              <Col xs={24} sm={24} lg={4} md={12}>
                <Button className="w-full" danger onClick={handleCancel}>
                  بستن
                </Button>
              </Col>
              <Col xs={24} sm={24} lg={4} md={12}>
                <Button
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                  loading={Edit.isPending}
                >
                  ثبت
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalEdit;
