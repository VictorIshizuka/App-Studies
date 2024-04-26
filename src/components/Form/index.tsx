import React from "react";
import { Button } from "../Button";

export class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <form>
          <div>
            <label>Adicionar um novo estudo</label>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="O que você quer estudar"
              required
            />
          </div>
          <div>
            <label>Tempo</label>
            <input
              type="time"
              step="1"
              name="time"
              id="time"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
          <Button />
        </form>
      </>
    );
  }
}
