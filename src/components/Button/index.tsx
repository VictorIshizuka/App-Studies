import React, { ReactNode } from "react";
import style from "./button.module.scss";

export class Button extends React.Component {
  render(): ReactNode {
    return (
      <>
        <button className={style.button} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </>
    );
  }
}
