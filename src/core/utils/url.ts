import { API_SERVER } from "@quiz/constants";
import { trim, trimEnd } from "lodash";
import q from "query-string";

export function toUrlParams(data?: Record<string, any>) {
  return data ? q.stringify(data) : "";
}

export function toUrl(path: string, data?: Record<string, any>) {
  return path + toUrlParams(data);
}

export function joinUrl(...paths: string[]) {
  return paths.map((x) => trim(x, "/")).join("/");
}

export function toApiServerUrl(path: string, data?: Record<string, any>) {
  return trimEnd(`${joinUrl(API_SERVER, path)}?${toUrlParams(data)}`, "?");
}
