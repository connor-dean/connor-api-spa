import React, { Component } from "react";
import SearchContainer from "./containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div style={style}>
        <SearchContainer />
      </div>
    );
  }
}

const style = {
  backgroundColor: "#b1d9df"
};

export default App;
