import { Box, styled } from "@mui/material";

export const LabelWithInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "> .MuiTypography-root": {
    fontWeight: 700,
  },
}));
