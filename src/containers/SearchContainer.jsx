import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";
import Button from "../components/Button";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    seasonStats: [],
    seasonStatsStatic: []
  };

  componentWillMount() {
    this.callApi("", true);
  }

  // Update state from change in child component
  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {
      console.log("SearchContainer state ", this.state.inputValue);
    });
  };

  handleReset = e => {
    this.setState({
      inputValue: "",
      seasonStats: []
    });
  };

  callApi(id, isStaticTable) {
    let isInitialState = isStaticTable;
    fetch("https://statsapi.web.nhl.com/api/v1/teams/" + id)
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        if (isInitialState) {
          this.setState({
            seasonStatsStatic: jsonResult.teams
          });
        } else {
          this.setState({
            seasonStats: jsonResult.teams
          });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <InputForm
          value={this.state.inputValue}
          input={"text"}
          placeholder={"Enter a team's ID..."}
          buttonText={"Submit"}
          onClick={() => this.callApi(this.state.inputValue)}
          onChangeValue={this.handleChangeValue}
          onHandleReset={this.handleReset}
        />
        <TableContainer
          headerTitle={"Team IDs"}
          tableData={this.state.seasonStatsStatic}
        />
        <TableContainer
          headerTitle={this.state.seasonStats.name}
          tableData={this.state.seasonStats}
        />
      </React.Fragment>
    );
  }
}
