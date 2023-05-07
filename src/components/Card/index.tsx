import { Container } from "./styles";

export default function Card({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
