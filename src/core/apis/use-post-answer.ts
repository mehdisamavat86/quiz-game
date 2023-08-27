import type { PostAnswerRequest, PostAnswerResponse } from "@quiz/types";
import useCallApi from "../hooks/use-call-api";

export default function usePostAnswer(params: PostAnswerRequest) {
  return useCallApi<PostAnswerResponse>("/RandomQuestion", params, {
    method: "POST",
  });
}
