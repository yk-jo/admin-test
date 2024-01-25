import { Components, Theme } from "@mui/material";

export default function Breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: theme.palette.heading,
        },
      },
    },
  } as Components;
}
