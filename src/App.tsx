import { Form } from "./components/Form";
import { List } from "./components/List";

const list = [
  { id: 1, task: "React", time: "01:00:00" },
  { id: 2, task: "Javascript", time: "02:00:00" },
];

function App() {
  return (
    <>
      renderizando
      <Form />
      <List list={list} />
    </>
  );
}

export default App;
