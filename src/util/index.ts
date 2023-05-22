import { AnyObject } from "@/interface/util.ts";

export const setLargeFrom = (item: any, num: number) =>{
  const res: AnyObject = {};
  for(let i = 0; i < num; i++){
    res[item.ddd.prop + "-" +i] = { ...item.ddd, prop:  item.ddd.prop + "-" +i};
  }
  return res;
}