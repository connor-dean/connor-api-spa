import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";

export default class Table extends Component {
  render() {
    console.log(Object.values(this.props.tableData));
    return (
      <div>
        {/* <TableRowHeader>{this.props.tableHeader}</TableRowHeader> */}
        <table className={style}>
          <tbody>
            {Object.values(this.props.tableData).map((data, key) => (
              <tr key={key}>
                <th style={style}>{key}</th>
                <td>{data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const style = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 10
};
