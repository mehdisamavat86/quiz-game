import type { GridProps } from "@mui/material";
import { classnames } from "@quiz/utils";
import { memo } from "react";
import * as Styled from "./styles";

const PageContainer = memo(({ children, className, ...props }: GridProps) => {
  return (
    <Styled.PageContainerWrapper
      className={classnames("PageContainer", className)}
      display="flex"
      flex="1"
      {...props}
    >
      {children}
    </Styled.PageContainerWrapper>
  );
});

PageContainer.displayName = "PageContainer";

export default PageContainer;
