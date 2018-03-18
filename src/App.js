import React, { Component } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sections from './Sections';

class App extends Component {
  scrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Itasca State Park - Park Map</h1>
              <h2>Text description site</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Sections />
        <div className="fixed-bottom">
          <Row>
            <div className="col text-right">
              <div className="scroll-top">
                <Button
                  color="primary" className="scrol-top" onClick={this.scrollTop}
                >
                  Top
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
