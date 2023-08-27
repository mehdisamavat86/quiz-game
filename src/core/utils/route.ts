import type { RouteKey } from "@quiz/constants";
import { ROUTES } from "@quiz/constants";

export function route(
  path: RouteKey,
  params?: Record<string, string | number>
) {
  let url = ROUTES[path];

  if (params) {
    Object.keys(params).forEach((key) => {
      url = url.replaceAll(`:${key}`, String(params[key]));
    });
  }

  return url;
}
