import { FORM_EXTRA, FORM_ITEM, META_ITEM } from "@/interface/field.ts";
import {
  REG_ACCOUNT,
  REG_DBNAME,
  REG_EMAIL,
  REG_ENAME,
  REG_IP,
  REG_PHONE,
} from "@/util/validate.ts";
import { shallowRef } from "vue";

export const getFormItem = (meta: META_ITEM, extra?: FORM_EXTRA) => {
  const res: FORM_ITEM = { ...meta, ...extra };
  if (!res.placeholder) {
    res.placeholder = "请输入" + res.label;
  }

  if (res.component) {
    res.component = shallowRef(res.component);
  }
  return {
    [res.prop]: res,
  };
};

export const getAction = (widget: any) => {
  let action = "输入";
  if (widget && (widget === "component" || widget.match("select"))) {
    action = "选择";
  }
  return action;
};
export const getRules = (config: any) => {
  const rules = config.rules || [];
  const format = config.format;
  let message = config.label + "格式错误";
  let widget = config.widget;
  let trigger = widget === "component" ? "change" : "blur";
  let required = config.required;
  let action = getAction(widget);
  if (required) {
    rules.push({
      required: true,
      message: `请${action}${config.label}`,
      trigger,
    });
  }
  switch (format) {
    case "phone":
      rules.push({ pattern: REG_PHONE, message, trigger });
      break;
    case "email":
      rules.push({ pattern: REG_EMAIL, message, trigger });
      break;
    case "ip":
      rules.push({ pattern: REG_IP, message, trigger });
      break;
    case "account":
      message = config.label + "格式错误，请输入5~64位的字母和数字组合";
      rules.push({ pattern: REG_ACCOUNT, message, trigger });
      break;
    case "ename":
      message = config.label + "格式错误，只能输入英文字母、数字和英文符号";
      rules.push({ pattern: REG_ENAME, message, trigger });
      break;
    case "dbname":
      message = config.label + "格式错误，只能输入英文字母、数字和下划线“_”";
      rules.push({ pattern: REG_DBNAME, message, trigger });
      break;
    default:
      break;
  }
  return rules;
};
