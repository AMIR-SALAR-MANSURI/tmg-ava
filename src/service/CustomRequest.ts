import baseAxios from "@/service/baseAxios";
import axios, { AxiosInstance } from "axios";

interface Props {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | string;
  axiosInstance?: AxiosInstance;
  params?: object;
  headers?: object;
  data?: any;
  notify?: boolean;
}

async function CustomRequest(props: Props) {
  const { url, method, notify, axiosInstance, params, data, headers } = props;

  const NewUrl = axiosInstance || baseAxios;

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const response = await NewUrl.request({
    url,
    headers: {
      notify,
      ...headers,
    },
    params,
    method,
    data,
    cancelToken: source.token,
  });

  const responseBody = await response.data;

  return responseBody;
}

export type { Props as customFetcherType };
export default CustomRequest;
