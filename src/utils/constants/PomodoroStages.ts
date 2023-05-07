export type PomodoroStages = "focus" | "break" | "longBreak";

export const formattedStages: Record<PomodoroStages, string> = {
  focus: "Foco",
  break: "Pausa",
  longBreak: "Pausa longa",
};