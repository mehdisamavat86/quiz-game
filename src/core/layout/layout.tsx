import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import * as Styled from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Styled.Body className={inter.className}>
        <Styled.Wrapper
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          {children}
        </Styled.Wrapper>
      </Styled.Body>
    </html>
  );
}
