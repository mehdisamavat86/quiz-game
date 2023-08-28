import { AppBar, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(AppBar)`
  padding: ${(p) => p.theme.spacing(1)};
`;

export const CurrentStatus = styled(Paper)`
  width: fit-content;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
`;

export const Username = styled(CurrentStatus)`
  background: ${(p) => p.theme.palette.info.dark};
  color: ${(p) => p.theme.palette.common.white};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`;

export const EmptySpace = styled("div")`
  flex-grow: 1;
`;
