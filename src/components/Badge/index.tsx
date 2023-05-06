import { TbBrain, TbCoffee } from "react-icons/tb";
import { Container } from "./styles";

const Types: Record<BadgeProps["type"], string> = {
  focus: "Foco",
  break: "Pausa",
  longBreak: "Pausa longa",
};

export interface BadgeProps {
  type: "focus" | "break" | "longBreak";
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
