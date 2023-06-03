export interface AnyObject {
  [key: string]: any;
}

export type BTN_TYPE = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'text' | 'button';

export interface BUTTON {
  label: string;
  option: any;
  type?: BTN_TYPE;
}
