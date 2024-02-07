import { Components, Theme } from "@mui/material";

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
      },
    },
  } as Components;
}
