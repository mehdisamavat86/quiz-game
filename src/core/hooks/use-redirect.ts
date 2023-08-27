import { ROUTES } from "@quiz/constants/routes";
import type { NavigateOptions } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";

export default function useRedirect() {
  const router = useRouter();

  return (path: keyof typeof ROUTES, options?: NavigateOptions) => {
    router.push(ROUTES[path], options);
    return null;
  };
}
