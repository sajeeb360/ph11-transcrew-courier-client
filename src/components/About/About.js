import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about-1.jpg';
import './About.css';
const About = () => {
  return (
    <Container className="py-5">
      <Row lg={2} sm={1} xs={1}>
        <Col>
          <div className="text-center">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
        </Col>
        <Col>
          <div className="about-details">
            <div>
              <p>Who are Transcrew</p>
              <h1>
                Best <span className="primary-color">Courier</span> &{' '}
                <span className="primary-color">Parcel</span> Services
              </h1>
              <p>
                Business applications through revolutionary catalysts for
                procedures whereas processes.
              </p>
              <p>
                Distinctively exploit optimal alignments for intuitive. Quickly
                coordinate business applications through revolutionary catalysts
                for chang the Seamlessly optimal testing procedures whereas
                processes. Synerg stically evolve 2.0 technologies rather than
                just in web & apps development optimal alignments for intuitive.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
