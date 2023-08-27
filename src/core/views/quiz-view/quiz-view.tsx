import { useGetQuestions } from "@quiz/apis";
import { ReloadButton } from "@quiz/components/reload-button";
import { memo } from "react";
import { Actions, QuestionItem, StatusBar } from "./components";
import * as Styled from "./styles";

const QuizView = memo(() => {
  // TODO handle error and methods
  const { loading, data, error, retry } = useGetQuestions();

  return (
    <Styled.Wrapper>
      {error && <ReloadButton title="Retry" onRetry={retry} />}
      <StatusBar loading={loading} />
      <QuestionItem />
      <Actions />
    </Styled.Wrapper>
  );
});

QuizView.displayName = "QuizView";

export default QuizView;
