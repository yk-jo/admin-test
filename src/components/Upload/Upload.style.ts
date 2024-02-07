import styled from "@emotion/styled";
import { styled as MUIStyled, alpha } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

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

interface ImageProps {
  error?: boolean;
  isOver?: boolean;
}
export const IconTextBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "isOver",
})<ImageProps>(({ theme, error, isOver }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  opacity: isOver ? 1 : 0.4,
  border: `3px dashed ${
    error ? theme.palette.error.main : theme.palette.grey[500]
  }`,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  p: {
    color: error ? theme.palette.error.main : theme.palette.grey[700],
  },
  svg: {
    path: {
      fill: `${
        error ? theme.palette.error.main : alpha("#000", 0.87)
      } !important`,
    },
  },
}));

export const ImageBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "isOver",
})<ImageProps>(({ theme, error, isOver }) => ({
  position: "relative",
  border: `1px solid ${
    error ? theme.palette.error.main : theme.palette.divider
  }`,
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

// ImageUploadGroup

type DroppableBoxProps = {
  error?: boolean;
  isDraggingOver: boolean;
};

export const DroppableBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "isDraggingOver" && prop !== "error",
})<DroppableBoxProps>(({ theme, error, isDraggingOver }) => ({
  display: "flex",
  flexDirection: "column",
  background: isDraggingOver
    ? theme.palette.grey[300]
    : theme.palette.background.default,
  borderRadius: theme.spacing(0.5),
  border: `1px solid ${
    error ? theme.palette.error.main : theme.palette.divider
  }`,
  padding: theme.spacing(1),
  paddingBottom: 0,
  width: "100%",
}));

type DraggableBoxProps = {
  isDragging?: boolean;
  draggablePropsStyle?: DraggingStyle | NotDraggingStyle;
};
export const DraggableBox = MUIStyled(Box, {
  shouldForwardProp: (prop) => prop !== "draggablePropsStyle",
})<DraggableBoxProps>(({ theme, draggablePropsStyle }) => ({
  userSelect: "none",
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  backgroundColor: "#ffffff",
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  "> .MuiBox-root": {
    position: "relative",
    ">img": {
      maxWidth: "200px",
      maxHeight: "100px",
      objectFit: "cover",
      filter: `brightness(1)`,
    },
    ">button": {
      opacity: 0,
    },
    ":hover": {
      ">img": {
        filter: `brightness(50%)`,
      },
      ">button": {
        opacity: 1,
      },
    },
  },

  ...draggablePropsStyle,
}));
