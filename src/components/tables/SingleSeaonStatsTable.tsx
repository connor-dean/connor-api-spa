import React from 'react';
import TableItem from './TableItem.tsx';
import TableRowHeader from './TableRowHeader.tsx';
import Header from '../common/Header.tsx';
import CSS from 'csstype';

const singleSeasonHeaders = [
  'Total Games',
  'Wins',
  'Losses',
  'OT',
  'Points',
  'Point %',
  'Goals/Game',
  'Goals Against/Game',
  'GGA Ratio',
  'Power Play %',
  'Power Play Goals',
  'Power Play Goals Against',
  'Power Play Opportunities',
  'Penalty Kill %',
  'Shots/Game',
  'Shots Allowed',
  'Wins - Score First',
  'Wins - Scored Last',
  'Wins - Lead First Period',
  'Wins - Lead Second Period',
  'Wins - Outshoot Opponents',
  'Wins - Outshot by Opponent',
  'Faceoffs Taken',
  'Faceoffs Won',
  'Faceoffs Lost',
  'Faceoff Win %',
  'Shooting %',
  'Save %'
];

type SingleSeasonStatsProps = {
  isIdTable: boolean;
  isSubmitted: boolean;
  tableDataSingleSeasonValues: any[]; // TODO create a model
  isError: boolean;
  errorMessage: string;
  headerTitle: string;
  style: CSS.Properties;
}

export const SingleSeasonStatsTable = ({
  isIdTable,
  isSubmitted,
  tableDataSingleSeasonValues,
  isError,
  errorMessage,
  headerTitle,
  style
}: SingleSeasonStatsProps) => {
  const displayStyling = (isIdTable || isSubmitted) && !isError 
    ? style 
    : null;

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

export default SingleSeasonStatsTable;
