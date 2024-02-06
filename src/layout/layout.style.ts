import { drawerWidth } from "@/config";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type PageWrapperProps = {
  fold?: boolean;
};
export const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fold",
})<PageWrapperProps>(({ theme, fold }) => ({
  overflow: "auto",
  backgroundColor: theme.palette.background.default,
  height: "100%",
  justifyContent: "space-between",

  transition: fold ? undefined : "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
  width: fold
    ? `calc(100vw - ${theme.spacing(8)} - 1px)`
    : `calc(100vw - ${drawerWidth}px)`,
  [theme.breakpoints.down("sm")]: {
    width: `100vw`,
  },
}));

type ContentWrapperProps = {
  full?: boolean;
};
export const ContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "full",
})<ContentWrapperProps>(({ theme, full }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: full ? undefined : "20px",
}));
