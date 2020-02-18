import React from 'react';

type TableRowHeaderProps = {
  tableHeader: string;
}

export const TableRowHeader = ({ tableHeader }: TableRowHeaderProps) => {
  return <th>{tableHeader}</th>;
}

export default TableRowHeader;
