import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";
import Button from "../components/Button";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    seasonStats: []
  };

  componentWillMount() {
    this.callApi("");
  }

  // Update state from change in child component
  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {
      console.log("SearchContainer state ", this.state.inputValue);
    });
  };

  handleReset = () => {
    this.setState({
      inputValue: "",
      seasonStats: []
    });
  };

  callApi(id) {
    fetch("https://statsapi.web.nhl.com/api/v1/teams/" + id)
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          seasonStats: jsonResult.teams
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
          placeholder={"Enter a player's name..."}
          buttonText={"Submit"}
          onClick={() => this.callApi(this.state.inputValue)}
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
