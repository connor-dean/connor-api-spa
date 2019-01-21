import React, { Component } from "react";
import InputForm from "../components/InputForm";
import TableContainer from "./TableContainer";

export default class SearchContainer extends Component {
  state = {
    inputValue: "",
    cityName: "",
    cityTemp: ""
  };

  // Update state from change in child component
  handleChangeValue = e => {
    this.setState({ inputValue: e.target.value }, () => {
      console.log("SearchContainer state ", this.state.inputValue);
    });
  };

  // Temporary API call until I can get API key for MySportsFeed
  callApi = zip => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&appid=6dfb9b4baf665d9ad09363be550e786f&units=imperial"
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        // Do something with the result
        this.setState({
          cityName: jsonResult.name,
          cityTemp: jsonResult.main.temp
        });
        console.log(this.state.cityName);
        console.log(this.state.cityTemp);
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
          tableTemp={this.state.cityTemp}
        />
      </div>
    );
  }
}
