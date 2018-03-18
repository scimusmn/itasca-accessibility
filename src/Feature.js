import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Locations from './Locations';

function Feature(props) {
  const { feature, locations } = props;
  return (
    <Row className="mt-3">
      <Col>
        <h5>{feature.title}</h5>
        <Locations locations={locations}/>
      </Col>
    </Row>
  );
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired
};

export default Feature;
