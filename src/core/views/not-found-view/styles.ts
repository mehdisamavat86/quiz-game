import { styled } from "@mui/material/styles";
import { PageContainer } from "@quiz/layout";

export const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(3)};
`;
