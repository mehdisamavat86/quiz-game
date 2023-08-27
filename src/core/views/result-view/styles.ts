import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PageContainer } from "@quiz/layout";

export const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2.5)};
`;

export const RusltWrapper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(2)};
  padding: ${(p) => p.theme.spacing(2)};
  min-width: 360px;
`;

export const AnswerWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const AnswerPaper = styled(Paper)`
  padding: ${(p) => p.theme.spacing(1)};
`;
