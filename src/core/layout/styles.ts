import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Body = styled("body")`
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: ${(p) => p.theme.palette.background.paper};
`;

export const Wrapper = styled(Grid)`
  height: 100dvh;
  overflow-y: auto;
`;

export const PageContainerWrapper = styled(Grid)`
  height: 100%;
  border-radius: 0;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing(2)};
`;
