import { ItemList } from "./ItemList";
import style from "./list.module.scss";

export const List = ({ list }) => {
  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {list.map(item => (
          <ItemList task={item.task} time={item.time} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};
