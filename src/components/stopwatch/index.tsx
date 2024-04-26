import style from "./stopwatch.module.scss";
import { Button } from "../Button";
import { Clock } from "./Clock";

export const StopWatch = () => {
  return (
    <div className={style.stopWatch}>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button className={style.button}>Começar</Button>
    </div>
  );
};
