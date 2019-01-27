import React, { Component } from "react";
import Button from "./Button";

export default class InputForm extends Component {
  state = {
    inputValue: ""
  };

  render() {
    const { inputType, placeholder, onClick, buttonText } = this.props;
    return (
      <div className={"col-4 m-5"}>
        <input
          value={this.props.value}
          style={style.inputStyle}
          className={"form-control"}
          input={inputType}
          placeholder={placeholder}
          onChange={this.props.onChangeValue}
        />
        <button className={"btn btn-primary"} onClick={onClick}>
          {buttonText}
        </button>
        <Button
          className={"btn btn-secondary"}
          buttonText={"Reset"}
          onClick={this.props.onHandleReset}
        />
      </div>
    );
  }
}

const style = {
  inputStyle: {
    padding: 10,
    marginRight: 5
  }
};
