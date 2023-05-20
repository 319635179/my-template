import {request} from "@/services/request.ts";
import { Request_Opt } from "@/interface/request.ts";

export const Get = (url: string, params?: any, option?: Request_Opt) =>{
  return request({
    url,
    method: 'get',
    params,
  }, option);
}

export const Post = (url: string, data?: any, option?: Request_Opt) => {
  return request({
    url,
    method: 'post',
    data,
  }, option);
}