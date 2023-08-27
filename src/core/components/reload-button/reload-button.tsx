import { Button } from "@mui/material";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";
import type { ReloadButtonProps as Props } from "./types";

const ReloadButton = memo(({ className, title, onRetry }: Props) => {
  return (
    <Styled.Wrapper className={classnames("ReloadButton", className)}>
      <Button onClick={onRetry}>{title}</Button>
    </Styled.Wrapper>
  );
});

ReloadButton.displayName = "ReloadButton";

export default ReloadButton;
