import React from "react";
import { Button } from "../Button";
import style from "./form.module.scss";
import { TaskT } from "../../types";
import { v4 as uuidv4 } from "uuid";

export class Form extends React.Component<{
  setState: React.Dispatch<React.SetStateAction<TaskT[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
    selected: false,
    completed: false,
    id: 1,
  };

  onSave(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.setState(oldTasks => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({ task: "", time: "00:00" });
  }

  render(): React.ReactNode {
    return (
      <>
        <form className={style.newTask} onSubmit={this.onSave.bind(this)}>
          <div className={style.inputContainer}>
            <label htmlFor="task">Adicionar um novo estudo</label>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="O que você quer estudar"
              onChange={e =>
                this.setState({ ...this.state, task: e.target.value })
              }
              value={this.state.task}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="time">Tempo</label>
            <input
              type="time"
              step="1"
              name="time"
              id="time"
              min="00:00"
              max="01:30"
              onChange={e =>
                this.setState({ ...this.state, time: e.target.value })
              }
              value={this.state.time}
              required
            />
          </div>
          <Button>Adicionar</Button>
        </form>
      </>
    );
  }
}
