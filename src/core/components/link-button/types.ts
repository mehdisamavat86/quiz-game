import type { ButtonProps } from "@mui/material";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export interface LinkButtonProps
  extends Pick<ButtonProps, "variant" | "color" | "disabled">,
    LinkProps,
    PropsWithChildren {
  className?: string;
}
