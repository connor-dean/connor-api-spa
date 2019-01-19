import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand center-navbar">{this.props.headerTitle}</a>
      </nav>
    );
  }
}
