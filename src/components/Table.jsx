import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";

export default class Table extends Component {
  render() {
    const { isIdTable, tableData } = this.props;

    return (
      <div>
        <table className={style}>
          <tbody>
            {isIdTable
              ? Object.values(tableData).map((data, key) => (
                  <tr key={key}>
                    <TableRowHeader style={style} tableHeader={data.id} />
                    <TableItem
                      tableData={data.name + " - " + data.abbreviation}
                    />
                  </tr>
                ))
              : Object.values(tableData).map((data, key) => (
                  <React.Fragment>
                    <tr key={key}>
                      <TableRowHeader style={style} tableHeader={data.id} />
                      <TableItem
                        tableData={data.name + " - " + data.abbreviation}
                      />
                    </tr>
                    <tr>
                      <TableRowHeader style={style} tableHeader={"Division"} />
                      <TableItem tableData={data.division.name} />
                    </tr>
                    <tr>
                      <TableRowHeader
                        style={style}
                        tableHeader={"Conference"}
                      />
                      <TableItem tableData={data.conference.name} />
                    </tr>
                  </React.Fragment>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const style = {
  width: "10px"
};
