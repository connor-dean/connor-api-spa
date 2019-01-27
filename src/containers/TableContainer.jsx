import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default class TableContainer extends Component {
  render() {
    const {
      headerTitle,
      isIdTable,
      key,
      tableData,
      tableDataSingleSeasonValues,
      tableDataRegularSeasonValues
    } = this.props;
    return (
      <div className={"col-7"}>
        <Header headerTitle={headerTitle} />
        <Table
          isIdTable={isIdTable}
          key={key}
          tableData={tableData}
          tableDataSingleSeasonValues={tableDataSingleSeasonValues}
          tableDataRegularSeasonValues={tableDataRegularSeasonValues}
        />
      </div>
    );
  }
}
