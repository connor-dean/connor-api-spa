import React, { Component } from "react";
import TableItem from "./TableItem";
import TableRowHeader from "./TableRowHeader";
import Header from "../common/Header";
import PropTypes from "prop-types";

export default class SingleSeasonStatsTable extends Component {
  render() {
    const {
      isIdTable,
      isSubmitted,
      tableDataSingleSeasonValues,
      isError,
      errorMessage,
      headerTitle,
      style
    } = this.props;

    const displayStyling =
      (isIdTable || isSubmitted) && !isError ? style : null;

    return (
      <div style={displayStyling} className="ml-5 mt-3">
        <Header
          isError={isError}
          headerTitle={headerTitle}
          errorMessage={errorMessage}
        />
        <table className="table table-striped">
          <tbody>
            {tableDataSingleSeasonValues.map((data, key) => (
              <tr key={key}>
                <TableRowHeader
                  isError={isError}
                  style={style}
                  tableHeader={singleSeasonHeaders[key]}
                />
                <TableItem tableData={data} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const singleSeasonHeaders = [
  "Total Games",
  "Wins",
  "Losses",
  "OT",
  "Points",
  "Point %",
  "Goals/Game",
  "Goals Against/Game",
  "GGA Ratio",
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

SingleSeasonStatsTable.propTypes = {
  isIdTable: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  tableDataSingleSeasonValues: PropTypes.array,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  headerTitle: PropTypes.string,
  style: PropTypes.object
};
