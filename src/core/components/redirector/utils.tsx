import { RouteKey } from "@quiz/constants";
import { Redirector } from ".";

export function redirector(path: RouteKey) {
  // eslint-disable-next-line react/display-name
  return () => <Redirector path={path} />;
}
