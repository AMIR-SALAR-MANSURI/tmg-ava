import InputFilePond from "@/components/upload-file/input-file-pond";
import { Button, Checkbox, Col, Form, FormInstance, Input, Row } from "antd";

interface Props {
  form: FormInstance;

  handleSubmit: (value: any) => void;
  pending: any;
}

function CustomeForms(prop: Props) {
  return (
    <div className="flex-grow">
      <Form layout="vertical" form={prop.form} onFinish={prop.handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} lg={24} md={24}>
            <Form.Item
              name="File"
              label="انتخاب فایل"
              rules={[
                {
                  required: true,
                  message: "لطفا فایل را انتخاب کنید",
                },
              ]}
            >
              <Col span={24}>
                <Form.Item name="File">
                  <InputFilePond storeAsFile />
                </Form.Item>
              </Col>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={12} md={24}>
            <Form.Item
              valuePropName="checked"
              name="ReturnBase64Result"
              // label="انتخاب فایل"
            >
              <div className="flex items-center">
                <div className="border border-gray-300 w-full h-10 flex justify-start px-2 items-center gap-2 rounded-lg">
                  <Checkbox />
                  <span className="ml-2">استخراج تصویر نشان گذاری شده</span>
                </div>
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={12} md={24}>
            <Form.Item
              name="Confidence"
              rules={[
                { required: true, message: "لطفا درصد اطمینان را وارد کنید" },
                {
                  validator: (_, value) => {
                    if (value <= -1 || value >= 1.1) {
                      return Promise.reject(
                        "مقدار باید به صورت اعشاری و بین 0 و 1 باشد"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
              initialValue={0.5}
            >
              <Input
                type="number"
                placeholder="درصد اطمینان را وارد نمایید"
                step="0"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end" gutter={[16, 16]} className="mt-2">
          <Col xs={24} sm={24} lg={4} md={24}>
            <Button
              className="w-full"
              type="primary"
              htmlType="submit"
              loading={prop.pending}
            >
              جستجو
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default CustomeForms;
