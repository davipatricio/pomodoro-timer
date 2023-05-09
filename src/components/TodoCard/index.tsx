import { lazy, useCallback, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import RocketSVG from "../../assets/rocket.svg";
import CheckmarkSVG from "../../assets/checkmark.svg";
import { CheckboxWrapper, SubmitWrapper } from "./styles";

const Card = lazy(() => import("../Card"));
const CardItem = lazy(() => import("../Card/CardItem"));
const Divider = lazy(() => import("../Divider"));
const Icon = lazy(() => import("../Icon"));

export default function TodoCard() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
    []
  );

  const handleAddTask = useCallback(() => {
    if (!inputValue) return;

    setTasks([...tasks, inputValue]);
    setInputValue("");
  }, [inputValue, tasks]);

  const [buttonIcon, setButtonIcon] = useState(
    window.innerWidth <= 768 ? <MdAdd /> : <p>Adicionar</p>
  );

  useEffect(() => {
    const handleResize = () =>
      setButtonIcon(window.innerWidth <= 768 ? <MdAdd /> : <p>Adicionar</p>);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card>
      <CardItem>
        <section>
          <h1>Lista de Tarefas</h1>
          <p>Seus objetivos para essa sessão</p>
        </section>

        <Icon icon={<img src={RocketSVG} height="24" />} />
      </CardItem>

      <Divider />

      <CheckboxWrapper $checkmarkUrl={CheckmarkSVG}>
        {tasks.length ? (
          tasks.map((task, index) => (
            <label key={`${task}-${index}`}>
              <input type="checkbox" />
              <span>{task}</span>
            </label>
          ))
        ) : (
          <p>Ainda não há nenhuma tarefa.</p>
        )}
      </CheckboxWrapper>

      <SubmitWrapper>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddTask} disabled={!inputValue}>
          {buttonIcon}
        </button>
      </SubmitWrapper>
    </Card>
  );
}
