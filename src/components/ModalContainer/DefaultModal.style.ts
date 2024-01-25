import { Box, Button, IconButton, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const ModalWrapper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backgroundColor: alpha(theme.palette.modal.modalBg, 0.5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
}));

export const ModalBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.common.white,
}));

export const ModalTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.modal.modalBorderColor}`,
  padding: theme.spacing(2),
  ".MuiIconButton-root": {
    padding: 0,
  },
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.modal.modalBorderColor}`,
}));

export const ModalFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const CloseButton = styled(IconButton)(() => ({
  padding: 0,
}));
