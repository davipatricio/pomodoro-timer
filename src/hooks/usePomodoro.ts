import { create } from "zustand";

interface PomodoroState {
  isRunning: boolean;
  progress: number;

  stages: ("focus" | "break" | "longBreak")[];
  setPomodoro: (pomodoro: Partial<PomodoroState>) => void;
  setProgress: (progress: number) => void;
  skipStage: () => void;
  reset: () => void;
}

export const PomodoroTimes: Record<PomodoroState["stages"][number], number> = {
  focus: 3,
  break: 5,
  longBreak: 5,
};

const DEFAULT_STAGES: PomodoroState["stages"] = [
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
    set(({ stages }) => {
      // If we're on a long break (last stage), reset the stages.
      if (stages[0] === "longBreak")
        return { stages: DEFAULT_STAGES, progress: 0 };

      return { stages: stages.slice(1), progress: 0 };
    }),
  reset: () => set({ isRunning: false, stages: DEFAULT_STAGES, progress: 0 }),
}));
