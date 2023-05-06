import { createGlobalStyle } from "styled-components";

interface GlobalStylesProps {
  colorScheme: string;
}

export default createGlobalStyle<GlobalStylesProps>`
  html {
    color-scheme: ${({ colorScheme }) => colorScheme};
    background-color: ${({ theme }) => theme.background};
    transition: 0.5s;

    text-rendering: optimizeLegibility;
    font-family: 'Inter', sans-serif;
  }

  body {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;
  }
`;
