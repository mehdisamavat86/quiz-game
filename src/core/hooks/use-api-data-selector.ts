import { getApiCachKey } from "@quiz/utils";
import { getStorageItem } from "@quiz/utils/storage";

export default function useApiDataSelector<T = any>(
  key: string,
  defaultValue?: any
) {
  const apiKey = getApiCachKey(key);
  return getStorageItem(apiKey, defaultValue) as T | null;
}
