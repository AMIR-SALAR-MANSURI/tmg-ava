import useTmgStore from "@/app/(dashboard)/store";
import {
  TCreateType,
  useAssistantComparator,
} from "@/hooks/analizer/assistant/useAssistantComparator";
import { Button, Card, Col, Form, Input, Row, Skeleton } from "antd";
import { useForm } from "antd/lib/form/Form";
import Image from "next/image";
import { useState } from "react";

const Comparator = () => {
  const { compare, setCompare } = useTmgStore();

  const comparator = useAssistantComparator();

  const [text, setText] = useState<string>("");

  const [form] = useForm();

  const handleComparator = async (values: TCreateType) => {
    const res = await comparator.mutateAsync(values);
    if (res.isSuccess == true) {
      setCompare(res.data);
      form.resetFields();
    }
  };
  function getDirection(text: string): "rtl" | "ltr" {
    const rtlChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return rtlChars.test(text) ? "rtl" : "ltr";
  }

  const direction = getDirection(compare || "");
  return (
    <>
      <div className="w-full md:w-[30%] p-4 overflow-y-auto">
        <div className="flex-grow">
          <Form layout="vertical" form={form} onFinish={handleComparator}>
            <Row gutter={[16, 16]}>
              <Col xs={24} className="flex flex-col flex-grow">
                <Form.Item
                  label={"متن اول"}
                  name="firstText"
                  rules={[{ required: true, message: "لطفا متن را وارد کنید" }]}
                  className="flex flex-col flex-grow"
                >
                  <Input.TextArea className="!min-h-[240px]" />
                </Form.Item>
              </Col>
              <Col xs={24} className="flex flex-col flex-grow">
                <Form.Item
                  label={"متن دوم"}
                  name="secondText"
                  rules={[{ required: true, message: "لطفا متن را وارد کنید" }]}
                  className="flex flex-col flex-grow"
                >
                  <Input.TextArea className="!min-h-[240px]" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end" gutter={[16, 16]} className="mt-2">
              <Col xs={24}>
                <Button
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                  loading={comparator.isPending}
                >
                  ثبت
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="w-full md:w-[70%] h-full md:h-auto bg-gray-50 p-4 space-y-4 overflow-y-auto">
        <div className="h-[96%]">
          <Card
            title="📝 شباهت متون"
            className="h-full rounded-xl shadow-md border border-gray-200"
            bodyStyle={{
              height: "100%",
              overflowY: "auto",
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: direction === "rtl" ? "right" : "left",
            }}
          >
            {comparator.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : !compare ? (
              <div className="h-full flex flex-col gap-2 items-center justify-center">
                <Image
                  width={240}
                  height={240}
                  alt="empty-chat"
                  src="/images/empty-chat.webp"
                />
                <div className="text-center text-gray-500">
                  محتوایی وجود ندارد.
                </div>
              </div>
            ) : (
              <span dir={direction}>{compare}</span>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Comparator;
