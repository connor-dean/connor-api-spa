import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    cityName: "",
    cityTemp: "",
    weatherData: []
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
          cityName: jsonResult.name,
          cityTemp: jsonResult.main.temp,
          weatherData: jsonResult.main
          // playerPersonalData: jsonResult.playerStatsTotal[0].player[0],
          // playerBackgroundData: jsonResult.playerStatsTotal[0].player[1],
          // playerStatsDefense: jsonResult.playerStatsTotal[0].player[2],
          // playerStatsBatting: jsonResult.playerStatsTotal[0].player[0]
        });
        console.log(this.state.weatherData.clouds.all);
        console.log(this.state.cityName);
        console.log(this.state.cityTemp);
        console.log(this.state.weatherData.main.temp);
        console.log(this.state.weatherData);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <InputForm
          input={"text"}
          placeholder={"Enter a player's name..."}
          buttonText={"Submit"}
          onClick={() => this.callApi(this.state.inputValue)}
          onChangeValue={this.handleChangeValue}
        />
        <TableContainer
          headerTitle={this.state.cityName}
          tableTitleCity={"City: "}
          tableCity={this.state.cityName}
          tableTitleTemp={"Temp: "}
          tableTemp={this.state.weatherData.temp}
        />
      </div>
    );
  }
}
