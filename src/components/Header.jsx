import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const isError = this.props.isError;
    const headerTitle = this.props.headerTitle;
    const headerStyle = isError
      ? "alert alert-warning mt-5"
      : "page-header mt-5 ml-2";

    return (
      <h3 className={headerStyle}>
        {isError ? "Error: Please check your input." : headerTitle}
      </h3>
    );
  }
}
