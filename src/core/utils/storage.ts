export function setStorageItem(
  key: string,
  data: any,
  duration = Number.MAX_SAFE_INTEGER
) {
  if (globalThis.localStorage)
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        expireAt: Date.now() + duration * 1000,
      })
    );
  return data;
}

export function getStorageItem(key: string, defaultValue?: any) {
  if (globalThis.localStorage) {
    const data = localStorage.getItem(key);
    try {
      if (data) {
        const value = JSON.parse(data);
        if (value.expireAt) {
          if (value.expireAt >= Date.now()) return value.data;
          else localStorage.removeItem(key);
        } else return value;
      }
    } catch {
      // do nothing
    }
  }

  return defaultValue;
}
