"use client";

import { TCreateType } from "@/libs/Auth/hook/auth-login";
import { useAuthLoginHook } from "@/libs/Auth/useAuthLoginHook";
import { Button, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const { handleLogin, isPending, token } = useAuthLoginHook();
  const router = useRouter();

  const handleSubmit = async (values: TCreateType) => {
    await handleLogin(values);
  };

  useEffect(() => {
    if (token) router.push("/");
  }, [token]);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[60%] bg-black text-white h-[40vh] md:h-full relative">
        <Image
          fill
          alt="Login Background"
          src="/images/login2.jpg"
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>

      <div className="w-full md:w-[40%] bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4 md:p-8">
        <div className="flex flex-col text-center mb-8 md:mb-12 items-center justify-center space-y-10">
          <div className="bg-white p-2 rounded-full shadow-md">
            <Image
              width={80}
              height={80}
              alt="Company Logo"
              src="/icon/main.png"
              priority
              className="drop-shadow-sm rounded-full"
            />
          </div>
          <span className="font-semibold text-lg text-gray-800 space-y-16">
            <strong className="">(TMG)</strong> ورود به حساب کاربری سامانه
          </span>
        </div>

        <div
          dir="rtl"
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm space-y-16"
        >
          <Form className="space-y-8" layout="vertical" onFinish={handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  label="نام کاربری"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "لطفاً نام کاربری را وارد کنید",
                    },
                  ]}
                  labelCol={{ className: "text-right" }}
                >
                  <Input size="large" className="rounded-lg" />
                </Form.Item>
              </Col>
              <Col span={24} className="py-1">
                <Form.Item
                  label="رمز عبور"
                  name="password"
                  rules={[
                    { required: true, message: "لطفاً رمز عبور را وارد کنید" },
                  ]}
                  labelCol={{ className: "text-right" }}
                >
                  <Input.Password size="large" className="rounded-lg" />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Button
                  size="large"
                  className="w-full min-h-10 rounded-lg shadow-md"
                  type="primary"
                  htmlType="submit"
                  loading={isPending}
                >
                  ورود
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
