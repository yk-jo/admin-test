import { Components, Theme } from "@mui/material";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
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
