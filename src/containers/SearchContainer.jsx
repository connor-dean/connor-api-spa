import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";
import Button from "../components/Button";
import ReactTable from "react-table";
import Table from "../components/Table";
import TableHeader from "../components/TableRowHeader";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    weatherData: [],
    weatherDataMain: [],
    weatherDataWind: []
    // playerPersonalData: [],
    // playerBackgroundData: [],
    // playerStatsDefense: [],
    // playerStatsBatting: []
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
      weatherDataWind: []
    });
  };

  // Temporary API call until I can get API key for MySportsFeed
  // "https://api.mysportsfeeds.com/v2.0/pull/mlb/2019-regular?player={" + lastName + "-" firstName + "}/player_stats_totals.json";
  callApi = zip => {
    let API1 = "https://api.openweathermap.org/data/2.5/weather?zip=";
    let API2 = "&appid=6dfb9b4baf665d9ad09363be550e786f&units=imperial";
    fetch(API1 + zip + API2)
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        // Do something with the result
        this.setState({
          weatherData: jsonResult,
          weatherDataMain: jsonResult.main,
          weatherDataWind: jsonResult.wind

          /*
          Save fielding, pitching, and other data under different pieces of state
          and create components to handle the different tables
        */
          // playerPersonalData: jsonResult.playerStatsTotal[0].player[0],
          // playerBackgroundData: jsonResult.playerStatsTotal[0].player[1],
          // playerStatsDefense: jsonResult.playerStatsTotal[0].player[2],
          // playerStatsBatting: jsonResult.playerStatsTotal[0].player[0]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const tableValues = [
      this.state.weatherData,
      this.state.weatherDataMain,
      this.state.weatherDataWind
    ];
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
          headerTitle={this.state.weatherData.name}
          tableData={tableValues[1]}
        />
        <TableContainer tableData={tableValues[2]} />
        <Button
          className={"btn btn-secondary"}
          buttonText={"Reset"}
          onClick={this.handleReset}
        />
      </React.Fragment>
    );
  }
}
