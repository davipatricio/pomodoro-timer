import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  soundEnabled: boolean;
  toggleSound: () => void;
}

export const useSettings = create(
  persist<SettingsState>(
    (set) => ({
      soundEnabled: true,
      toggleSound: () =>
        set((state) => ({ soundEnabled: !state.soundEnabled })),
    }),
    {
      name: "settings",
    }
  )
);
