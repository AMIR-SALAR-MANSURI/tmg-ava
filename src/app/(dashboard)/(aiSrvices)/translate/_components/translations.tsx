import {
  TCreateType,
  useAssistantTranslate,
} from "@/hooks/analizer/assistant/useAssistantTranslate";
import { Button, Card, Col, Form, Input, Row, Select, Skeleton } from "antd";
import { useForm } from "antd/lib/form/Form";
import useGetAvailableLna from "@/hooks/analizer/assistant/useGetAvailableLna";
import Image from "next/image";
import useTmgStore from "@/app/(dashboard)/store";

const TranslationSection = () => {
  const { translates, setTranslate } = useTmgStore();

  const translate = useAssistantTranslate();

  const [form] = useForm();

  const handleTranslate = async (values: TCreateType) => {
    const res = await translate.mutateAsync(values);
    if (res.isSuccess == true) {
      setTranslate(res.data);
      form.resetFields();
    }
  };
  function getDirection(text: string): "rtl" | "ltr" {
    const rtlChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return rtlChars.test(text) ? "rtl" : "ltr";
  }

  const direction = getDirection(translates || "");
  const { options } = useGetAvailableLna();
  return (
    <>
      <div className="w-full md:w-[30%] p-4 overflow-y-auto">
        {/* <div className="flex flex-col gap-4 h-full">
          <div className="flex-grow flex gap-2 flex-col">
            <label className="font-medium">متن</label>
            <Input.TextArea
              className="flex-grow"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <Button
            className="w-full"
            type="primary"
            htmlType="submit"
            onClick={handleSummary}
            loading={summarize.isPending}
          >
            ثبت
          </Button>
        </div> */}
        <div className="flex-grow">
          <Form layout="vertical" form={form} onFinish={handleTranslate}>
            <Row gutter={[16, 16]}>
              <Col xs={24}>
                <Form.Item
                  name="sourceLanguage"
                  label="انتخاب زبان مبدا"
                  rules={[
                    {
                      required: true,
                      message: "لطفا زبان مبدا را انتخاب کنید",
                    },
                  ]}
                >
                  <Select
                    className="w-full"
                    size="large"
                    placeholder="انتخاب زبان مبدا"
                    allowClear
                    options={options}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  name="targetLanguage"
                  label="انتخاب زبان مقصد"
                  rules={[
                    {
                      required: true,
                      message: "لطفا زبان مقصد را انتخاب کنید",
                    },
                  ]}
                >
                  <Select
                    className="w-full"
                    size="large"
                    placeholder="انتخاب زبان"
                    allowClear
                    options={options}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} className="flex flex-col flex-grow">
                <Form.Item
                  label={"متن"}
                  name="content"
                  rules={[
                    { required: true, message: "لطفا زبان را وارد کنید" },
                  ]}
                  className="flex flex-col flex-grow"
                >
                  <Input.TextArea className="!min-h-[370px]" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end" gutter={[16, 16]} className="mt-2">
              <Col xs={24}>
                <Button
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                  loading={translate.isPending}
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
            title="📝 متن ترجمه شده"
            className="h-full rounded-xl shadow-md border border-gray-200"
            bodyStyle={{
              height: "100%",
              overflowY: "auto",
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: direction === "rtl" ? "right" : "left",
            }}
          >
            {translate.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : !translates ? (
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
              <span dir={direction}>{translates}</span>
            )}
            {/* {!translates ? (
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
            ) : translate.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : (
              <span dir={direction}>{translates}</span>
            )} */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default TranslationSection;
