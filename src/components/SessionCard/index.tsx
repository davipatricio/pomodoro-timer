import { useEffect, useState } from "react";
import HourglassSVG from "../../assets/hourglass.svg";
import Badge from "../Badge";
import Divider from "../Divider";
import Icon from "../Icon";
import ProgressBar from "../ProgressBar";
import { CardItem, Container } from "./styles";

export default function SessionCard() {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <CardItem className="header">
        <section>
          <h1>Dados da Sessão</h1>
          <p>Acompanhe os próximos cíclos</p>
        </section>

        <Icon icon={<img src={HourglassSVG} height="24" />} />
      </CardItem>

      <Divider />

      <CardItem className="header">
        <section>
          <h2>Modo atual:</h2>
          <span>Ciclo atual do cronômotro</span>
        </section>

        <Badge type="focus" />
      </CardItem>

      <CardItem className="header">
        <section>
          <h2>Próximo modo:</h2>
          <span>Qual ciclo será ativado</span>
        </section>

        <Badge type="longBreak" />
      </CardItem>

      <Divider />

      <ProgressBar progress={progress} time="11:11" />
    </Container>
  );
}
