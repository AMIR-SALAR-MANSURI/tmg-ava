import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { _face } from "@/constants/face";

const { url, type, response, method } = _face.search;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useSearchFace = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<ResponseType> =>
      CustomRequest({ url, method, data ,  headers: { "Content-Type": "multipart/form-data" },notify:true
 }),
  });

export type { TCreateType, TCreateRes };
export { useSearchFace };
