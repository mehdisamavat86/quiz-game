import { styled } from "@mui/material/styles";
import { PageContainer } from "@quiz/layout";

export const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Image = styled("img")`
  background-image: url("/game.jpg");
  background-size: 100% 100%;
  height: 200px;
  width: 300px;
`;
