import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default class TableContainer extends Component {
  render() {
    return (
      <div className={"col-7"}>
        <Header headerTitle={this.props.headerTitle} />
        <Table
          isIdTable={this.props.isIdTable}
          key={this.props.key}
          tableData={this.props.tableData}
          tableDataSingleSeasonValues={this.props.tableDataSingleSeasonValues}
          tableDataRegularSeasonValues={this.props.tableDataRegularSeasonValues}
        />
      </div>
    );
  }
}
