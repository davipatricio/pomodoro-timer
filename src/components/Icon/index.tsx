import { Container } from "./styles";

interface IconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function Icon({ icon, onClick }: IconProps) {
  return (
    <Container className="icon" $clickable={Boolean(onClick)} onClick={onClick}>
      {icon}
    </Container>
  );
}
