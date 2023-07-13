import {MockMethod} from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    statusCode: 200,
    response: () =>{
      return {
        code: 200,
        message: "success",
        success: true,
        data: {
          name: "管理员",
          username: "admin",
          token: "fhiowuahoHSOUhdf8932ufbhOHNF938f23iou",
        }
      }
    }
  }, {
    url: "/aaa",
    method: "post",
    statusCode: 200,
    response: (aaa) =>{
      let res = [];
      if(aaa.body.ddd === 26) {
        res = [
          { label: "a", key: 1 },
          { label: "b", key: 2 },
        ]
      } else {
        res = [
          { label: "c", key: 1 },
          { label: "d", key: 2 },
        ]
      }
      return {
        code: 200,
        message: "success",
        success: true,
        data: res
      }
    }
  }
] as MockMethod[];