import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default class TableContainer extends Component {
  render() {
    return (
      <div className={"col-7"}>
        <Header headerTitle={this.props.headerTitle} />
        <Table
          key={this.props.key}
          tableHeader={this.props.tableHeader}
          tableData={this.props.tableData}
        />
      </div>
    );
  }
}
