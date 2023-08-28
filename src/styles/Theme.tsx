import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

import def from "./default";

import GlobalStyles from "./globals";

interface ThemeProps {
  children: ReactNode; // Specify children prop type
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={def}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
