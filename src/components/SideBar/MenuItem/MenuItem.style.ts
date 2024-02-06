import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type MenuItemProps = {
  rootBarOpen: boolean;
};

export const MenuSubheader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.sidebar.menuBg,
  color: theme.palette.sidebar.menuItemColor,
}));
export const MenuItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "rootBarOpen",
})<MenuItemProps>(({ theme, rootBarOpen }) => ({
  minHeight: 48,
  justifyContent: rootBarOpen ? "initial" : "center",
  padding: `0 ${theme.spacing(2.5)}`,
  gap: theme.spacing(2),
  //
  ".MuiTypography-root": {
    color: theme.palette.sidebar.menuItemColor,
    transition: `color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  },
  svg: {
    color: theme.palette.sidebar.menuItemColor,
  },
  "&:hover": {
    ".MuiTypography-root": {
      color: theme.palette.sidebar.menuItemHoverColor,
    },
    svg: {
      color: theme.palette.sidebar.menuItemHoverColor,
    },
  },
  "&.Mui-selected": {
    ".MuiTypography-root": {
      color: theme.palette.sidebar.menuItemActiveColor,
    },
    svg: {
      color: theme.palette.sidebar.menuItemActiveColor,
    },
  },
}));

export const MenuItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 0,
  justifyContent: "center",
}));

export const MenuItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "rootBarOpen",
})<MenuItemProps>(({ rootBarOpen }) => ({
  display: rootBarOpen ? "block" : "none",
  ".MuiTypography-root": {
    fontWeight: 600,
  },
}));

export const MenuDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.sidebar.menuItemColor,
}));
