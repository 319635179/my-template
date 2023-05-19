import axios, {InternalAxiosRequestConfig} from "axios";
import modal from "@/common/modal.ts";
import {AnyObject} from "@/interface/util.ts";
import {store} from "@/store";

const instance = axios.create({
  timeout: 60000,
  withCredentials: true,
});

const userStore = store.user;

interface REQUEST_CONFIG extends InternalAxiosRequestConfig {
  options: AnyObject
}
instance.interceptors.request.use(
    // @ts-ignore
  (config: REQUEST_CONFIG) => {
    console.log(config)
    if(userStore.isLogin){ // 获取token
      config.headers.Authorization = `Bearer ${userStore.token}`;
    }

    const opt = config.options;
    if (opt.type === 'formdata'){
      config.headers["Content-Type"] = "multipart/form-data";
    } else if(opt.type === "Json"){
      config.headers["Content-Type"] = "application/json";
    }
    console.log("no options", config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (resp: any) => {
    console.log("service --- ", resp)
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

export const request = async (data: any, options?: any) => {
  const promise: Promise<any> = new Promise((resolve) => {
    instance({...data, options: options}).then((res) => {
      resolve(res);
    });
  });
  return promise;
};

export default instance;
