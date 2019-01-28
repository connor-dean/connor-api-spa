import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";

export default class Table extends Component {
  render() {
    const {
      isIdTable,
      tableData,
      tableDataSingleSeasonValues,
      isError
    } = this.props;
    return (
      <div>
        {isIdTable ? (
          <table className={style}>
            <tbody>
              {Object.values(tableData).map((data, key) => (
                <tr key={key}>
                  <TableRowHeader
                    isError={isError}
                    style={style}
                    tableHeader={data.id}
                  />
                  <TableItem
                    tableData={data.name + " - " + data.abbreviation}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className={"table table-striped"}>
            <tbody>
              {tableDataSingleSeasonValues.map((data, key) => (
                <tr key={key}>
                  <TableRowHeader
                    isError={isError}
                    style={style}
                    tableHeader={regularSeasonHeaders[key]}
                  />
                  <TableItem tableData={data} />
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const style = {
  width: "10px",
  overFlowTable: {
    height: "100px",
    overflow: "auto"
  }
};

const regularSeasonHeaders = [
  "Total Games",
  "Wins",
  "Losses",
  "OT",
  "Points",
  "Point %",
  "Goals/Game",
  "Goals Against/Game",
  "EVGGA Ratio",
  "Power Play %",
  "Power Play Goals",
  "Power Play Goals Against",
  "Power Play Opportunities",
  "Penalty Kill %",
  "Shots/Game",
  "Shots Allowed",
  "Wins - Score First",
  "Wins - Scored Last",
  "Wins - Lead First Period",
  "Wins - Lead Second Period",
  "Wins - Outshoot Opponents",
  "Wins - Outshot by Opponent",
  "Faceoffs Taken",
  "Faceoffs Won",
  "Faceoffs Lost",
  "Faceoff Win %",
  "Shooting %",
  "Save %"
];
