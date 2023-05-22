export type META_TYPE = "string" | "number" | "array" | "boolean" | "object";
export type VERIFY_TYPE = "ip" | "password" | "date" | "time";
export type WIDGET_TYPE =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "color"
  | "rate"
  | "slider"
  | "switch"
  | "time"
  | "component";

export interface META_ITEM {
  label: string;
  prop: string;
  type?: META_TYPE;
}

export interface NO_MUST_META_ITEM {
  label?: string;
  prop?: string;
  type?: META_TYPE;
}

export interface META_VALUE {
  label: string;
  key: any;
  value?: any; // 默认key做值，value优先级更高
}

interface FORM_STYLE {
  labelWidth?: string | number;
  color?: string;
  height?: string | number;
  [key: string]: any;
}

export interface FORM_PROPERTIES {
  [key: string]: FORM_ITEM;
}
export interface NUM_LIMIT {
  min?: number;
  max?: number;
}
export interface FORM_ATTRIBUTE {
  widget?: WIDGET_TYPE; // 控件类型，默认text
  options?: META_VALUE[];
  style?: FORM_STYLE;
  className?: string;
  column?: number; // 占用列数
  limit?: NUM_LIMIT;
  placeholder?: string;
  defaultValue?: any;
  disabled?: boolean;
  required?: boolean;
  hidden?: string; // 联动语句
  component?: any; // widget为component时，传入组件
  attribute?: { [key: string]: META_VALUE }; // 传入组件数据
  childFrom?: FORM_RENDER; // 子表单
  verifyType?: VERIFY_TYPE;
  verify?: (rule: any, value: any, callback: any) => any;
}
export interface FORM_ITEM extends META_ITEM, FORM_ATTRIBUTE {}

export interface FORM_EXTRA extends NO_MUST_META_ITEM, FORM_ATTRIBUTE {}

export interface FORM_RENDER {
  column?: number;
  labelWidth?: string | number;
  className?: string;
  style?: FORM_STYLE;
  properties: FORM_PROPERTIES;
}
