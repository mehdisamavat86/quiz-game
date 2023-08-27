import { AnswerItem } from "@quiz/types";

export type QuizSotoreState = {
  current: number;
  answers: AnswerItem[];
  reset: () => void;
  goNext: (answerId: string, questionId: string) => void;
  goPrev: () => void;
};
