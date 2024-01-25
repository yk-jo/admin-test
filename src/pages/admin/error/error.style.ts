import { Box, Typography, alpha, styled } from "@mui/material";
import AuthBg from "@/assets/images/auth-bg.svg";

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: theme.spacing(2),

  backgroundImage: `url(${AuthBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
}));

export const PageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  gap: theme.spacing(1),
  maxWidth: "376px",
  width: "100%",
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(0.5),
  marginBottom: theme.spacing(4),
}));

export const PageBoxHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTopLeftRadius: theme.spacing(0.5),
  borderTopRightRadius: theme.spacing(0.5),
  padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
}));

export const PageBoxBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(4),
}));

export const Text404 = styled(Typography)(({ theme }) => ({
  fontSize: "84px",
  fontWeight: 700,
  color: theme.palette.primary.main,
  textShadow: `${alpha(theme.palette.primary.main, 0.3)} 5px 1px,${alpha(
    theme.palette.primary.main,
    0.2
  )} 10px 3px`,
  display: "flex",
  alignItems: "center",
  ">svg": {
    width: "84px",
    height: "84px",
    boxShadow: `${alpha(theme.palette.primary.main, 0.3)} 5px 1px,${alpha(
      theme.palette.primary.main,
      0.2
    )} 10px 3px`,
  },
}));
