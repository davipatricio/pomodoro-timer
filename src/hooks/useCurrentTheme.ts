import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CurrentThemeState {
  theme: "light" | "dark";
  setTheme: (theme: CurrentThemeState["theme"]) => void;
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
