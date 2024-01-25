import { Box } from "@mui/material";

interface LogoProps {
  srcLogo?: string;
  srcLogoIcon?: string;
  isUpMd?: boolean;
}
export default function Logo({ srcLogo, srcLogoIcon, isUpMd }: LogoProps) {
  return (
    <Box
      sx={(theme) => ({
        height: "55px",
        color: theme.palette.appbar.appbarItemColor,
        padding: isUpMd ? "10px 20px" : "10px",
        textAlign: "center",
      })}
    >
      <img
        src={isUpMd ? srcLogo : srcLogoIcon}
        alt="logo"
        style={{ height: "100%" }}
      />
    </Box>
  );
}
