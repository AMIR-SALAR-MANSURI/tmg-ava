import ImageSearch from "@/components/result-desc/imageSearch";
import InputFilePond from "@/components/upload-file/input-file-pond";
import { TCreateType, useSearchFace } from "@/hooks/face/use-search-face";
import useServiceStatus from "@/hooks/face/use-service-status";
import { Button, Col, Divider, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Plus } from "lucide-react";
import { useState } from "react";
import ModalAdd from "./modal-add";
import useTmgStore from "@/app/(dashboard)/store";

function FaceDetectFile() {
  const [form] = useForm();
  const { searchFace, setSearchFace, numStatus, setNumStatus } = useTmgStore();
  const create = useSearchFace();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setSearchFace(res.data);
      form.resetFields();
      console.log(res.data);
    }
  };

  // const { data, isLoading } = useServiceStatus();

  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      {/* <CustomeForms
        form={form}
        handleSubmit={handleSubmitForm}
        pending={create.isPending}
      /> */}
      <div className="flex justify-between">
        {/* <div>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setNumStatus(data?.Count)}
          >
            درخواست وضعیت
          </Button>
          {data?.Count && <Tag color="blue">{data?.Count}</Tag>}
        </div> */}
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setOpen(true)}
          icon={<Plus />}
        >
          اضافه کردن عکس
        </Button>
      </div>
      <Divider />
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

        <ImageSearch arraySimilarity={searchFace} />
      </div>
      <ModalAdd open={open} setOpen={setOpen} />
    </div>
  );
}

export default FaceDetectFile;
