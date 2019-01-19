import React, { Component } from "react";
import TableContainer from "./containers/TableContainer";
import SearchContainer from "./containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <TableContainer />
      </div>
    );
  }
}

export default App;
