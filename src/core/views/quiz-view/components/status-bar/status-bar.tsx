import { Toolbar } from "@mui/material";
import useGetQuestionsSelector from "@quiz/apis/selectors/use-get-questions-selector";
import { useRedirect, useRouterParam } from "@quiz/hooks";
import { useQuizStore } from "@quiz/store";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";
import type { StatusBarProps as Props } from "./types";

const StatusBar = memo(({ className, loading }: Props) => {
  const data = useGetQuestionsSelector();
  const current = useQuizStore.useCurrent();
  const username = useRouterParam("name")?.trim();
  const redirect = useRedirect();

  if (!username) return redirect("registration");
  if (!loading && current === data.length) return redirect("result");

  return (
    <Styled.Wrapper className={classnames("StatusBar", className)}>
      <Toolbar>
        <Styled.CurrentStatus>
          question {current + 1} of {data.length || "?"}
        </Styled.CurrentStatus>
        <Styled.EmptySpace />
        <Styled.Username>{username}</Styled.Username>
      </Toolbar>
    </Styled.Wrapper>
  );
});

StatusBar.displayName = "StatusBar";

export default StatusBar;
