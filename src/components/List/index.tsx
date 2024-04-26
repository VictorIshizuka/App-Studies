import style from "./list.module.scss";

export const List = ({ list }) => {
  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {list.map((item, index) => (
          <li className={style.item} key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
