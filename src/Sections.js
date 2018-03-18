import React, { Fragment } from 'react';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import Features from './Features';
import features from './features.json';

function Sections(props) {
  const sections = [
    { slug: 'trails', title: 'Trails', },
    { slug: 'interest-point', title: 'Points of Interest', },
    { slug: 'camping-lodging', title: 'Camping / Lodging', },
    { slug: 'recreation', title: 'Recreation', },
    { slug: 'other', title: 'Other', },
  ];
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

      {/* Table of contents */}
      <Row>
        {
          sections.map(section =>
            <Col key={section.slug} sm={12} md={12}>
              <h4>
                <a href={`#section-${section.slug}`}>{section.title}</a>
              </h4>
            </Col>
          )
        }
      </Row>

      {/* Sections */}
      {
        sections.map(section =>
          <Row className="mt-3" key={section.slug}>
            <Col>
              <hr />
              <h4>
                <a name={`section-${section.slug}`}>{section.title}</a>
              </h4>
              <Features features={sectionFeatures(section.slug)} />
            </Col>
          </Row>
        )
      }

    </Fragment>
  );
}

export default Sections;
