import axios from "axios";
import modal from "@/common/modal.ts";

const instance = axios.create({
  timeout: 60000,
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
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
  const promise: Promise<any> = new Promise((resolve, reject) => {
    instance(data).then((res) => {
      resolve(res);
    });
  });
  return promise;
};

export default instance;
