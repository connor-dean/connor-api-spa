import React, { Component } from "react";
import PropTypes from "prop-types";

type HeaderProps = {
  isError: boolean;
  errorMessage: string;
  headerTitle: string;
}

export const Header = ({ isError, errorMessage, headerTitle }: HeaderProps) => {
  const headerStyle = isError
    ? 'alert alert-warning'
    : 'page-header mt-2 ml-2 mb-3';

  return (
    <h3 className={headerStyle}>{isError ? errorMessage : headerTitle}</h3>
  );
}

export default Header;
