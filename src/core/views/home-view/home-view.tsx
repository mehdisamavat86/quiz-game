import { LinkButton } from "@quiz/components";
import { ROUTES } from "@quiz/constants";
import { memo } from "react";
import * as Styled from "./styles";

const HomeView = memo(() => {
  return (
    <Styled.Wrapper>
      <LinkButton href={ROUTES.registration}>Start Game</LinkButton>
    </Styled.Wrapper>
  );
});

HomeView.displayName = "HomeView";

export default HomeView;
