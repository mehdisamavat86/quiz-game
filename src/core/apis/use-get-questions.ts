import type { GetQuestionsResponse } from "@quiz/types";
import useCallApi from "../hooks/use-call-api";

export default function useGetQuestions() {
  return useCallApi<GetQuestionsResponse>(
    "/RandomQuestion/3",
    {},
    {
      cacheKey: useGetQuestions.name,
    }
  );
}
