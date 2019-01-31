import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    const { className, onClick, buttonText } = this.props;

    return (
      <button type="button" className={className} onClick={onClick}>
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string
};
