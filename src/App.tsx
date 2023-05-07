import { lazy } from "react";
import { Container } from "./App.css.ts";

const SessionCard = lazy(() => import("./components/SessionCard"));
const Header = lazy(() => import("./components/Header"));

export default function App() {
  return (
    <Container>
      <Header />

      <div className="cards">
        <SessionCard />
      </div>
    </Container>
  );
}
