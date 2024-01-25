import { Components, Theme } from "@mui/material";

export default function CssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        p: {
          margin: 0,
        },
      },
    },
  } as Components;
}
