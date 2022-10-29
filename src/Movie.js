import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {

  render() {
    return (
      <>
      <h1>Movies</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.poster} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.overview}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{this.props.release}</ListGroup.Item>

          </ListGroup>
          <Card.Body>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </>
    )
  }
}
//   constructor(movieObj) {
  // this.title = movieObj.title;
  // this.overview = movieObj.overview;
  // this.poster = movieObj.poster_path;
  // this.release = movieObj.release_date;


export default Movie;