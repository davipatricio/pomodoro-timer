import { Container } from "./App.css.ts";
import SessionCard from "./components/SessionCard";
import Header from "./components/Header/index.tsx";

export default function App() {
  return (
    <Container>
      <Header />

      <div className="cards">
        <SessionCard />
        <SessionCard />
      </div>
    </Container>
  );
}
