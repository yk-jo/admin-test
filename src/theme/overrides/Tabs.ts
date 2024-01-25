import { Components, Theme } from "@mui/material";

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          width: "100%",
          borderBottom: `1px solid`,
          borderColor: theme.palette.divider,
        },
      },
    },
  } as Components;
}
