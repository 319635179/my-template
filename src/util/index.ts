import { AnyObject } from "@/interface/util.ts";

export const setLargeFrom = (item: any, num: number) => {
  const res: AnyObject = {};
  for (let i = 0; i < num; i++) {
    res[item.ddd.prop + "-" + i] = {
      ...item.ddd,
      prop: item.ddd.prop + "-" + i,
    };
  }
  return res;
};

export const getHidden = (data: { prop: string; val: any }[], eq: boolean) => {
  const e = eq ? " === " : " !== ";
  const a = eq ? " || " : " && ";
  let res = data[0].prop + e + data[0].val;
  for (let i = 1; i < data.length; i++) {
    res += a + data[i].prop + e + data[i].val;
  }
  return res;
};
