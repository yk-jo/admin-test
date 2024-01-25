import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      menuBg: string;
      menuItemColor: string;
      menuItemHoverColor: string;
      menuItemActiveColor: string;
    };
    appbar: {
      appbarBg: string;
      appbarItemColor: string;
      appbarItemHoverColor: string;
    };
    modal: {
      modalBg: string;
      modalBorderColor: string;
    };
    heading: string;
  }
  interface PaletteOptions {
    sidebar: {
      menuBg: string;
      menuItemColor: string;
      menuItemHoverColor: string;
      menuItemActiveColor: string;
    };
    appbar: {
      appbarBg: string;
      appbarItemColor: string;
      appbarItemHoverColor: string;
    };
    modal: {
      modalBg: string;
      modalBorderColor: string;
    };
    heading: string;
  }
}

// declare module "@mui/material/styles/createMixins" {
//   interface Mixins {}
// }
