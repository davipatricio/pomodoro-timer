import { create } from "zustand";
import { PomodoroStages } from "../utils/constants/PomodoroStages";
import { playPing } from "../utils/playPing";

interface PomodoroState {
  isRunning: boolean;
  progress: number;
  stages: PomodoroStages[];

  setPomodoro: (pomodoro: Partial<PomodoroState>) => void;
  setProgress: (progress: number) => void;
  skipStage: () => void;
  reset: () => void;
}

const DEFAULT_STAGES: PomodoroStages[] = [
  "focus",
  "break",
  "focus",
  "break",
  "focus",
  "break",
  "focus",
  "longBreak",
];

export const usePomodoro = create<PomodoroState>((set) => ({
  isRunning: false,
  progress: 0,
  stages: DEFAULT_STAGES,

  setPomodoro: (pomodoro) => set(pomodoro),
  setProgress: (progress) => set({ progress }),
  skipStage: () =>
    set((state) => {
      playPing();

      const nextStages = state.stages.slice(1);
      const progress = nextStages[0] === "longBreak" ? 0 : state.progress;

      return { stages: nextStages, progress };
    }),
  reset: () => set({ isRunning: false, stages: DEFAULT_STAGES, progress: 0 }),
}));
