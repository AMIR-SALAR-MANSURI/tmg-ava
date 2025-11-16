import InputFilePond from "@/components/upload-file/input-file-pond";
import {
  TCreateType,
  useServicePlaque,
} from "@/hooks/plaque/use-service-plaque";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import ResultImage from "../../../../../components/result-desc/resultImage";
import ResultSearch from "../../../../../components/result-desc/resultSearch";
import useTmgStore from "@/app/(dashboard)/store";

function PlaqueReadUploadFile() {
  const [form] = useForm();
  const { setPlaque, plaque } = useTmgStore();
  const create = useServicePlaque();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setPlaque(res.data);
      form.resetFields();
    }
  };

  useEffect(() => {
    console.log(plaque?.ocr_result);
  }, [plaque?.ocr_result]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      {/* <CustomeForms
        form={form}
        handleSubmit={handleSubmitForm}
        pending={create.isPending}
      /> */}
      <div className="flex-grow">
        <Form layout="vertical" onFinish={handleSubmitForm} form={form}>
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
            {/* <Col xs={24} sm={24} lg={6} md={12}>
              <Form.Item
                valuePropName="checked"
                name="ReturnPlatesLocations"
                // label="انتخاب فایل"
              >
                <div className="flex items-center">
                  <div className="border border-gray-300 w-full h-10 flex justify-start px-2 items-center gap-2 rounded-lg">
                    <Checkbox />
                    <span className="ml-2">استخراج تصویر نشان گذاری شده</span>
                  </div>
                </div>
              </Form.Item>
            </Col> */}
            <Col xs={24} sm={24} lg={12} md={24}>
              <Form.Item
                valuePropName="checked"
                name="ReturnBase64CroppedPlates"
                // label="انتخاب فایل"
              >
                <div className="flex items-center">
                  <div className="border border-gray-300 w-full h-10 flex justify-start px-2 items-center gap-2 rounded-lg">
                    <Checkbox />
                    <span className="ml-2">
                      استخراج تصویر پلاک نشان گذاری شده
                    </span>
                  </div>
                </div>
              </Form.Item>
            </Col>
            {/* <Col xs={24} sm={24} lg={6} md={12}>
              <Form.Item
                valuePropName="checked"
                name="ReturnBase64RectifiedPlates"
                // label="انتخاب فایل"
              >
                <div className="flex items-center">
                  <div className="border border-gray-300 w-full h-10 flex justify-start px-2 items-center gap-2 rounded-lg">
                    <Checkbox />
                    <span className="ml-2">استخراج تصویر نشان گذاری شده</span>
                  </div>
                </div>
              </Form.Item>
            </Col> */}
            <Col xs={24} sm={24} lg={12} md={12}>
              <Form.Item
                valuePropName="checked"
                name="ReturnBase64OcrPlateResults"
                // label="انتخاب فایل"
              >
                <div className="flex items-center">
                  <div className="border border-gray-300 w-full h-10 flex justify-start px-2 items-center gap-2 rounded-lg">
                    <Checkbox />
                    <span className="ml-2">
                      استخراج تصویر کاراکتر های نشان گذاری شده
                    </span>
                  </div>
                </div>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12} md={24}>
              <Form.Item
                label="درصد اطمینان پلاک"
                name="ConfThresholdBoundingBox"
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
            <Col xs={24} sm={24} lg={12} md={24}>
              <Form.Item
                label="درصد اطمینان کاراکترها"
                name="ConfThresholdOcr"
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
                loading={create.isPending}
              >
                جستجو
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-2">
        <ResultSearch plaque={plaque?.ocr_result} />
        {plaque?.base64_rectified_plates && (
          <ResultImage baseArray={plaque?.base64_rectified_plates} />
        )}
        {plaque?.base64_ocr_results && (
          <ResultImage baseArray={plaque?.base64_ocr_results} />
        )}
        {plaque?.base64_cropped_plates && (
          <ResultImage baseArray={plaque?.base64_cropped_plates} />
        )}
      </div>
    </div>
  );
}

export default PlaqueReadUploadFile;
