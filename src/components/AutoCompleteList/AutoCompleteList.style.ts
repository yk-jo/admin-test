import { Box, styled } from "@mui/material";
import { DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

type DroppableBoxProps = {
  error?: boolean;
  isDraggingOver: boolean;
};

export const DroppableBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDraggingOver",
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
  draggablePropsStyle?: DraggingStyle | NotDraggingStyle;
};
export const DraggableBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "draggablePropsStyle",
})<DraggableBoxProps>(({ theme, draggablePropsStyle }) => ({
  userSelect: "none",
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  backgroundColor: "#ffffff",
  marginBottom: theme.spacing(1),

  ...draggablePropsStyle,
}));
