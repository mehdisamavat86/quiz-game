import { API_CACHE_PREFIX } from "@quiz/constants";
import { kebabCase } from "lodash";

export function getApiCachKey(key: string) {
  return `${API_CACHE_PREFIX || "api-cache"}-${kebabCase(
    key.replace(/^use/, "")
  )}`;
}
