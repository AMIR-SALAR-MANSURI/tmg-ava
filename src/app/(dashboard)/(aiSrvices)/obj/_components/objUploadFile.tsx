import CustomeForms from "@/components/forms/custome-Forms";
import { TCreateType, useServiceObject } from "@/hooks/obj/use-service-obj";
import { useForm } from "antd/lib/form/Form";
import ResultSearch from "../../../../../components/result-desc/resultSearch";
import ResultImage from "../../../../../components/result-desc/resultImage";
import useTmgStore from "@/app/(dashboard)/store";

function ObjUploadFile() {
  const [form] = useForm();
  const { setExtarctObj, extarctObj } = useTmgStore();
  const create = useServiceObject();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setExtarctObj(res.data);
      form.resetFields();
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 min-h-[390px]">
      <CustomeForms
        form={form}
        handleSubmit={handleSubmitForm}
        pending={create.isPending}
      />
      <div className="mt-6 flex flex-col sm:flex-row gap-2">
        <ResultSearch obj={extarctObj?.data} />
        <ResultImage base64={extarctObj?.base64_result_image} />
      </div>
    </div>
  );
}

export default ObjUploadFile;
