import { LinkButton } from "@quiz/components";
import { ROUTES } from "@quiz/constants";
import { useQuizStore } from "@quiz/store";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";
import type { ResetQuizButtonProps as Props } from "./types";

const ResetQuizButton = memo(({ className }: Props) => {
  const reset = useQuizStore.useReset();

  return (
    <Styled.Wrapper className={classnames("ResetQuizButton", className)}>
      <LinkButton href={ROUTES.registration} onClick={reset}>
        Restart Quiz
      </LinkButton>
    </Styled.Wrapper>
  );
});

ResetQuizButton.displayName = "ResetQuizButton";

export default ResetQuizButton;
