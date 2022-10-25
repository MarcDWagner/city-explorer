import React from 'react';
// import CityInput from './CityInput';

class Main extends React.Component {
  render() {
    return(
      <main>
        <p>{this.props.cityData.display_name}</p>
        <p>{this.props.cityData.lat}</p>
        <p>{this.props.cityData.lon}</p>
        <img src={this.props.mapUrl} alt="map"/>
      </main>
    )
   
  }
};

export default Main;