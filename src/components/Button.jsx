import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { className, onClick, buttonText } = this.props;
    return (
      <button type={"button"} className={className} onClick={onClick}>
        {buttonText}
      </button>
    );
  }
}
