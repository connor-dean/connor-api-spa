import React, { Component } from "react";
import InputForm from "../components/InputForm";

export default class SearchContainer extends Component {
  render() {
    return (
      <InputForm
        input={"text"}
        placeholder={"Enter a player's name..."}
        buttonText={"Submit"}
      />
    );
  }
}
