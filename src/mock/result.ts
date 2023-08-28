import { faker } from "@faker-js/faker";
import type { QuizResult } from "@quiz/types";
import { range } from "lodash";

export const result: QuizResult[] = range(1, 4).map(() => ({
  question: faker.lorem.word(),
  correctAnswer: faker.lorem.sentence(),
  imageUrl: faker.image.url(),
  userAnswer: faker.company.name(),
  wasCorrect: Boolean(Math.round(Math.random())),
  errorMessage: "test",
}));
