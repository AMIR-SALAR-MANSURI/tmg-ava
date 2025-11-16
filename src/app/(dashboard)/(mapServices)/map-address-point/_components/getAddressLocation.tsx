import useTmgStore from "@/app/(dashboard)/store";
import { TCreateType, useGetLocation } from "@/hooks/map/useGetLocation";
import { Button, Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { set } from "zod";

const GetAddressLocation = () => {
  const { addressLoc, setAddressLoc } = useTmgStore();

  const [form] = useForm<TCreateType>();

  const getLocation = useGetLocation();

  const handleSubmit = async (values: TCreateType) => {
    const res = await getLocation.mutateAsync(values);

    if (res.status === "OK") {
      setAddressLoc(res.location);
      //   form.resetFields();
    }
  };

  return (
    <>
      <div className="w-full md:w-[30%] p-4">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={24} md={24}>
              <Form.Item
                name="address"
                label="آدرس"
                rules={[{ required: true, message: "لطفا آدرس را وارد کنید" }]}
              >
                <TextArea
                  placeholder="وارد کنید"
                  autoSize={{ minRows: 8, maxRows: 10 }}
                  style={{
                    backgroundColor: "#F6F6F6",
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    padding: "12px",
                    fontSize: "14px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Button
                className="w-full"
                type="primary"
                htmlType="submit"
                // loading={create.isPending}
              >
                جستجو
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mt">
            {/* <Col xs={24} sm={24} lg={4} md={8}>
              <Button className="w-full" type="default">
                بازنشانی
              </Button>
            </Col> */}
          </Row>
        </Form>
      </div>
      <div className="w-full md:w-[70%] h-full md:h-auto bg-gray-50  p-4">
        <iframe
          src={`${
            process.env.NEXT_PUBLIC_MAP_URL
          }/map/ShowPointOnMap?zoom=14&title=${form.getFieldValue(
            "address"
          )}&latitude=${addressLoc?.y}&longitude=${
            addressLoc?.x
          }&show_ballon=0&balloon_content=${
            form.getFieldValue("address")
              ? form.getFieldValue("address")
              : "آدرس"
          }`}
          className="w-full h-full rounded-lg border-solid border-slate-400"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
};

export default GetAddressLocation;
