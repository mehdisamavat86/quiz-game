import type { ButtonProps } from "@mui/material";
import { Stack } from "@mui/material";
import { useGetQuestions } from "@quiz/apis";
import useGetQuestionsSelector from "@quiz/apis/selectors/use-get-questions-selector";
import { LoadingScreen } from "@quiz/components";
import { useQuizStore } from "@quiz/store";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";
import type { QuestionItemProps as Props } from "./types";

const QuestionItem = memo(({ className }: Props) => {
  const data = useGetQuestionsSelector();
  const { loading } = useGetQuestions();
  const current = useQuizStore.useCurrent();
  const goNext = useQuizStore.useGoNext();
  const item = data[current];

  const handleSelectAns: ButtonProps["onClick"] = (e) => {
    const answerId = e.currentTarget.dataset.id!;
    goNext(answerId, item.id);
  };

  return (
    <Styled.Wrapper className={classnames("QuestionItem", className)}>
      {loading ? (
        <LoadingScreen />
      ) : (
        item && (
          <>
            <Styled.Question>
              <Styled.Ttile variant="body1">{item?.title} :</Styled.Ttile>
              <Styled.Image url={item?.imageUrl} />
            </Styled.Question>

            <Stack direction="column" justifyContent="center" gap={1}>
              {item?.answerOptions.map((ans) => (
                <Styled.Answer
                  key={ans.id}
                  data-id={ans.id}
                  variant="outlined"
                  onClick={handleSelectAns}
                >
                  {ans.title}
                </Styled.Answer>
              ))}
            </Stack>
          </>
        )
      )}
    </Styled.Wrapper>
  );
});

QuestionItem.displayName = "QuestionItem";

export default QuestionItem;
