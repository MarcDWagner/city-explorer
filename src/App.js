import React from 'react';
import axios from '.axios';
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
}

// city input
handleCityInput = (e) => {
  e.preventDefault();
  this.setState({
    city: e.target.value
  })
}
// asyn data from site
getCityData = async (e) => {
  e.preventDefault();
  console.log(this.state.city);
  let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
  let cityData = await axios.get(url);
}

getMapData = async () +> {

}

render() {
  return (
    <>
    <Header

    />
    <CityInput
      handleCityInput={this.handleCityInput}
    />
    <Main

    />
    <Footer

    />
    </>
  );
}

export default App;
