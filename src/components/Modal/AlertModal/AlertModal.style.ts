import { Box, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const AlertModalContent = styled(Box)(() => ({
  minWidth: "200px",
  maxWidth: "400px",
  "& >p": {
    textAlign: "center",
  },
}));

export const AlertModalFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  "& >button": {
    width: "100px",
  },
}));
