import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";

export default class Table extends Component {
  render() {
    const { isIdTable, tableData, tableDataSingleSeasonValues } = this.props;

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
              : tableDataSingleSeasonValues.map((data, key) => (
                  <React.Fragment>
                    <tr key={key}>
                      <TableRowHeader
                        style={style}
                        tableHeader={regularSeasonHeaders[key]}
                      />
                      <TableItem tableData={data} />
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
