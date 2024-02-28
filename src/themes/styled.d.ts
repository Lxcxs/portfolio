import "styled-components";
declare module "style-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      textColor: string;
      primaryReverse: string;
      project: string;
      background: string;
      mainstreetbg: string;
    };
  }
}
