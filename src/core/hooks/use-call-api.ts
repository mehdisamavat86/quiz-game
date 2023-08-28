import { API_CACHE_TIME } from "@quiz/constants";
import type { ApiCallState, GetQuestionsRequest } from "@quiz/types";
import { getApiCachKey, toApiServerUrl } from "@quiz/utils";
import { getStorageItem, setStorageItem } from "@quiz/utils/storage";
import { upperCase } from "lodash";
import { useEffect, useState } from "react";

export default function useCallApi<Response>(
  path: string,
  params: GetQuestionsRequest,
  options: RequestInit & { cacheKey?: string; cacheTime?: number } = {}
) {
  options.method = upperCase(options.method || "get");
  options.mode = options.mode || "cors";
  options.cacheKey = getApiCachKey(options.cacheKey || path);
  options.cacheTime = options.cacheTime || API_CACHE_TIME;
  options.headers = options.headers || {};

  const paramsHash = JSON.stringify(params);

  if (options.method !== "GET") {
    options.body = paramsHash;
    (options.headers as any)["Content-Type"] = "application/json";
    (options.headers as any)["Access-Control-Allow-Origin"] =
      "http://localhost:3000";
    (options.headers as any)["Access-Control-Allow-Credentials"] = true;
    params = {};
  }

  path = toApiServerUrl(path, params);

  const [state, setState] = useState<ApiCallState<Response>>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  const callApi = () => {
    const cached =
      options.method === "GET" && getStorageItem(options.cacheKey!);
    if (cached) {
      setState((s) => ({ ...s, loading: false, data: cached }));
      return;
    }

    fetch(path, options)
      .then((res) => res.json())
      .then((data) => {
        setStorageItem(options.cacheKey!, data, options.cacheTime);
        setState((s) => ({ ...s, loading: false, data }));
      })
      .catch((error) =>
        setState((s) => ({
          ...s,
          loading: false,
          error: {
            code: error.code || error.statusCode || error.status,
            message: error.message || error?.data.message || "unknown",
          },
        }))
      );
  };

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsHash]);

  return {
    ...state,
    retry: callApi,
  };
}
