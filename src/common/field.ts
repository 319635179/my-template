import { FORM_EXTRA, FORM_ITEM, META_ITEM } from "@/interface/field.ts";

export const getFormItem = (meta: META_ITEM, extra?: FORM_EXTRA ) => {
  const res: FORM_ITEM = { ...meta, ...extra };
  return {
    [res.prop]: res,
  };
};
