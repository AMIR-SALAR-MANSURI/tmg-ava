import {
  TCreateType,
  useServiceDetectLanguage,
} from "@/hooks/detectLanguage/use-service-detect-language";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Skeleton,
  Tag,
  Typography,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import Image from "next/image";
import { useState } from "react";

const { Text, Title } = Typography;
const DetectLanguage = () => {
  const detect = useServiceDetectLanguage();

  const [lan, setLan] = useState<any>();
  const [text, setText] = useState<string>("");

  const [form] = useForm();

  const handleDetectLan = async (values: TCreateType) => {
    const res = await detect.mutateAsync(values);
    if (res.success) {
      setLan(res.data);
      form.resetFields();
    }
  };

  const getFullLanguageName = (code: string) => {
    switch (code.toLowerCase()) {
      case "en":
        return "English";
      case "uk":
        return "Ukrainian";
      case "fa":
        return "Persian (Farsi)";
      case "fi":
        return "Finnish";
      case "ar":
        return "Arabic";
      case "fr":
        return "French";
      case "es":
        return "Spanish";
      case "de":
        return "German";
      case "it":
        return "Italian";
      case "ja":
        return "Japanese";
      case "ko":
        return "Korean";
      case "zh":
        return "Chinese";
      case "ru":
        return "Russian";
      default:
        return `${code}`;
    }
  };

  return (
    <>
      <div className="w-full md:w-[30%] p-4 overflow-y-auto">
        <div className="flex-grow">
          <Form layout="vertical" form={form} onFinish={handleDetectLan}>
            <Row gutter={[16, 16]}>
              <Col xs={24} className="flex flex-col flex-grow">
                <Form.Item
                  label={"متن"}
                  name="text"
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
                  loading={detect.isPending}
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
            title="📝زبان شناسایی شده"
            className="min-h-full rounded-xl shadow-md border border-gray-200"
          >
            {detect.isPending ? (
              <Skeleton active paragraph={{ rows: 10 }} title={false} />
            ) : !lan ? (
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
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <Text strong className="block mb-2 text-gray-600">
                    زبان شناسایی شده:
                  </Text>
                  <div className="flex items-center gap-3">
                    <Tag color="blue" className="text-base px-4 py-1.5 m-0">
                      {getFullLanguageName(lan.detectedLanguage)}
                    </Tag>
                    <Tag color="blue-inverse" className="text-base">
                      {lan.detectedLanguage}
                    </Tag>
                  </div>
                </div>

                <Card
                  title="متن ثبت شده"
                  bordered={false}
                  className="shadow-sm h-full"
                >
                  <Text className="text-base whitespace-pre-wrap">{text}</Text>
                </Card>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default DetectLanguage;
