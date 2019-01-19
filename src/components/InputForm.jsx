import React, { Component } from "react";

export default class InputForm extends Component {
  state = {
    inputValue: ""
  };

  render() {
    const { inputType, placeholder, onClick, buttonText } = this.props;

    return (
      <div>
        <input
          className={"form input-width"}
          input={inputType}
          placeholder={placeholder}
          onChange={this.props.onChangeValue}
        />
        <button className={"btn btn-primary"} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    );
  }
}
