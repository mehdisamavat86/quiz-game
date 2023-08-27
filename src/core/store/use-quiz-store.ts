import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { QuizSotoreState } from "./types";

const store = create(
  devtools(
    immer<QuizSotoreState>((set) => ({
      current: 0,
      answers: [],
      reset: () =>
        set((s) => {
          s.current = 0;
          s.answers = [];
        }),
      goNext: (answerId, questionId) =>
        set((s) => {
          s.current++;
          s.answers.push({ answerId, questionId });
        }),
      goPrev: () => {
        set((s) => {
          s.current--;
          s.answers.pop();
        });
      },
    })),
    {
      name: "quiz-store",
    }
  )
);

export default createSelectorHooks(store);
