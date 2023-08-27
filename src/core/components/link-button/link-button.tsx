import { Button } from "@mui/material";
import { classnames } from "@quiz/utils/classnames";
import Link from "next/link";
import { memo } from "react";
import type { LinkButtonProps as Props } from "./types";

const LinkButton = memo(
  ({
    className,
    variant = "contained",
    color = "primary",
    ...props
  }: Props) => {
    return (
      <Button
        className={classnames("LinkButton", className)}
        variant={variant}
        color={color}
        component={Link}
        {...(props as any)}
      />
    );
  }
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
