import styled from "@emotion/styled";
import { styled as MUIStyled, alpha } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const FileUploadInput = styled.input`
  display: none;
`;

type FileUploadLabelProps = {
  isDragOver?: boolean;
};
export const FileUploadLabel = styled.label<FileUploadLabelProps>`
  cursor: pointer;
  text-align: center;
  display: flex;
`;

export const NoMouseEvent = MUIStyled(Box)({
  pointerEvents: "none",
  position: "relative",
});

interface HoverProps {
  isOver?: boolean;
}
export const IconTextBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "isOver",
})<HoverProps>(({ theme, isOver }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  opacity: isOver ? 1 : 0.4,
  border: `3px dashed ${theme.palette.grey[500]}`,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  p: {
    color: theme.palette.grey[700],
  },
}));

export const ImageBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "isOver",
})<HoverProps>(({ theme, isOver }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(0.5),
  backgroundColor: isOver ? alpha(theme.palette.common.black, 0.4) : "",

  " >img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter: `brightness(${isOver ? "50%" : 1})`,
  },
  " >button": {
    opacity: isOver ? 1 : 0,
  },
}));

export const DeleteButton = MUIStyled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "calc(50% - 18px)",
  left: "calc(50% - 18px)",
  svg: {
    color: theme.palette.common.white,
  },
}));
