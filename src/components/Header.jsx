import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const isError = this.props.isError;
    const headerTitle = this.props.headerTitle;
    const headerStyle = isError
      ? "alert alert-warning"
      : "page-header mt-4 ml-4";

    return (
      <h3 className={headerStyle}>
        <u>{isError ? "Error: Please check your input." : headerTitle}</u>
      </h3>
    );
  }
}
