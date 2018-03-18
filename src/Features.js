import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import Feature from './Feature';
import locations from './locations.json';

function Features(props) {
  const { features } = props;
  const featureLocations = (featureId) => {
    return _.filter(locations, function(o) {
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
