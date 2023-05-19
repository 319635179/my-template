import {request} from "@/services/request.ts";

export const Get = (url: string, params?: any, option?: any) =>{
  return request({
    url,
    method: 'get',
    params,
  }, option);
}

export const Post = (url: string, data?: any, option?: any) => {
  return request({
    url,
    method: 'post',
    data,
  }, option);
}