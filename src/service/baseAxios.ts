import { ResponseType } from "@/types/responseType";
import { getErrorMessage } from "@/utils/handleMessage";
import getBaseURL from "@/utils/utils";
import { NotificationInstance } from "antd/es/notification/interface";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
// import { signOut } from "next-auth/react";

const baseAxios: AxiosInstance = axios.create({
  baseURL: getBaseURL(process.env.NEXT_PUBLIC_API_URL),
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    "Api-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export const mapAxios: AxiosInstance = axios.create({
  baseURL: getBaseURL(process.env.NEXT_PUBLIC_MAP_URL),
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const analizer: AxiosInstance = axios.create({
  baseURL: getBaseURL(process.env.NEXT_PUBLIC_ANALIZER_URL),
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const support: AxiosInstance = axios.create({
  baseURL: getBaseURL(process.env.NEXT_PUBLIC_SUPPORT_URL),
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

let interceptorId: number | null = null;

let interceptorAnalizerId: number | null = null;

let interceptorSupportId: number | null = null;

const baseAxiosResponseInterceptor = (notification: NotificationInstance) => {
  if (interceptorId !== null) {
    baseAxios.interceptors.response.eject(interceptorId);
  }
  interceptorId = baseAxios.interceptors.response.use(
    (res: AxiosResponse<ResponseType<{}>>) => {
      const success = res.data.success;
      const notify = res.config.headers.notify;
      const status = res.status;

      if (status >= 200 && status < 300 && notify && success) {
        notification.success({
          message: res.data.message || "عملیات با موفقیت انجام شد.",
        });

        return res;
      }

      if (status >= 300 || !success) {
        notification.error({
          message: getErrorMessage(status) || res.data.message,
        });
        return res;
      }

      return res;
    },
    function (error: AxiosError<ResponseType<{}>>) {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        const errorMessage = "زمان شما به پایان رسیده مجدد وراد سامانه شوید.";
        notification.warning({
          message: errorMessage,
        });
      }
      notification.error({
        message:
          getErrorMessage(error?.response?.status) ||
          `خطایی رخ داده است ${error.message}`,
      });
      return Promise.reject(error);
    }
  );

  if (interceptorAnalizerId !== null) {
    analizer.interceptors.response.eject(interceptorAnalizerId);
  }
  interceptorAnalizerId = analizer.interceptors.response.use(
    (res: AxiosResponse<ResponseType<{}>>) => {
      const isSuccess = res.data.isSuccess;
      const notify = res.config.headers.notify;
      const status = res.status;

      if (status >= 200 && status < 300 && notify && isSuccess) {
        notification.success({
          message: res.data.message || "عملیات با موفقیت انجام شد.",
        });

        return res;
      }

      if (status >= 300 || !isSuccess) {
        notification.error({
          message: getErrorMessage(status) || res.data.message,
        });
        return res;
      }

      return res;
    },
    function (error: AxiosError<ResponseType<{}>>) {
      const status = error.response?.status;

      console.log(error);

      if (status === 401 || status === 403) {
        // authService().logout();
        localStorage.removeItem("token");
        const errorMessage = "زمان شما به پایان رسیده مجدد وراد سامانه شوید.";
        notification.warning({
          message: errorMessage,
        });
      }
      notification.error({
        message:
          getErrorMessage(error?.response?.status) ||
          `خطایی رخ داده است ${error.message}`,
      });
      return Promise.resolve(error);
    }
  );
  if (interceptorSupportId !== null) {
    support.interceptors.response.eject(interceptorSupportId);
  }
  interceptorSupportId = support.interceptors.response.use(
    (res: AxiosResponse<ResponseType<{}>>) => {
      const isSuccess = res.data.isSuccess;
      const notify = res.config.headers.notify;
      const status = res.status;

      if (status >= 200 && status < 300 && notify && isSuccess) {
        notification.success({
          message: res.data.message || "عملیات با موفقیت انجام شد.",
        });

        return res;
      }

      if (status >= 300 || !isSuccess) {
        notification.error({
          message: getErrorMessage(status) || res.data.message,
        });
        return res;
      }

      return res;
    },
    function (error: AxiosError<ResponseType<{}>>) {
      const status = error.response?.status;

      console.log(error);

      if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        const errorMessage = "زمان شما به پایان رسیده مجدد وراد سامانه شوید.";
        notification.warning({
          message: errorMessage,
        });
      }
      notification.error({
        message:
          getErrorMessage(error?.response?.status) ||
          `خطایی رخ داده است ${error.message}`,
      });
      return Promise.resolve(error);
    }
  );
};

let requestInterceptorId: number | null = null;

// const baseAxiosRequestInterceptor = (
//   token: string,
//   source: CancelTokenSource,
//   onAuthRequired: (conf: InternalAxiosRequestConfig<any>) => void
// ) => {
//   if (requestInterceptorId !== null) {
//     baseAxios.interceptors.request.eject(requestInterceptorId);
//   }

//   requestInterceptorId = baseAxios.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       if (config.url == _auth.login.url) {
//         return config;
//       }
//       config.headers.Authorization = `bearer ${token}`;
//       if (!token) {
//         onAuthRequired(config);
//       }
//       config.cancelToken = source.token;
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
// };

export { baseAxiosResponseInterceptor };
export default baseAxios;
