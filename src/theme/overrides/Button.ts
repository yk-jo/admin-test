import { Components, Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        color: "secondary",
      },
    },
  } as Components;
}
