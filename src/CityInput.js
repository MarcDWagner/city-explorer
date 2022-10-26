// import { render } from '@testing-library/react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityInput extends React.Component {

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.props.handleCityInput(e.target.value);
  // }

  render() {
    return (
      <Form onSubmit={this.props.getCityData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={this.props.handleCityInput} type="text" placeholder="Enter city" />
        </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
      </Form>
    );
  }
}

export default CityInput;