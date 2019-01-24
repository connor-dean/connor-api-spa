import React, { Component } from "react";

export default class InputForm extends Component {
  state = {
    inputValue: ""
  };

  render() {
    const { inputType, placeholder, onClick, buttonText } = this.props;
    return (
      <div className={"col-4 mt-5 ml-5 mb-5 mr-5 input-group"}>
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
