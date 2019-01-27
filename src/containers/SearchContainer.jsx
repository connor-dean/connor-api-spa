import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    teamIdTable: [],
    statsSingleSeasonValues: [],
    statsRegularSeasonValues: [],
    teamHeader: ""
  };

  componentWillMount() {
    this.initializeIdTable();
  }

  // Update state from change in child component
  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {});
  };

  handleReset = () => {
    this.setState({
      inputValue: "",
      statsSingleSeasonValues: [],
      statsRegularSeasonValues: [],
      teamHeader: ""
    });
  };

  initializeIdTable() {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          teamIdTable: jsonResult.teams
        });
      })
      .catch(error => console.log(error));
  }

  callApi(id) {
    fetch("https://statsapi.web.nhl.com/api/v1/teams/" + id + "/stats")
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          teamHeader: jsonResult.stats[0].splits[0].team.name,
          statsSingleSeasonValues: Object.values(
            jsonResult.stats[0].splits[0].stat
          ),
          statsRegularSeasonValues: Object.values(
            jsonResult.stats[1].splits[0].stat
          )
        });
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
          isIdTable={true}
          headerTitle={"Team IDs"}
          tableData={this.state.teamIdTable}
        />
        <TableContainer
          isIdTable={false}
          headerTitle={this.state.teamHeader}
          tableHeader={this.state.statsSingleSeason}
          tableDataSingleSeasonValues={this.state.statsSingleSeasonValues}
          tableDataRegularSeasonValues={this.state.statsRegularSeasonValues}
        />
      </React.Fragment>
    );
  }
}
