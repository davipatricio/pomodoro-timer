import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";

interface CurrentThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useCurrentTheme = create(
  persist<CurrentThemeState>(
    (set) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
    }
  )
);
