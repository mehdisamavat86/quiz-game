export interface ErrorRespose {
  message: string;
  code: number;
}

export interface ApiCallState<Response> {
  loading: boolean;
  data?: Response;
  error?: ErrorRespose;
}
