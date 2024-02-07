import { Box, styled } from "@mui/material";
import AuthBg from "@/assets/images/auth-bg.svg";

export const Background = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  // backgroundImage: `url(${AuthBg})`,
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "100% 100%",
}));

export const LoginBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  gap: theme.spacing(1),
  maxWidth: "400px",
  width: "100%",
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(0.5),
  marginBottom: theme.spacing(4),
  boxShadow: "0px 0px 35px 0px rgba(154, 161, 171, 0.15)",
}));

export const LoginBoxHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTopLeftRadius: theme.spacing(0.5),
  borderTopRightRadius: theme.spacing(0.5),
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  ">img": {
    width: "60%",
  },
}));

export const LoginBoxBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(4),
}));
