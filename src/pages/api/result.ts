import { result } from "@quiz-mock/result";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send({
    results: result.map((rest) => rest),
  });
}
