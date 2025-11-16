import { Button, Col, Form, Row } from "antd";
import ResultSearch from "../../../../../components/result-desc/resultSearch";
import InputFilePond from "@/components/upload-file/input-file-pond";
import { TCreateType, useServiceVoice } from "@/hooks/voice/use-service-voice";
import useTmgStore from "@/app/(dashboard)/store";
import { useEffect } from "react";

const VoiceUploadFile = () => {
  const { extarctVoice, setExtarctVoice } = useTmgStore();
  const [form] = Form.useForm();
  const create = useServiceVoice();
  const handleSubmit = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);

    if (res.success) {
      setExtarctVoice(res.data);
      form.resetFields();
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      <div className="flex-grow">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
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
                      acceptedFileTypes={[
                        "audio/mpeg", // MP3
                        "audio/wav", // WAV
                        "audio/ogg", // OGG
                        "audio/mp4", // MP4 (audio-only)
                        "audio/aac", // AAC
                      ]}
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
                بارگذاری فایل{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="mt-6">
        <ResultSearch voice={extarctVoice} />
      </div>
    </div>
  );
};

export default VoiceUploadFile;
