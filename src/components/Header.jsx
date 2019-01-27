import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <h3 className={"mt-4 ml-4"}>
        <u>{this.props.headerTitle}</u>
      </h3>
    );
  }
}
