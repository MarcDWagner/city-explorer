import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import CityInput from './CityInput';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: '',
      mapData: '',
      lat: '',
      lon: '',
    }
  }

  // city input
  handleCityInput = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      city: e.target.value
    })
  }

  // async data from site
  getCityData = async (e) => {
    e.preventDefault();
    let response;
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      // console.log(url);
      response = await axios.get(url);
      let location = response.data[0];

      this.setState({
        cityData: location,
        error: false,
        lat: location.lat,
        lon: location.lon,
      }, () => {
        this.getMapData();
      });
      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }  
  }
  getMapData = async () => {
    let mapUrl = `https://us1.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`

    this.setState({
      mapData: mapUrl
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Header

        />
        <CityInput
          handleCityInput={this.handleCityInput}
          getCityData={this.getCityData}
        />
        <Main
          cityData={this.state.cityData}
          map={this.state.mapData}
        />
        <Footer

        />
      </>
    );
  }
}
export default App;
