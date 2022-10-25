import { render } from '@testing-library/react';
import React from 'react';
import Form from 'react-bootstrap/Form'

class CityInput extends React.Component {

}

render() {
  return (
    <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City
      <Button variant="primary" type="submit">
        Explore!
      </Button>
        </Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
      </Form.Group>
    </Form>
  )
}

export default CityInput;