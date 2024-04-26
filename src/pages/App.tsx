import { Form } from "../components/Form";
import { List } from "../components/List";
import style from "./app.module.scss";

const list = [
  { id: 1, task: "React", time: "01:00:00" },
  { id: 2, task: "Javascript", time: "02:00:00" },
];

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List list={list} />
    </div>
  );
}

export default App;
