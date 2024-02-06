import { Components, Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.grey[200],
            ".MuiDataGrid-columnHeader": {
              "&:not(:first-child)": {
                borderLeft: `1px solid #e0e0e0`,
              },
              "&--filledGroup": {
                borderBottom: `1px solid #e0e0e0`,
              },
              ".MuiDataGrid-columnHeaderTitleContainer": { border: "none" },
            },
          },
        },
      },
    },
  } as Components;
}
