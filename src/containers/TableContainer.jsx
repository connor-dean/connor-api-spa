import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default class TableContainer extends Component {
  render() {
    const {
      headerTitle,
      isIdTable,
      isError,
      key,
      tableData,
      tableDataSingleSeasonValues,
      tableDataRegularSeasonValues,
      style
    } = this.props;
    return (
      <div className={"ml-5 mt-3"} style={style}>
        <Header isError={isError} headerTitle={headerTitle} />
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
