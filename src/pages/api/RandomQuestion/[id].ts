import { questions } from "@quiz-mock/quiz";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send({
    questions: questions.map(({ answerId, ...rest }) => rest),
  });
}
