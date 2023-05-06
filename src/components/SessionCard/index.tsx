import HourglassSVG from "../../assets/hourglass.svg";
import Badge from "../Badge";
import Divider from "../Divider";
import Icon from "../Icon";
import { CardItem, Container } from "./styles";

export default function SessionCard() {
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
    </Container>
  );
}
