import React, { ReactNode } from "react";

export class Button extends React.Component {
  render(): ReactNode {
    return (
      <>
        <p>Titulo do botão</p>
        <button>Botão</button>
      </>
    );
  }
}
