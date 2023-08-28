import { Typography } from "@mui/material";
import { LinkButton } from "@quiz/components";
import { ROUTES } from "@quiz/constants";
import { memo } from "react";
import * as Styled from "./styles";

const NotFoundView = memo(() => {
  return (
    <Styled.Wrapper>
      <Typography variant="h2">404</Typography>

      <Typography variant="h4">Look like you are lost</Typography>
      <Typography variant="h6">
        the page you are looking for not avaible!
      </Typography>

      <LinkButton href={ROUTES.home} variant="contained" color="primary">
        Go to Home
      </LinkButton>
    </Styled.Wrapper>
  );
});

NotFoundView.displayName = "NotFoundView";

export default NotFoundView;
