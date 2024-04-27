import { ItemList } from "./ItemList";
import style from "./list.module.scss";
import { TasksT } from "../../types";

export const List = ({ tasks, selectedTask }: TasksT): TasksT => {
  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(item => (
          <ItemList selectedTask={selectedTask} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};
