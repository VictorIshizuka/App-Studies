import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { StopWatch } from "../components/stopwatch";
import style from "./app.module.scss";
import { TaskT } from "../types";

function App() {
  const [isSelected, setIsSelect] = useState<TaskT>();
  const [isTasks, setIsTasks] = useState<TaskT[]>([
    {
      task: "react",
      time: "01:00:00",
      completed: false,
      id: "2",
      selected: false,
    },
  ]);

  function selectedTask(selectedTask: TaskT) {
    setIsSelect(selectedTask);
    setIsTasks(oldTasks =>
      oldTasks.map(task => ({
        ...task,
        selected: task.id === isSelected?.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setState={setIsTasks} />
      <StopWatch />
      <List tasks={isTasks} selectedTask={selectedTask} />
    </div>
  );
}

export default App;
