import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    [key: string]: any;
  }
  interface TypographyVariantsOptions {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
}

let theme = createTheme({});

export default theme;
