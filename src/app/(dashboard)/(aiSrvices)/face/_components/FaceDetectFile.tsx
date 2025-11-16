import InputFilePond from "@/components/upload-file/input-file-pond";
import { useServiceFace } from "@/hooks/face/use-service-face";
import { TCreateType } from "@/hooks/obj/use-service-obj";
import { Button, Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import ResultImage from "../../../../../components/result-desc/resultImage";
import useTmgStore from "@/app/(dashboard)/store";

function FaceDetectFile() {
  const [form] = useForm();
  const { setFace, face } = useTmgStore();
  const create = useServiceFace();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setFace(res.data);
      console.log(res.data);

      form.resetFields();
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      {/* <CustomeForms
        form={form}
        handleSubmit={handleSubmitForm}
        pending={create.isPending}
      /> */}
      <div className="flex-grow">
        <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
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
                      acceptedFileTypes={["image/jpeg", "image/jpg"]}
                    />
                  </Form.Item>
                </Col>
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
        {/* <ResultSearch obj={face?.data} /> */}

        <ResultImage base64={face?.face} />
      </div>
    </div>
  );
}

export default FaceDetectFile;
