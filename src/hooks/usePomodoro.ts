import { create } from "zustand";

interface PomodoroState {
  stage: "focus" | "shortBreak" | "longBreak";
  secondsRemaining: number;
  isRunning: boolean;
  stages: PomodoroState["stage"][];
  setPomodoro: (pomodoro: Omit<PomodoroState, "setPomodoro">) => void;
}

export const usePomodoro = create<PomodoroState>((set) => ({
  stage: "focus",
  secondsRemaining: 1500,
  isRunning: false,
  // TODO: remove stage from array when it's done. stages[0] means the current stage.
  stages: [
    "focus",
    "shortBreak",
    "focus",
    "shortBreak",
    "focus",
    "shortBreak",
    "focus",
    "longBreak",
  ],
  setPomodoro: (pomodoro) => set(pomodoro),
}));
