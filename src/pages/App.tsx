import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { StopWatch } from "../components/stopwatch";
import style from "./app.module.scss";
import { TaskT } from "../types";

function App() {
  const [isValue, setIsValue] = useState<TaskT[]>([
    { task: "react", time: "01:00:00" },
  ]);

  return (
    <div className={style.AppStyle}>
      <Form setState={setIsValue} />
      <StopWatch />
      <List tasks={isValue} />
    </div>
  );
}

export default App;
