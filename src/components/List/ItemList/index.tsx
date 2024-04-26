import { TaskT } from "../../../types";
import style from "../list.module.scss";

export const ItemList = ({ task, time }: TaskT) => {
  return (
    <>
      <li className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
      </li>
    </>
  );
};
