import { useState } from "react";
import { Button, Col, Form, Modal, Row, Typography } from "antd";
import InputFilePond from "@/components/upload-file/input-file-pond";
import { useForm } from "antd/es/form/Form";
import { TCreateType, useAddFace } from "@/hooks/face/use-add-face";

const ModalAdd = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [form] = useForm();
  const create = useAddFace();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setOpen(false);
      form.resetFields();
    }
  };

  return (
    <Modal
      title="اضافه کردن عکس"
      visible={open}
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
                name="File"
                label="انتخاب فایل"
                rules={[
                  { required: true, message: "لطفا فایل را انتخاب کنید" },
                ]}
              >
                <Col span={24}>
                  <Form.Item name="File">
                    <InputFilePond
                      storeAsFile
                      acceptedFileTypes={["image/jpeg", "image/jpg"]}
                    />
                  </Form.Item>
                </Col>
              </Form.Item>
            </Col>
          </Row>
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
                htmlType="submit"
                loading={create.isPending}
              >
                ثبت
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
