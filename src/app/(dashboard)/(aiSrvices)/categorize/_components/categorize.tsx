import useTmgStore from "@/app/(dashboard)/store";
import { useAssistantCategorizer } from "@/hooks/analizer/assistant/useAssistantCategorizer";
import {
  TCreateType,
  useAssistantTranslate,
} from "@/hooks/analizer/assistant/useAssistantTranslate";
import { Button, Card, Col, Form, Input, Row, Skeleton } from "antd";
import { useForm } from "antd/lib/form/Form";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Categorize = () => {
  const { category, setCategory } = useTmgStore();

  const categorize = useAssistantCategorizer();

  const [text, setText] = useState<string>("");

  const [form] = useForm();

  const handleCategorize = async (values: TCreateType) => {
    const res = await categorize.mutateAsync(values);
    if (res.isSuccess == true) {
      setCategory(res.data);
      // form.resetFields();
    }
  };
  function getDirection(text: string): "rtl" | "ltr" {
    const rtlChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return rtlChars.test(text) ? "rtl" : "ltr";
  }

  const direction = getDirection(category || "");
  return (
    <>
      <div className="w-full md:w-[30%] p-4 overflow-y-auto">
        <div className="flex-grow">
          <Form layout="vertical" form={form} onFinish={handleCategorize}>
            <Row gutter={[16, 16]}>
              <Col xs={24} className="flex flex-col flex-grow">
                <Form.Item
                  label={"متن"}
                  name="content"
                  rules={[{ required: true, message: "لطفا متن را وارد کنید" }]}
                  className="flex flex-col flex-grow"
                >
                  <Input.TextArea
                    className="!min-h-[540px]"
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end" gutter={[16, 16]} className="mt-2">
              <Col xs={24}>
                <Button
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                  loading={categorize.isPending}
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
            title="📝 دسته بندی"
            className="h-full rounded-xl shadow-md border border-gray-200 overflow-y-auto"
            bodyStyle={{
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: direction === "rtl" ? "right" : "left",
            }}
          >
            {categorize.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : !category ? (
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
              <span dir={direction}>
                <div className="h-full prose prose-sm prose-table:border prose-td:p-2 prose-th:bg-gray-100 max-w-none test overflow-x-auto">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({
                        node,
                        inline,
                        className,
                        children,
                        ...props
                      }: any) {
                        return inline ? (
                          <code
                            className="bg-gray-900 text-white px-1 rounded"
                            {...props}
                          >
                            {children}
                          </code>
                        ) : (
                          <pre
                            className="bg-gray-900 text-white p-2 rounded overflow-auto"
                            dir="ltr"
                          >
                            <code
                              className={`${className} text-white`}
                              {...props}
                            >
                              {children}
                            </code>
                          </pre>
                        );
                      },
                    }}
                  >
                    {category}
                  </ReactMarkdown>
                </div>
              </span>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Categorize;
