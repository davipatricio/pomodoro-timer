import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange: string;
      cyan: string;
      lime: string;
      darkBorder: string;
      inputs: {
        background: string;
        color: string;
      };
      checkbox: {
        background: string;
        border: string;
      };
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: string;
  }
}
