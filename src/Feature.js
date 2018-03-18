import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

function Features(props) {
  const { features } = props;
  return (
    <Row>
      <Col>
        <h3>Features</h3>
        {
          features.map(feature =>
            <Feature feature={feature} />
          )}
      </Col>
    </Row>
  );
}

Features.propTypes = {
  features: PropTypes.array.isRequired
};

export default Features;
