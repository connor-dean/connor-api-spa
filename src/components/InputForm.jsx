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
      onHandleReset
    } = this.props;
    return (
      <div className={"m-5"}>
        <input
          value={value}
          style={style.inputStyle}
          className={"form-control"}
          input={inputType}
          placeholder={placeholder}
          onChange={onChangeValue}
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
