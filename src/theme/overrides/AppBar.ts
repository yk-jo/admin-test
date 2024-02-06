import { appBarHeight } from "@/config";
import { Components, Theme } from "@mui/material";

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: theme.palette.appbar.appbarBg,
        },
        root: {
          height: `${appBarHeight}px`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("xs")]: {
            minHeight: `${appBarHeight}px`,
            padding: `0 ${theme.spacing(1)}`,
            boxShadow: "0px 0px 35px 0px rgba(154, 161, 171, 0.15)",
          },
        },
      },
    },
  } as Components;
}
