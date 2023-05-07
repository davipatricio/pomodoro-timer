import { Container } from "./styles";

interface ProgressBarProps {
  progress: number;
  time: string;
}

export default function ProgressBar({ progress, time }: ProgressBarProps) {
  return (
    <Container progress={progress} title={`Current progress: ${progress}%`}>
      <span>{time}</span>
      <progress value={progress} max="100">
        {progress}%
      </progress>
    </Container>
  );
}
