import React, { Component } from "react";

export default class TableItem extends Component {
  render() {
    return <td>{this.props.tableData}</td>;
  }
}
