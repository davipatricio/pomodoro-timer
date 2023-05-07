import { PomodoroStages } from "./PomodoroStages";

export const PomodoroTimes: Record<PomodoroStages[number], number> = {
  focus: 3,
  break: 5,
  longBreak: 5,
};
