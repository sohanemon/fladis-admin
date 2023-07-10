import { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent1: PaletteColor;
  }
  interface PaletteOptions {
    accent1?: PaletteColor;
  }
}
declare module "@mui/material" {
  export interface InputBasePropsColorOverrides {
    accent1: true;
  }
  export interface ButtonPropsColorOverrides {
    accent1: true;
  }
  export interface SwitchPropsColorOverrides {
    accent1: true;
  }
  export interface TextFieldPropsColorOverrides {
    accent1: true;
  }
  export interface CircularProgressPropsColorOverrides {
    accent1: true;
  }
}

export const primary = {
  light: "#46bcfe",
  main: "#18ACFE",
  dark: "#1078b1",
  contrastText: "#FFF",
};
export const secondary = {
  light: "#f16199",
  main: "#E82B75",
  dark: "#a62859",
  contrastText: "#FFF",
};
export const accent1 = {
  light: "#7e339c",
  main: "#5E0084",
  dark: "#41005c",
  contrastText: "#FFF",
};

export const themeColors = {
  primary,
  secondary,
  accent1,
  divider: "rgba(169, 170, 173, 0.3)",
  text: {
    primary: "#000",
    secondary: "#47494E",
    disabled: "#888a8d",
  },
};
