import { PomodoroStages } from "./PomodoroStages";

export const PomodoroTimes: Record<PomodoroStages[number], number> = {
  focus: 25 * 60,
  break: 5 * 60,
  longBreak: 15 * 60,
};
