import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    teamIdTable: [],
    statsSingleSeasonValues: [],
    statsRegularSeasonValues: [],
    teamHeader: "",
    isError: ""
  };

  componentWillMount() {
    this.initializeIdTable();
  }

  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {});
  };

  handleReset = () => {
    this.setState({
      inputValue: "",
      statsSingleSeasonValues: [],
      statsRegularSeasonValues: [],
      teamHeader: "",
      isError: false
    });
  };

  initializeIdTable() {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          teamIdTable: jsonResult.teams,
          isError: false
        });
      })
      .catch(error =>
        this.setState({
          isError: true
        })
      );
  }

  callApi(teamId) {
    fetch("https://statsapi.web.nhl.com/api/v1/teams/" + teamId + "/stats")
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
          ),
          isError: false
        });
      })
      .catch(error =>
        this.setState({
          isError: true
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
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
          </div>
          <div className="col-9">
            <TableContainer
              isError={this.state.isError}
              isIdTable={false}
              headerTitle={this.state.teamHeader}
              tableHeader={this.state.statsSingleSeason}
              tableDataSingleSeasonValues={this.state.statsSingleSeasonValues}
              tableDataRegularSeasonValues={this.state.statsRegularSeasonValues}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
