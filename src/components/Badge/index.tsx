import { TbBrain, TbCoffee } from "react-icons/tb";
import {
  PomodoroStages,
  formattedStages,
} from "../../utils/constants/PomodoroStages";
import { Container } from "./styles";

export default function Badge({ type }: { type: PomodoroStages }) {
  // break and longBreak are the same icon
  const Icon = type === "focus" ? TbBrain : TbCoffee;

  return (
    <Container $type={type}>
      <Icon />
      <span>{formattedStages[type]}</span>
    </Container>
  );
}
