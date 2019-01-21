import React, { Component } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default class TableContainer extends Component {
  render() {
    return (
      <div>
        <Header headerTitle={this.props.headerTitle} />
        <Table
          tableTitleCity={this.props.tableTitleCity}
          tableCity={this.props.tableCity}
          tableTitleTemp={this.props.tableTitleTemp}
          tableTemp={this.props.tableTemp}
        />
      </div>
    );
  }
}
