export interface QuizAnswer {
  id: string;
  title: string;
}

export interface QuizItemWithAnswer {
  id: string;
  title: string;
  imageUrl: string;
  answerOptions: QuizAnswer[];
  answerId: string;
}

export type QuizItem = Omit<QuizItemWithAnswer, "answerId">;

export interface GetQuestionsRequest {
  // params
}

export type GetQuestionsResponse = {
  questions: QuizItem[];
};

export interface AnswerItem {
  questionId: string;
  answerId: string;
}

export interface QuizResult {
  errorMessage: string;
  question: string;
  imageUrl: string;
  correctAnswer: string;
  userAnswer: string;
  wasCorrect: boolean;
}

export interface PostAnswerRequest {
  answers: AnswerItem[];
}

export interface PostAnswerResponse {
  errorMessage: string;
  results: QuizResult[];
}
