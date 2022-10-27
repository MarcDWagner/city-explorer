import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {


  render() {
    return (
      <>
        <h1>Forecast Data</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {}
            </Accordion.Header>
            <Accordion.Body>
              {}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    )
  }
}



export default Weather;