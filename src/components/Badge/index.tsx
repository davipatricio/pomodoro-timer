import { TbBrain, TbCoffee } from "react-icons/tb";
import { Container } from "./styles";
import { PomodoroStages } from "../../utils/constants/PomodoroStages";

const Types: Record<PomodoroStages, string> = {
  focus: "Foco",
  break: "Pausa",
  longBreak: "Pausa longa",
};

export interface BadgeProps {
  type: PomodoroStages;
}

export default function Badge({ type }: BadgeProps) {
  // break and longBreak are the same icon
  const Icon = () => (type === "focus" ? <TbBrain /> : <TbCoffee />);

  return (
    <Container $type={type}>
      <Icon />
      <span>{Types[type]}</span>
    </Container>
  );
}
