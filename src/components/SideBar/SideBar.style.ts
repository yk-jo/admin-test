import { drawerWidth } from "@/config";
import { Box, Drawer, IconButton } from "@mui/material";
import { CSSObject, Theme, styled } from "@mui/material/styles";

export const SideBarContainer = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  height: "100vh",
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.down("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open ? { ...openedMixin(theme) } : { ...closedMixin(theme) }),
  "& .MuiDrawer-paper": {
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    position: "absolute",
    backgroundColor: theme.palette.sidebar.menuBg,
  },
}));

export const CloseDrawerButton = styled(IconButton)(({ theme }) => ({
  svg: {
    fill: `${theme.palette.sidebar.menuItemColor} !important`,
    path: {
      fill: `${theme.palette.sidebar.menuItemColor} !important`,
    },
  },
  "&:hover": {
    borderRadius: 0,
    svg: {
      fill: theme.palette.sidebar.menuItemHoverColor,
    },
  },
}));
