import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Movie extends React.Component {

  render() {
    let movieDataParse = this.props.movieData.map((movie) => {
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.img}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{movie.release}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    })
    return (
      <Container id='contain' fluid>
        <Row id='row' sm={1} md={2} lg={4} xxl={5} className='g-4'>
          {movieDataParse}
        </Row>
      </Container>
    )
  }
}
//   constructor(movieObj) {
// this.title = movieObj.title;
// this.overview = movieObj.overview;
// this.poster = movieObj.poster_path;
// this.release = movieObj.release_date;


export default Movie;