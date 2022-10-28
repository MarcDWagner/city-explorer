import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {


  render() {
    return (
      <>
        <h1>Forecast Data</h1>
        <Accordion defaultActiveKey="0">
          {this.props.weatherData.map((day, index) =>
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header>
               
              </Accordion.Header>
              <Accordion.Body>
                <p>{day.weather}: "Low of {day.low}, high of {day.high}"</p>
                <p>{day.date}</p>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      </>
    )
  }
}



export default Weather;