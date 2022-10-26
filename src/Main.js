import React from 'react';
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert';


class Main extends React.Component {
  

  render() {
    return(
      <main>

      <Stack gap={3}>
      <div className="bg-light border">{this.props.cityData.display_name}</div>
      <div className="bg-light border">{this.props.cityData.lat}</div>
      <div className="bg-light border">{this.props.cityData.lon}</div>
        <Image id="img" src={this.props.map} fluid/>
      </Stack>
        <article>
        </article>
        <Alert variant="danger" onClose={this.props.closeErrorAlert} dismissable>
          <Alert.Heading>{this.props.errorMessage}</Alert.Heading>
        </Alert>
      </main>
    )
  }
};

export default Main;