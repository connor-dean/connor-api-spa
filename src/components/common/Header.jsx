import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { isError, errorMessage, headerTitle } = this.props;
    const headerStyle = isError
      ? "alert alert-warning"
      : "page-header mt-2 ml-2 mb-3";

    return (
      <h3 className={headerStyle}>{isError ? errorMessage : headerTitle}</h3>
    );
  }
}
