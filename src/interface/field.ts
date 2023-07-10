import { FormItemRule } from "./element.ts";

export type META_TYPE = "string" | "number" | "array" | "boolean" | "object";
export type FORMAT_TYPE = "ip" | "password" | "date" | "time";
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

export interface TABLE_OPTIONS {
  open?: boolean;
  width?: string | number;
  minWidth?: string | number;
}

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

interface TABLE_STYLE {
  height?: string | number;
  maxHeight?: string | number;
  [key: string]: any;
}

interface TABLE_COLUMNS_STYLE {
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  color?: string;
}

export interface FORM_PROPERTIES {
  [key: string]: FORM_ITEM;
}
export interface TABLE_PROPERTIES {
  [key: string]: TABLE_ITEM;
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
  attribute?: { [key: string]: any }; // 传入组件数据
  format?: FORMAT_TYPE;
  rules?: FormItemRule[];
  child?: FORM_RENDER;
}

export interface TABLE_ATTRIBUTE {
  widget?: "component" | "text";
  width?: number | string;
  style?: TABLE_COLUMNS_STYLE;
  className?: string;
  labelClassName?: string;
  defaultValue?: any;
  format?: FORMAT_TYPE;
  formatter?: (row: any, column: any, cellValue: any, index: any) => string;
  align?: "left" | "center" | "right"; // 对齐方式
  customDisabled?: boolean;
}

export interface TABLE_DATA {
  [key: string]:
    | number
    | string
    | {
        component: any;
      };
}
export interface FORM_ITEM extends META_ITEM, FORM_ATTRIBUTE {}

export interface TABLE_ITEM extends META_ITEM, TABLE_ATTRIBUTE {}

export interface FORM_EXTRA extends NO_MUST_META_ITEM, FORM_ATTRIBUTE {}

export interface TABLE_EXTRA extends NO_MUST_META_ITEM, TABLE_ATTRIBUTE {}

export interface FORM_RENDER {
  column?: number;
  labelWidth?: string | number;
  className?: string;
  style?: FORM_STYLE;
  properties: FORM_PROPERTIES;
}

export interface TABLE_RENDER {
  height?: string | number;
  style?: TABLE_STYLE;
  className?: string;
  select?: boolean;
  option?: TABLE_OPTIONS;
  custom?: boolean | number;
  columnWidth?: number | string;
  properties: TABLE_PROPERTIES;
}

export interface TreeData {
  label: string;
  disabled?: string;
  children?: TreeData;
}
