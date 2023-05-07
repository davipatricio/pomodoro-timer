import { create } from "zustand";

interface PomodoroState {
  isRunning: boolean;
  stages: ("focus" | "break" | "longBreak")[];
  setPomodoro: (
    pomodoro: Partial<PomodoroState>
  ) => void;
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
  // TODO: remove stage from array when it's done. stages[0] means the current stage.
  stages: DEFAULT_STAGES,
  setPomodoro: (pomodoro) => set(pomodoro),
  skipStage: () =>
    set((state) => {
      // If we're on a long break, reset the stages.
      if (state.stages[0] === "longBreak") {
        return {
          ...state,
          stages: DEFAULT_STAGES,
        };
      }

      // remove the first stage from the array.
      return { ...state, stages: state.stages.slice(1) };
    }),
  reset: () => set({ isRunning: false, stages: DEFAULT_STAGES }),
}));
