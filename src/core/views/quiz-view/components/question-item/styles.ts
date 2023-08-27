import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(3)};
  height: 100%;

  > * {
    width: 100%;
  }
`;

export const Ttile = styled(Typography)`
  width: 240px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

export const Image = styled("img")<{ url: string }>`
  background-image: url(${(p) => p.url});
  width: 80px;
  height: 80px;
`;

export const Question = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(3)};
`;

export const Answer = styled(Button)`
  max-width: ${(p) => p.theme.breakpoints.values.sm}px;
  width: 100%;
  margin: auto;
`;
