export const ROUTES = {
  home: "/",
  registration: "/registration",
  quiz: "/quiz/:name",
  result: "/result",
};

export type RouteKey = keyof typeof ROUTES;
