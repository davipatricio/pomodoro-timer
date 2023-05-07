import { MdPause, MdRefresh } from "react-icons/md";
import Icon from "../Icon";
import { Container } from "./styles";

interface ProgressBarProps {
  progress: number;
  time: string;
}

export default function ProgressBar({ progress, time }: ProgressBarProps) {
  const handlePause = () => {
    console.log("pause");
  };

  const handleReset = () => {
    console.log("reset");
  };

  return (
    <Container progress={progress}>
      <div className="actions">
        <Icon icon={<MdPause />} onClick={handlePause} />
        <Icon icon={<MdRefresh />} onClick={handleReset} />
      </div>

      <span>{time}</span>
      <progress value={progress} max="100">
        {Math.round(progress)}%
      </progress>
    </Container>
  );
}
