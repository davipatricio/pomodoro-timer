import { lazy, useCallback, useState } from "react";
import RocketSVG from "../../assets/rocket.svg";
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

      <CheckboxWrapper>
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
          Adicionar
        </button>
      </SubmitWrapper>
    </Card>
  );
}
