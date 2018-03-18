import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import find from 'lodash.find';
import altText from './altText.json';

function Locations(props) {
  const { locations } = props;

  const imgAltText = (imgFile) => {
    const altTextEntry = find(altText, function(o) {
      return o.imgFile === imgFile;
    });
    return altTextEntry ? altTextEntry.altText : 'Description missing';
  };

  return (
    <Fragment>
      {
        locations.map(location =>
          <Row className="mt-3" key={location._id}>
            <Col>
              <img
                className="img-fluid rounded float-right"
                alt={imgAltText(location.imgFile)}
                src={`/images/${location.imgFile}`}
              />
              {location.description}
            </Col>
          </Row>
        )
      }
    </Fragment>
  );
}

Locations.propTypes = {
  locations: PropTypes.array.isRequired
};

export default Locations;
