import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { Home } from './home';
import { About } from './about';
import { Gallery } from './gallery';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import './App.css';


class App extends Component {

  render() {
    return (
      <>

        <Container className="App">

          <Router>
            <Row className="nav">
              <Col className="logo">
                <Card >
                  <Card.Img src='/img/khd.png' alt="business logo" ></Card.Img>
                </Card>
              </Col>
              <Col className="Col">
                <Link to='/'><Button variant="outline-info " block className="button"><strong>Home</strong></Button></Link>
              </Col>
              <Col className="Col">
                <Link to='/about'><Button variant="outline-info" block className="button"><strong>About</strong></Button></Link>
              </Col>
              <Col className="Col">
                <Link to='/gallery'><Button variant="outline-info" block className="button"><strong>Gallery</strong></Button></Link>
              </Col>


              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
            </Row>

          </Router>

        </Container>


      </>
    );
  }
}

export default App;
