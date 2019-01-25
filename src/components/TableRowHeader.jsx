import React, { Component } from "react";

export default class TableRowHeader extends Component {
  render() {
    return <th>{this.props.tableHeader}</th>;
  }
}
