import { appBarHeight } from "@/config";
import { Box } from "@mui/material";

interface LogoProps {
  srcLogo?: string;
  srcLogoIcon?: string;
  full?: boolean;
}
export default function Logo({ srcLogo, srcLogoIcon, full }: LogoProps) {
  return (
    <Box
      sx={(theme) => ({
        height: `${appBarHeight}px`,
        color: theme.palette.appbar.appbarItemColor,
        padding: "15px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <img
        src={full ? srcLogo : srcLogoIcon}
        alt="logo"
        style={{ height: "100%" }}
      />
    </Box>
  );
}
