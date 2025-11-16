import useTmgStore from "@/app/(dashboard)/store";
import InputFilePond from "@/components/upload-file/input-file-pond";
import { TCreateType, useServiceOcr } from "@/hooks/ocr/use-service-ocr";
import { Button, Col, Form, Row, Select } from "antd";
import ResultSearch from "../../../../../components/result-desc/resultSearch";

const UploadFile = () => {
  const { extarctOcr, setExtarctOcr } = useTmgStore();
  const [form] = Form.useForm();
  const create = useServiceOcr();
  const handleSubmit = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setExtarctOcr(res.data);
      form.resetFields();
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      <div className="flex-grow">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter={[16, 16]}>
            {/* First Column */}
            <Col xs={24} sm={24} lg={12} md={24}>
              <Form.Item
                name="language"
                label="انتخاب زبان"
                initialValue={5}
                rules={[
                  { required: true, message: "لطفا زبان را انتخاب کنید" },
                ]}
              >
                <Select
                  className="w-full"
                  size="large"
                  placeholder="انتخاب زبان"
                  allowClear
                  options={[
                    {
                      label: "English",
                      value: 0,
                    },
                    {
                      label: "Spanish",
                      value: 1,
                    },
                    {
                      label: "Arabic",
                      value: 2,
                    },
                    {
                      label: "French",
                      value: 3,
                    },
                    {
                      label: "German",
                      value: 4,
                    },
                    {
                      label: "Farsi",
                      value: 5,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} lg={12} md={24}>
              <Form.Item
                name="base64Image"
                label="انتخاب فایل"
                rules={[
                  { required: true, message: "لطفا فایل را انتخاب کنید" },
                ]}
              >
                <Col span={24}>
                  <Form.Item name="base64Image">
                    <InputFilePond
                      allowProcess={false}
                      allowFileEncode
                      // acceptedFileTypes={[
                      //   "image/jpeg",
                      //   "image/jpg",
                      //   "image/png",
                      //   "image/webp",
                      // ]}
                    />
                  </Form.Item>
                </Col>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end" gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={4} md={24}>
              <Button
                className="w-full"
                type="primary"
                htmlType="submit"
                loading={create.isPending}
              >
                جستجو
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="mt-6">
        <ResultSearch
          extract={extarctOcr?.extracted_text}
          lang={extarctOcr?.language}
        />
      </div>
    </div>
  );
};

export default UploadFile;
