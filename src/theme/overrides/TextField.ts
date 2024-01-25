import { Components, Theme } from "@mui/material";

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
            },
          },
          "& input,textarea": {
            fontSize: "14px",
          },
        },
      },
    },
  } as Components;
}
