import { useParams } from "next/navigation";

export default function useRouterParam<T extends Record<string, string> = {}>(
  name: string,
  defaultValue?: string
) {
  const params = useParams() as T;
  return params[name] ? decodeURI(params[name]) : defaultValue;
}
