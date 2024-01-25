import { create } from "zustand";

type ThemeModeType = "light" | "dark";
type ThemeDirectionType = "rtl" | "ltr";

type ThemeStoreType = {
  themeMode: ThemeModeType;
  themeDirection: ThemeDirectionType;
  setThemeMode: (themeMode: ThemeModeType) => void;
  setThemeDirection: (themeDirection: ThemeDirectionType) => void;
};

export const useThemeStore = create<ThemeStoreType>((set, get) => ({
  themeMode: "light",
  themeDirection: "ltr",
  setThemeMode: (themeMode) => set({ themeMode }),
  setThemeDirection: (themeDirection) => set({ themeDirection }),
}));
