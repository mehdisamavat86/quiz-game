import { faker } from "@faker-js/faker";
import type { QuizItemWithAnswer } from "@quiz/types";
import { random, range } from "lodash";

export const questions: QuizItemWithAnswer[] = range(1, 9).map(
  (questionId) => ({
    id: String(questionId),
    title: faker.lorem.sentence(),
    answerOptions: range(1, 4).map((answerId) => ({
      id: String(answerId),
      title: faker.lorem.word(5),
    })),
    answerId: String(random(3, false)),
  })
);
