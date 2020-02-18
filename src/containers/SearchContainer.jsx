import React, { Component } from 'react';
import InputForm from '../components/forms/InputForm.tsx';
import IdTable from '../components/tables/IdTable.tsx';
import SingleSeasonStatsTable from '../components/tables/SingleSeaonStatsTable.tsx';

export default class SearchContainer extends Component {
  state = {
    inputValue: '',
    teamIdTable: [],
    statsSingleSeasonValues: [],
    teamHeader: '',
    isError: false,
    isSubmitted: false
  };

  componentWillMount() {
    this.initializeIdTable();
  }

  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleReset = () => {
    this.setState({
      inputValue: '',
      statsSingleSeasonValues: [],
      teamHeader: '',
      isError: false,
      isSubmitted: false
    });
  };

  initializeIdTable() {
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
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
    fetch('https://statsapi.web.nhl.com/api/v1/teams/' + teamId + '/stats')
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          teamHeader: jsonResult.stats[0].splits[0].team.name,
          statsSingleSeasonValues: Object.values(
            jsonResult.stats[0].splits[0].stat
          ),
          isError: false,
          isSubmitted: true
        });
      })
      .catch(error =>
        this.setState({
          isError: true,
          statsSingleSeasonValues: []
        })
      );
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <InputForm
            style={style.background}
            value={this.state.inputValue}
            placeholder="Enter a team's ID from the table below..."
            buttonText="Submit"
            onClick={() => this.callApi(this.state.inputValue)}
            onChangeValue={this.handleChangeValue}
            onHandleReset={this.handleReset}
          />
          <IdTable
            isSubmitted={this.state.isSubmitted}
            style={style.background}
            isIdTable={true}
            headerTitle="Team IDs"
            tableData={this.state.teamIdTable}
          />
        </div>
        <div className="col-4">
          <SingleSeasonStatsTable
            isSubmitted={this.state.isSubmitted}
            style={style.background}
            isError={this.state.isError}
            errorMessage="Error: Please check your input."
            isIdTable={false}
            headerTitle={this.state.teamHeader}
            tableHeader={this.state.statsSingleSeason}
            tableDataSingleSeasonValues={this.state.statsSingleSeasonValues}
          />
        </div>
      </div>
    );
  }
}

const style = {
  background: {
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    border: "2px solid #b6bcc2",
    padding: "20px",
    marginLeft: 50
  }
};
