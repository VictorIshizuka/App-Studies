import { Props } from "../../../types";
import style from "../list.module.scss";

export const ItemList = ({
  task,
  time,
  completed,
  selected,
  id,
  selectedTask,
}: Props) => {
  console.log(completed);
  return (
    <>
      <li
        className={`${style.item} ${selected ? style.itemSelected : ""} ${
          completed ? style.itemCompleted : ""
        }`}
        onClick={() => selectedTask({ task, time, selected, completed, id })}
      >
        <h3>{task}</h3>
        <span>{time}</span>
      </li>
    </>
  );
};
