import { styled } from "@mui/material/styles";
import { PageContainer } from "@quiz/layout";

export const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  > * {
    width: 100%;
  }
`;
