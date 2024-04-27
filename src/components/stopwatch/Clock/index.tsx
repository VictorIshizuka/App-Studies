import style from "./clock.module.scss";

interface TimeT {
  time: number | undefined;
}

export const Clock = ({ time = 0 }: TimeT) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minutesTen}</span>
      <span className={style.clockNumber}>{minutesUnit}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondsTen}</span>
      <span className={style.clockNumber}>{secondsUnit}</span>
    </>
  );
};
