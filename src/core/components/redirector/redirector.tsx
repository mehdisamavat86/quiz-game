import { useRedirect } from "@quiz/hooks";
import { memo } from "react";
import type { RedirectorProps as Props } from "./types";

const Redirector = memo(({ path }: Props) => {
  const redirect = useRedirect();

  return redirect(path);
});

Redirector.displayName = "Redirector";

export default Redirector;
