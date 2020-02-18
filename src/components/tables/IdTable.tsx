import React from 'react';
import TableItem from './TableItem.tsx';
import TableRowHeader from './TableRowHeader.tsx';
import Header from '../common/Header.tsx';
import CSS from 'csstype';

type IdTableProps = {
  tableData: any[]; // TODO create a model for this
  isError: boolean;
  headerTitle: string;
  style: CSS.Properties;
}

export const IdTable = ({ tableData, isError, headerTitle, style }: IdTableProps) => {
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
              <TableItem tableData={data.name + ' - ' + data.abbreviation} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IdTable;
