import hhMmSs from "hh-mm-ss";
import { useEffect, useState } from "react";
import HourglassSVG from "../../assets/hourglass.svg";
import { PomodoroTimes, usePomodoro } from "../../hooks/usePomodoro";
import Badge from "../Badge";
import Divider from "../Divider";
import Icon from "../Icon";
import ProgressBar from "../ProgressBar";
import { CardItem, Container } from "./styles";

export default function SessionCard() {
  const pomodoro = usePomodoro();
  const [progressSeconds, setProgressSeconds] = useState(1);

  const currentPomodoroTime = PomodoroTimes[pomodoro.stages[0]];

  const progressPercent = 100 - (progressSeconds / currentPomodoroTime) * 100;

  useEffect(() => {
    const id = setInterval(() => {
      setProgressSeconds((prevProgress) => {
        if (progressPercent <= 0) {
          clearInterval(id);
          pomodoro.skipStage();
          return 0;
        }

        return prevProgress + 1;
      });
    }, 1000);

    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressPercent]);

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

        <Badge type={pomodoro.stages[0]} />
      </CardItem>

      <CardItem className="header">
        <section>
          <h2>Próximo modo:</h2>
          <span>Qual ciclo será ativado</span>
        </section>

        <Badge type={pomodoro.stages[1] ?? "focus"} />
      </CardItem>

      <ProgressBar
        progress={progressPercent}
        time={hhMmSs.fromS(currentPomodoroTime - progressSeconds)}
      />
    </Container>
  );
}
