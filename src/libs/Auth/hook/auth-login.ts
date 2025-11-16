import { _ocr } from "@/constants/ocr";
import CustomRequest from "@/service/CustomRequest";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ResponseType } from "@/types/responseType";
import { _obj } from "@/constants/obj";
import { _gun } from "@/constants/gun";
import { _auth } from "../constant/auth";

const { url, type, response, method } = _auth.login;

type TCreateType = z.infer<typeof type>;
type TCreateRes = z.infer<typeof response>;

const useAuthLogin = () =>
  useMutation({
    mutationFn: (data: TCreateType): Promise<{ token: string }> =>
      CustomRequest({
        url,
        method,
        data,
        notify: false,
      }),
  });

export type { TCreateType, TCreateRes };
export { useAuthLogin };
