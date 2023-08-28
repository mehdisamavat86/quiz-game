import { Card, CardMedia, Typography } from "@mui/material";
import { usePostAnswer } from "@quiz/apis";
import { LoadingScreen, ResetQuizButton } from "@quiz/components";
import { ReloadButton } from "@quiz/components/reload-button";
import { useRedirect } from "@quiz/hooks";
import { useQuizStore } from "@quiz/store";
import { memo } from "react";
import * as Styled from "./styles";

const ResultView = memo(() => {
  const redirect = useRedirect();
  const answers = useQuizStore.useAnswers();
  const { loading, error, data, retry } = usePostAnswer({ answers });

  if (!answers?.length) redirect("registration");

  return (
    <Styled.Wrapper>
      {error && <ReloadButton title="Retry" onRetry={retry} />}

      <Typography variant="h4">Your Result</Typography>

      {!data?.results.length ? (
        loading && <LoadingScreen />
      ) : (
        <Styled.Content>
          {data.results.map((item) => (
            <Card
              sx={{ maxWidth: 345, alignSelf: "stretch" }}
              key={item.question}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={item.imageUrl}
                title="green iguana"
              />
              <Styled.CardContent>
                <Typography variant="h5">Question: {item.question}</Typography>
                <Typography variant="body2">
                  <b>Correct Answer:</b> {item.correctAnswer}
                </Typography>

                <Typography
                  variant="body2"
                  color={item.wasCorrect ? "green" : "red"}
                >
                  <b>Your Answer:</b> {item.userAnswer}
                </Typography>
              </Styled.CardContent>
            </Card>
          ))}
        </Styled.Content>
      )}

      <ResetQuizButton />
    </Styled.Wrapper>
  );
});

ResultView.displayName = "ResultView";

export default ResultView;
