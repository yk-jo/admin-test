import { drawerWidth } from "@/config";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)<any>(({ theme }) => ({
  overflow: "auto",
  backgroundColor: theme.palette.background.default,
  height: "100%",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    width: `calc(100vw - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down("md")]: {
    width: `calc(100vw - ${theme.spacing(8)} - 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `100vw`,
  },

  "& >div": {
    padding: "20px",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
}));
