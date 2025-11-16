import { Button, Col, Form, Input, Modal, notification, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { ReactNode } from "react";
import { TCreateType, useAuthLogin } from "./hook/auth-login";

type Type = "basic" | "apiKey";

interface Props {
  open: boolean;
  setOpen: any;
  onSubmit: (token: string) => void;
}

const AuthModal = ({ open, setOpen, onSubmit }: Props) => {
  const types: Record<Type, ReactNode> = {
    basic: (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={24} md={24}>
          <Form.Item
            name="userName"
            label="نام کاربری"
            rules={[{ required: true, message: "لطفا فایل را انتخاب کنید" }]}
          >
            <Col span={24}>
              <Input className="w-full" />
            </Col>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} lg={24} md={24}>
          <Form.Item
            name="password"
            label="رمز عبور"
            rules={[{ required: true, message: "لطفا فایل را انتخاب کنید" }]}
          >
            <Col span={24}>
              <Input className="w-full" />
            </Col>
          </Form.Item>
        </Col>
      </Row>
    ),
    apiKey: (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={24} md={24}>
          <Form.Item
            name="token"
            label="لطفا توکن را وارد کنید"
            rules={[{ required: true, message: "لطفا فایل را انتخاب کنید" }]}
          >
            <Col span={24}>
              <Input className="w-full" />
            </Col>
          </Form.Item>
        </Col>
      </Row>
    ),
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const login = useAuthLogin();

  const [form] = useForm();
  const handleSubmitForm = async (values: TCreateType) => {
    console.log(values);

    const res = await login.mutateAsync(values);

    if (res) {
      notification.success({ message: "با موفیت وارد شدید" });
      onSubmit(res.token);
      setOpen(false);
    }
  };

  return (
    <Modal
      title="احراز هویت"
      visible={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      closeIcon={false}
      maskClosable={false}
    >
      <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
        {types["basic"]}
        <Row justify="end" gutter={[16, 16]} className="mt-2">
          <Col xs={24} sm={24} lg={4} md={12}>
            <Button className="w-full" danger onClick={handleCancel}>
              بستن
            </Button>
          </Col>
          <Col xs={24} sm={24} lg={4} md={12}>
            <Button
              loading={login.isPending}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              ثبت
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export type { Type as AuthType };
export default AuthModal;
