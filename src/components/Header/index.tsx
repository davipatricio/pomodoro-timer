import { useCallback, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import {
  MdOutlineModeNight,
  MdOutlineWbSunny,
  MdSettings,
} from "react-icons/md";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import Icon from "../Icon";
import { Container } from "./styles";
import SettingsModal from "../SettingsModal";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, setTheme } = useCurrentTheme();

  const ThemeIcon = theme === "light" ? MdOutlineWbSunny : MdOutlineModeNight;

  const handleTheme = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme, setTheme]
  );

  const handleNewTab = useCallback(
    () =>
      window.open("https://github.com/davipatricio/pomodoro-timer", "_blank"),
    []
  );

  const toggleModal = useCallback(() => setModalOpen((prev) => !prev), []);

  return (
    <Container>
      <div className="name">
        <h1>Pomodoro</h1>
        <p>Gerencie seu tempo de maneira mágica!</p>
      </div>

      <div className="icons">
        <Icon icon={<ThemeIcon />} onClick={handleTheme} />
        <Icon icon={<AiOutlineGithub />} onClick={handleNewTab} />
        <Icon icon={<MdSettings />} onClick={toggleModal} />

        <SettingsModal open={modalOpen} onClose={toggleModal} />
      </div>
    </Container>
  );
}
