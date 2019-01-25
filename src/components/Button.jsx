import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={this.props.buttonStyle}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
