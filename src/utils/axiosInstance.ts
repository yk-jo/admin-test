import AlertModal from "@/components/Modal/AlertModal";
import useModal from "@/hooks/useModal";
import PathContants from "@/routers/pathConstants";
import { useAuthStore } from "@/stores/authStore";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import qs from "qs";
import { useCallback } from "react";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

// App.tsx 에서 반드시 호출해야 함
export function useAxiosInterceptor() {
  const { accessToken, tokenType, clear } = useAuthStore();
  const { openModal } = useModal();

  const requestInterceptor = useCallback(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && tokenType && config.headers) {
        config.headers.Authorization = `${tokenType} ${accessToken}`;
      }
      return config;
    },
    [accessToken]
  );

  const responseErrorInterceptor = useCallback(
    (error: AxiosError<any>) => {
      if (
        error.response?.status === 403 &&
        error.response?.data.code === "IS_FORBIDDEN"
      ) {
        openModal(AlertModal, {
          key: "ERROR_403",
          message: error.response?.data.message,
          onSubmit: () => {
            clear();
            window.location.href = PathContants.Login;
          },
        });
      }
      return Promise.reject(error);
    },
    [accessToken]
  );
  const register = useCallback(() => {
    instance.interceptors.request.use(requestInterceptor, function (error) {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      return response;
    }, responseErrorInterceptor);
  }, [accessToken]);

  register();
}

export default instance;
