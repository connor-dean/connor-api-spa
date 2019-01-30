import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TableItem extends Component {
  render() {
    return <td>{this.props.tableData}</td>;
  }
}

TableItem.propTypes = {
  tableData: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
