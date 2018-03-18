import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import filter from 'lodash.filter';
import Feature from './Feature';
import locations from './locations.json';

function Features(props) {
  const { features } = props;
  const featureLocations = (featureId) => {
    return filter(locations, function(o) {
      return o.featureId === featureId;
    });
  };
  return (
    <Row className="">
      <Col>
        {
          features.map(feature => (
              <Feature
                key={feature._id}
                feature={feature}
                locations={featureLocations(feature._id)}
              />
            )
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
