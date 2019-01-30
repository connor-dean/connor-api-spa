import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";
import Header from "../common/Header";

export default class IdTable extends Component {
  render() {
    const { tableData, isError, headerTitle, style } = this.props;

    return (
      <div style={style}>
        <Header isError={isError} headerTitle={headerTitle} />
        <table>
          <tbody>
            {Object.values(tableData).map((data, key) => (
              <tr key={key}>
                <TableRowHeader
                  isError={isError}
                  style={style}
                  tableHeader={data.id}
                />
                <TableItem tableData={data.name + " - " + data.abbreviation} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
