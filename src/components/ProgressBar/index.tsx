import { lazy, useCallback } from "react";
import { MdPause, MdPlayArrow, MdRefresh, MdSkipNext } from "react-icons/md";
import { usePomodoro } from "../../hooks/usePomodoro";
import { Container } from "./styles";
import { playPing } from "../../utils/playPing";
import { useSettings } from "../../hooks/useSettings";

const Icon = lazy(() => import("../Icon"));

interface ProgressBarProps {
  progress: number;
  time: string;
}

export default function ProgressBar({ progress, time }: ProgressBarProps) {
  const { isRunning, setPomodoro, reset, skipStage, stages } = usePomodoro();
  const { soundEnabled } = useSettings();

  const PauseIcon = isRunning ? MdPause : MdPlayArrow;

  const handleReset = useCallback(() => reset(), [reset]);
  const handleSkip = useCallback(() => {
    if (soundEnabled) playPing();
    skipStage();
  }, [soundEnabled, skipStage]);

  const handlePause = useCallback(
    () => setPomodoro({ isRunning: !isRunning }),
    [isRunning, setPomodoro]
  );

  return (
    <Container progress={progress} $type={stages[0]}>
      <span>{time}</span>
      <progress value={progress} max="100">
        {Math.round(progress)}%
      </progress>

      <div className="actions">
        <Icon icon={<MdRefresh />} onClick={handleReset} />
        <Icon icon={<PauseIcon />} onClick={handlePause} />
        <Icon icon={<MdSkipNext />} onClick={handleSkip} />
      </div>
    </Container>
  );
}
