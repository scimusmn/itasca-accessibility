import React, { Fragment } from 'react';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import Features from './Features';
import features from './features.json';

function Sections(props) {
  const sectionFeatures = ((type) => {
    return _.filter(features, function(o) {
      return o.type === type;
    });
  });

  return (
    <Fragment>
      <Row>
        <Col>
          <h3>Sections</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Trails</h4>
          <Features features={sectionFeatures('trails')} />
        </Col>
        <Col>
          <h4>Points of Interest</h4>
          <Features features={sectionFeatures('interest-point')} />
        </Col>
        <Col>
          <h4>Camping/Lodging</h4>
          <Features features={sectionFeatures('camping-lodging')} />
        </Col>
        <Col>
          <h4>Recreation</h4>
          <Features features={sectionFeatures('recreation')} />
        </Col>
        <Col>
          <h4>Other Information</h4>
          <Features features={sectionFeatures('other')} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Sections;
