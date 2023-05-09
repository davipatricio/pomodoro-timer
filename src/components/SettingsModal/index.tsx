import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { ModalContent, ModalWrapper } from "./styles";
import { useSettings } from "../../hooks/useSettings";

interface SettingsModalProps {
  open: boolean;
  onClose?: () => void;
}

export default function SettingsModal({ open, onClose }: SettingsModalProps) {
  const settings = useSettings();

  const handleModalClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose?.();
  };

  return open
    ? createPortal(
        <ModalWrapper onClick={handleModalClose}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <header>
              <h1>Configurações</h1>
              <button onClick={handleModalClose} type="button">
                <MdClose />
              </button>
            </header>

            <div>
              <label className="switch">
                <p>Ativar efeitos sonoros</p>
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={settings.toggleSound}
                />
              </label>
            </div>
          </ModalContent>
        </ModalWrapper>,

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById("root")!
      )
    : null;
}
