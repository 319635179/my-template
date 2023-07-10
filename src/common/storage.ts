export const LocalStorageName = {
  focusBread: "FOCUS_BREAD",
};

export const setLocalStorage = (name: string, data: any) => {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  localStorage.setItem(name, data);
};

export const getLocalStorage = (
  name: string,
  defaultVal?: any,
  isJson?: boolean
) => {
  let data = localStorage.getItem(name);
  if (!data) return defaultVal;
  if (isJson) {
    try {
      data = JSON.parse(data);
    } catch (e) {}
  }
  return data;
};
