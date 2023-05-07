import { useCallback } from "react";
import { MdPause, MdPlayArrow, MdRefresh, MdSkipNext } from "react-icons/md";
import { usePomodoro } from "../../hooks/usePomodoro";
import { BadgeProps } from "../Badge";
import Icon from "../Icon";
import { Container } from "./styles";

interface ProgressBarProps {
  progress: number;
  time: string;
  type?: BadgeProps["type"];
}

export default function ProgressBar({ progress, time }: ProgressBarProps) {
  const { isRunning, setPomodoro, reset, skipStage, stages } = usePomodoro();

  const PauseIcon = isRunning ? MdPause : MdPlayArrow;

  const handleReset = useCallback(() => reset(), [reset]);
  const handleSkip = useCallback(() => skipStage(), [skipStage]);

  const handlePause = useCallback(
    () => setPomodoro({ isRunning: !isRunning }),
    [isRunning, setPomodoro]
  );

  return (
    <Container progress={progress} $type={stages[0]}>
      <div className="actions">
        <Icon icon={<MdRefresh />} onClick={handleReset} />
        <Icon icon={<PauseIcon />} onClick={handlePause} />
        <Icon icon={<MdSkipNext />} onClick={handleSkip} />
      </div>

      <span>{time}</span>
      <progress value={progress} max="100">
        {Math.round(progress)}%
      </progress>
    </Container>
  );
}
