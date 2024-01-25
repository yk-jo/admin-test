import { Components, Theme } from "@mui/material";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontSize: "14px",
          "& .MuiSelect-select": {
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  } as Components;
}
