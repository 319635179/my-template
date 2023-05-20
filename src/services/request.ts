import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import modal from "@/common/modal.ts";
import {store} from "@/store";
import { Request_Opt } from "@/interface/request.ts";

const instance = axios.create({
  timeout: 60000,
  withCredentials: true,
});

const userStore = store.user;

interface REQUEST_CONFIG extends InternalAxiosRequestConfig {
  options: Request_Opt;
}

// @ts-ignore
const setRequestHeaders = (header: AxiosRequestHeaders, opt: Request_Opt) => {
  const headers: AxiosRequestHeaders = header;
  if(userStore.isLogin){ // 获取token
    headers.Authorization = `Bearer ${userStore.token}`;
  }
  if (opt?.type === 'formdata'){
    headers["Content-Type"] = "multipart/form-data";
  } else if(opt?.type === "Json"){
    headers["Content-Type"] = "application/json";
  }

  return headers;
}
instance.interceptors.request.use(
    // @ts-ignore
  (config: REQUEST_CONFIG) => {
    config.headers = setRequestHeaders(config.headers, config.options);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (resp: any) => {
    resp = resp.data;
    if (!resp.success) {
      modal.warning(resp.message);
    }
    return resp;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    modal.error(error.message);
    return Promise.reject(error);
  }
);

export const request = async (data: any, options?: Request_Opt) => {
  const promise: Promise<any> = new Promise((resolve) => {
    instance({...data, options: options}).then((res) => {
      resolve(res);
    });
  });
  return promise;
};

export default instance;
