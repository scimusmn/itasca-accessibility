import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

function Features(props) {
  const { features } = props;
  return (
    <Row>
      <Col>
        {
          features.map(feature => <div>{feature.title}</div>
          )
        }
      </Col>
    </Row>
  );
}

Features.propTypes = {
  features: PropTypes.array.isRequired
};

export default Features;
