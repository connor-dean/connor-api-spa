import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table className={style}>
          <tbody>
            <tr>
              <th>{this.props.tableTitleCity}</th>
              <td>{this.props.tableCity}</td>
            </tr>
            <tr>
              <th>{this.props.tableTitleTemp}</th>
              <td>{this.props.tableTemp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const style = {
  width: 100
};
