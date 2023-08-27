import { Typography } from "@mui/material";
import { usePostAnswer } from "@quiz/apis";
import { ResetQuizButton } from "@quiz/components";
import { useRedirect } from "@quiz/hooks";
import { useQuizStore } from "@quiz/store";
import { memo } from "react";
import * as Styled from "./styles";

const ResultView = memo(() => {
  const redirect = useRedirect();
  const answers = useQuizStore.useAnswers();
  // TODO handle error and retry and loading
  const { loading, error, data, retry } = usePostAnswer({ answers });

  if (!answers?.length) redirect("registration");

  console.log(data);

  return (
    <Styled.Wrapper>
      <Typography variant="h4">Your Result</Typography>

      {data?.results.map((item) => (
        <Styled.RusltWrapper key={item.question}>
          <Typography variant="h5"> {item.question} : </Typography>
          <Styled.AnswerWrapper>
            <Styled.AnswerPaper>{item.userAnswer}</Styled.AnswerPaper>
            <Styled.AnswerPaper>{item.correctAnswer}</Styled.AnswerPaper>
          </Styled.AnswerWrapper>
        </Styled.RusltWrapper>
      ))}

      <ResetQuizButton />
    </Styled.Wrapper>
  );
});

ResultView.displayName = "ResultView";

export default ResultView;
