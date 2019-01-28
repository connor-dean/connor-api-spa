import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { isError, headerTitle } = this.props;
    const error = isError;
    const title = headerTitle;
    const headerStyle = isError
      ? "alert alert-warning"
      : "page-header mt-2 ml-2 mb-3";

    return (
      <h3 className={headerStyle}>
        {error ? "Error: Please check your input." : title}
      </h3>
    );
  }
}
