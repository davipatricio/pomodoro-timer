import { MdPause, MdPlayArrow, MdRefresh } from "react-icons/md";
import Icon from "../Icon";
import { Container } from "./styles";
import { usePomodoro } from "../../hooks/usePomodoro";
import { useCallback } from "react";
import { BadgeProps } from "../Badge";

interface ProgressBarProps {
  progress: number;
  time: string;
  type?: BadgeProps["type"];
}

export default function ProgressBar({ progress, time }: ProgressBarProps) {
  const pomodoro = usePomodoro();

  const PauseIcon = pomodoro.isRunning ? MdPause : MdPlayArrow;

  const handlePause = useCallback(() => {
    pomodoro.setPomodoro({ isRunning: !pomodoro.isRunning });
  }, [pomodoro]);

  const handleReset = useCallback(() => {
    pomodoro.reset();
  }, [pomodoro]);

  return (
    <Container progress={progress} $type={pomodoro.stages[0]}>
      <div className="actions">
        <Icon icon={<PauseIcon />} onClick={handlePause} />
        <Icon icon={<MdRefresh />} onClick={handleReset} />
      </div>

      <span>{time}</span>
      <progress value={progress} max="100">
        {Math.round(progress)}%
      </progress>
    </Container>
  );
}
