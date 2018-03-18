import React, { Component } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sections from './Sections';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Itasca State Park - Park Map</h1>
              <h2>Text description site</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Sections />
      </Container>
    );
  }
}

export default App;
