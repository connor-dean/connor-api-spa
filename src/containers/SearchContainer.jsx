import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";
import Button from "../components/Button";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    seasonStats: [],
    seasonStatsId: [],
    seasonStatsName: []
  };

  // Update state from change in child component
  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {
      console.log("SearchContainer state ", this.state.inputValue);
    });
  };

  handleReset = () => {
    this.setState({
      inputValue: "",
      weatherData: [],
      weatherDataMain: [],
      weatherDataWind: [],
      seasonStats: [],
      seasonStatsId: [],
      seasonStatsName: []
    });
  };

  callApi() {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          seasonStats: jsonResult.teams,
          seasonStatsId: jsonResult.teams.id,
          seasonStatsName: jsonResult.teams.name
        });
        for (var i = 0; i < this.state.seasonStats.length; i++) {
          console.log(this.state.seasonStats[i].id);
          console.log(this.state.seasonStats[i].name);
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
          placeholder={"Enter a player's name..."}
          buttonText={"Submit"}
          onClick={() => this.callApi()}
          onChangeValue={this.handleChangeValue}
        />
        <TableContainer
          headerTitle={"Team IDs"}
          tableData={this.state.seasonStats}
        />
        <Button
          className={"btn btn-secondary"}
          buttonText={"Reset"}
          onClick={this.handleReset}
        />
      </React.Fragment>
    );
  }
}
