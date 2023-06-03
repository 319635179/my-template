# 规范化模板项目

仅供个人备份使用



## 一、基础组件

### 1、表单

通过如下方式调用：

```html
<form-render :form-attribute="form-attribute" v-model="formData"></form-render>
```

其中，$form-attribute$是生成表单的详细属性，为Object类型数据，具体类型为自定义类型$FORM_RENDER$，如下代码所示：

```ts
export interface FORM_RENDER {
  column?: number; // 行数
  labelWidth?: string | number; // label宽度
  className?: string; // 自定义类名
  style?: FORM_STYLE; // 部分可选样式
  properties: FORM_PROPERTIES; // 表单元素
}
```

其中，$FORM\_PROPERTIES$的内容为：

```ts
export interface FORM_PROPERTIES {
  [key: string]: FORM_ITEM;
}
export interface FORM_ITEM extends META_ITEM, FORM_ATTRIBUTE {}
export interface META_ITEM {
  label: string;
  prop: string;
  type?: META_TYPE;
}
export interface FORM_ATTRIBUTE {
  widget?: WIDGET_TYPE; // 控件类型，默认text
  options?: META_VALUE[];
  style?: FORM_STYLE;
  className?: string;
  column?: number; // 占用列数
  limit?: NUM_LIMIT; // 大小限制
  placeholder?: string; // 表单提示词
  defaultValue?: any; // 默认值
  disabled?: boolean; // 是否禁用
  required?: boolean; // 是否必填
  hidden?: string; // 联动语句
  component?: any; // widget为component时，传入组件
  attribute?: { [key: string]: any }; // 传入组件数据
  format?: FORMAT_TYPE; // 数据格式、类型
  rules?: FormItemRule[]; // 表单校验规则
  child?: FORM_RENDER; // 子表单
}
```

其中，几种类型分别为：

```ts
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
```

### 2、弹窗、抽屉

每次生成弹窗或抽屉时，生成新的实例挂载到$\#dialog$或$\#drawer$上，关闭时注销实例。

使用时，调用$modal$中的方法:$dialog、popups、largeDia、drawer$，分别对应小、中、大三种弹窗，传入属性为标题、组件与其他操作（可选），如下所示：

```ts
(title: string, com: any, options?: AnyObject)
```

具体使用方式如下所示：

```ts
  modal.dialog(
    "title",
    h(Test, {
      modelValue: data.value,
      "onUpdate:modelValue": (val) => {
        testData.value = val;
      },
    })
  );
```

### 3、告警

告警同样通过modal调用：

```ts
modal.error("告警信息")
```



## 二、大小屏差异

大屏与小屏分别挂载在两个实例上，大屏挂载于$\#full$，其中，$router$也分开使用，以保证大屏使用时，$header$与$aside$不初始化。

*此处不通过$router$的$children$控制，目的是为了小屏数目远多于大屏时，不需要过多的$children$*
