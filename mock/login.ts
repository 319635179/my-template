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
  }
] as MockMethod[];