import { ReactNode, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { useThemeStore } from "@/stores/themeStore";
import componentsOverride from "./overrides";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import palette from "./palette";
import typography from "./typography";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { themeMode, themeDirection } = useThemeStore();

  const isLight = themeMode === "light";
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(isLight),
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      typography,
    }),
    [themeMode, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateFormats={{ monthShort: `M` }}
      >
        <CssBaseline>{children}</CssBaseline>
      </LocalizationProvider>
    </MUIThemeProvider>
  );
}
