import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <h1 className={"text-center mt-4"}>
        <u>{this.props.headerTitle}</u>
      </h1>
    );
  }
}
