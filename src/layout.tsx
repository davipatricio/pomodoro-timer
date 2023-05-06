import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useCurrentTheme } from "./hooks/useCurrentTheme";
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useCurrentTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles colorScheme={theme} />
      {children}
    </ThemeProvider>
  );
}
