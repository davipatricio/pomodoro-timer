import { useCallback } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import Icon from "../Icon";
import { Container } from "./styles";

export default function Header() {
  const { theme, setTheme } = useCurrentTheme();

  const ThemeIcon = theme === "light" ? MdOutlineWbSunny : MdOutlineModeNight;

  const handleTheme = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme, setTheme]
  );

  return (
    <Container>
      <div className="name">
        <h1>Pomodoro</h1>
        <p>Gerencie seu tempo de maneira mágica!</p>
      </div>

      <div className="icons">
        <Icon icon={<ThemeIcon />} onClick={handleTheme} />
        <Icon icon={<AiOutlineGithub />} />
      </div>
    </Container>
  );
}
