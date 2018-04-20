import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Locations from './Locations';

function Feature(props) {
  const { feature, locations } = props;
  const cleanTitle = (title) => {
    // Hack
    let cleanTitle = title.replace('A Fishing Supplies', 'Fishing Supplies');
    cleanTitle = cleanTitle.replace('Interp---', 'Interpretive Centers - ');
    cleanTitle = cleanTitle.replace('Info---', 'Information and Permits - ');
    cleanTitle = cleanTitle.replace('Gift---', 'Gift Shops - ');
    cleanTitle = cleanTitle.replace('Equip---', 'Equipment Rental - ');
    cleanTitle = cleanTitle.replace('Winter---', 'Winter Sports - ');
    cleanTitle = cleanTitle.replace('---', ' - ');
    return cleanTitle;
  }

  return (
    <Row className="mt-3">
      <Col>
        <h3>{cleanTitle(feature.title)}</h3>
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
