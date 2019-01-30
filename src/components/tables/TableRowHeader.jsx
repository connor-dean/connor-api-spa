import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TableRowHeader extends Component {
  render() {
    return <th>{this.props.tableHeader}</th>;
  }
}

TableRowHeader.propTypes = {
  tableHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
