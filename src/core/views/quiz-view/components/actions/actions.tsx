import { Button } from "@mui/material";
import { ResetQuizButton } from "@quiz/components";
import { useQuizStore } from "@quiz/store";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";
import type { ActionsProps as Props } from "./types";

const Actions = memo(({ className }: Props) => {
  const current = useQuizStore.useCurrent();
  const goPrev = useQuizStore.useGoPrev();
  const reset = useQuizStore.useReset();

  return (
    <Styled.Wrapper className={classnames("Actions", className)}>
      <Button disabled={!current} variant="contained" onClick={goPrev}>
        Back
      </Button>
      <ResetQuizButton />
    </Styled.Wrapper>
  );
});

Actions.displayName = "Actions";

export default Actions;
