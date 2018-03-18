import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

function Locations(props) {
  const { locations } = props;
  return (
    <Fragment>
      {
        locations.map(location =>
          <Row className="mt-3" key={location._id}>
            <Col>
              <img
                className="img-fluid rounded float-right"
                alt="replacewithaltdata"
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
