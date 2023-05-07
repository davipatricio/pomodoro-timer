import { darkTheme } from "../../styles/themes/dark";
import { PomodoroStages } from "./PomodoroStages";

export const StateColors: Record<PomodoroStages, string> = {
  focus: darkTheme.colors.lime,
  break: darkTheme.colors.orange,
  longBreak: darkTheme.colors.cyan,
};
