import { Box, SwipeableDrawer, styled } from "@mui/material";

type DrawerProps = {
  width: number;
};
export const CustomSwipableDrawer = styled(SwipeableDrawer)<DrawerProps>(
  ({ theme, open, width }) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    position: "relative",
    height: "100%",
    width: open ? `${width}px` : 0,
    "& .MuiDrawer-paper": {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      transform: open ? "translateX(0)" : `translateX(-${width}px)`,
      position: "absolute",
      width: `${width}px`,
      overflow: "visible",
    },
  })
);

type SwipeButtonProps = {
  bleedingWidth: number;
};
export const SwipeButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bleedingWidth",
})<SwipeButtonProps>(({ theme, bleedingWidth }) => ({
  position: "absolute",
  width: bleedingWidth,
  height: 80,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  visibility: "visible",
  right: -bleedingWidth,
  top: "calc(50% - 50px)",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderLeft: "none",
  cursor: "pointer",
}));

export const Puller = styled("span")(({ theme }) => {
  const width = 40;
  const height = 6;
  return {
    width,
    height,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[900],
    borderRadius: 3,
    position: "absolute",
    top: `calc(50% - ${height / 2}px)`,
    left: `calc(50% - ${width / 2}px)`,
    transform: "rotate(90deg)",
  };
});
