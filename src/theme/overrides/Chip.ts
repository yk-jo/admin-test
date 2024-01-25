import { Components, Theme } from "@mui/material";

export default function Chip(theme: Theme) {
  return {
    MuiChip: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.5),
        },
      },
    },
  } as Components;
}
