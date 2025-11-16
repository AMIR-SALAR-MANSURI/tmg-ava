import CustomeForms from "@/components/forms/custome-Forms";
import { TCreateType, useServiceGun } from "@/hooks/gun/use-service-gun";
import { useForm } from "antd/lib/form/Form";
import ResultSearch from "../../../../../components/result-desc/resultSearch";
import useTmgStore from "../../../store";
import ResultImage from "../../../../../components/result-desc/resultImage";

function GunUploadFile() {
  const [form] = useForm();
  const { extarctGun, setExtarctGun } = useTmgStore();
  const create = useServiceGun();
  const handleSubmitForm = async (values: TCreateType) => {
    const res = await create.mutateAsync(values);
    if (res.success) {
      setExtarctGun(res.data);
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
        <ResultSearch obj={extarctGun?.data} />
        <ResultImage base64={extarctGun?.base64_result_image} />
      </div>
    </div>
  );
}

export default GunUploadFile;
