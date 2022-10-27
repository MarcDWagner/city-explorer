import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import CityInput from './CityInput';
// import Weather from './Weather';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      // errorAlert: false,
      errorMessage: '',
      mapData: '',
      lat: '',
      lon: '',
    }
  }

  // city input
  handleCityInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  // openErrorAlert = () => {
  //   this.setState({
  //     errorAlert: true
  //   })
  // }

  // closeErrorAlert = () => {
  //   this.setState({
  //     errorAlert: false
  //   })
  // }

  // async data from site
  getCityData = async (e) => {
    e.preventDefault();
    let response;
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      response = await axios.get(url);
      let location = response.data[0];
      // console.log(location);

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${location.lat},${location.lon}&zoom=12`

      this.setState({
        cityData: location,
        error: false,
        lat: location.lat,
        lon: location.lon,
        mapData: mapUrl
      },

        );
        console.log(mapUrl);

    } catch (error) {
      // this.openErrorAlert();
      this.setState({
        error: true,
        // errorAlert: true,
        errorMessage: `An error occurred: ${error.response.status}`
      })
    }
  }

  render() {
    return (
      <>
        <Header

        />
        <CityInput
          handleCityInput={this.handleCityInput}
          getCityData={this.getCityData}
        />
        {/* <Weather
        /> */}
        <Main
          cityData={this.state.cityData}
          map={this.state.mapData}
          errorMessage={this.state.errorMessage}
          // errorAlert={this.state.errorAlert}
          // closeErrorAlert={this.state.closeErrorAlert}
          // openErrorAlert={this.state.openErrorAlert}
        />
        <Footer

        />
      </>
    );
  }
}
export default App;
