import style from "./stopwatch.module.scss";
import { Button } from "../Button";
import { Clock } from "./Clock";
import { ConvertInSec } from "../../common/utils/date";
import { TaskT } from "../../types";
import { useEffect, useState } from "react";

interface Props {
  selected: TaskT | undefined;
  finallyTask: () => void;
}

export const StopWatch = ({ selected, finallyTask }: Props) => {
  const [isTime, setIsTime] = useState<number>();

  function regressiveTeam(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setIsTime(count - 1);
        return regressiveTeam(count - 1);
      }
      finallyTask();
    }, 1000);
  }

  useEffect(() => {
    if (selected?.time) {
      setIsTime(ConvertInSec(String(selected?.time)));
    }
  }, [selected?.time]);
  return (
    <div className={style.stopWatch}>
      <p>tempo:{isTime}</p>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
        <Clock time={isTime} />
      </div>
      <Button
        className={style.button}
        onClick={() => {
          regressiveTeam(isTime);
        }}
      >
        Começar
      </Button>
    </div>
  );
};
