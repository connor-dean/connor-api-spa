import React, { Component } from "react";
import Button from "./Button";

export default class InputForm extends Component {
  state = {
    inputValue: ""
  };

  render() {
    const {
      inputType,
      placeholder,
      onClick,
      buttonText,
      value,
      onChangeValue,
      onHandleReset,
      style
    } = this.props;
    return (
      <div className={"ml-5 mb-3 mt-3"} style={style}>
        <input
          value={value}
          style={style.inputStyle}
          className={"form-control mb-1"}
          input={inputType}
          placeholder={placeholder}
          onChange={onChangeValue}
          onKeyPress={event => {
            if (event.key === "Enter") {
              onClick();
            }
          }}
        />
        <button className={"btn btn-primary mr-1"} onClick={onClick}>
          {buttonText}
        </button>
        <Button
          className={"btn btn-secondary"}
          buttonText={"Reset"}
          onClick={onHandleReset}
        />
      </div>
    );
  }
}

const style = {
  inputStyle: {
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    width: "200px"
  }
};
