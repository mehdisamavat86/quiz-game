export const API_SERVER =
  process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:3000/api";
export const API_CACHE_TIME = Number(
  process.env.NEXT_PUBLIC_API_CACHE_TIME || 360
); // 1 hour
export const API_CACHE_PREFIX =
  process.env.NEXT_PUBLIC_API_CACHE_PREFIX || "api-cache";
