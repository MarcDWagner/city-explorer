import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import CityInput from './CityInput';
import './App.css';
import axios from '.axios';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
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

getCityData = async (e) => {
  e.preventDefault();
  console.log(this.state.city);
  let url = `${process.env.REACT_APP_LOCATIONIQ_API_KEY}${this.state.city}`
  let cityData = await axios.get(url);
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
