export const REG_IP =
  /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/;
export const REG_PHONE = /^1[3-9]\d{9}$/gi;
export const REG_EMAIL = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/gi;
export const REG_ACCOUNT = /^[0-9A-Z]{5,64}$/gi;
export const REG_ENAME = /^[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]*$/gi;
export const REG_DBNAME = /^[a-zA-Z0-9_]*$/gi;
