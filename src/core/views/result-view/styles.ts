import { CardContent as BaseCardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PageContainer } from "@quiz/layout";

export const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2.5)};
`;

export const Content = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(2.5)};
  height: 80%;
  overflow-y: auto;
`;

export const CardContent = styled(BaseCardContent)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
`;
