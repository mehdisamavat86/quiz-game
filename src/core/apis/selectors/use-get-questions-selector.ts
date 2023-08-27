import useApiDataSelector from "@quiz/hooks/use-api-data-selector";
import type { GetQuestionsResponse } from "@quiz/types";
import { useGetQuestions } from "..";

export default function useGetQuestionsSelector() {
  const data = useApiDataSelector<GetQuestionsResponse>(useGetQuestions.name);
  const items = data?.questions || [];

  return items.slice(0, 3);
}
