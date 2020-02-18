import React from 'react';

type TableItemProps = {
  tableData: any[]; // TODO make a model for this
}

export const TableItem = ({ tableData }: TableItemProps) => {
  return <td>{tableData}</td>;
}

export default TableItem;
