import hhMmSs from "hh-mm-ss";
import { lazy, useEffect } from "react";
import HourglassSVG from "../../assets/hourglass.svg";
import { usePomodoro } from "../../hooks/usePomodoro";
import { PomodoroTimes } from "../../utils/constants/PomodoroTimes";
import { CardItem, Container } from "./styles";

const Badge = lazy(() => import("../Badge"));
const Divider = lazy(() => import("../Divider"));
const Icon = lazy(() => import("../Icon"));
const ProgressBar = lazy(() => import("../ProgressBar"));

export default function SessionCard() {
  const pomodoro = usePomodoro();

  const stageDuration = PomodoroTimes[pomodoro.stages[0]];
  const progressPercent = 100 - (pomodoro.progress / stageDuration) * 100;

  useEffect(() => {
    const id = setInterval(() => {
      if (!pomodoro.isRunning) return;

      if (progressPercent <= 0) {
        clearInterval(id);
        pomodoro.skipStage();
        pomodoro.setProgress(0);
        return;
      }

      pomodoro.setProgress(pomodoro.progress + 1);
    }, 1000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressPercent, pomodoro.isRunning]);

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
        time={hhMmSs.fromS(stageDuration - pomodoro.progress)}
        type={pomodoro.stages[0]}
      />
    </Container>
  );
}
