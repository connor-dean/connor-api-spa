import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        type={"button"}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
