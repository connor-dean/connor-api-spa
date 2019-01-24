import React, { Component } from "react";

export default class TableItem extends Component {
  render() {
    console.log(this.props.tableData);
    return <td>{this.props.tableData}</td>;
  }
}
