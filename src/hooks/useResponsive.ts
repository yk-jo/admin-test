import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export default function useMUIBreakpoint() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // 0~599
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600~899
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900~1199
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // 1200~1535
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // 1536~

  const mediaQuery = (breakpoint: Breakpoint, method: "up" | "down") => {
    return useMediaQuery(theme.breakpoints[method]?.(breakpoint));
  };
  return { isXs, isSm, isMd, isLg, isXl, mediaQuery };
}
