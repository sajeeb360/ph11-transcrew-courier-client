import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <Container>
          <div className="banner-content">
            <div className="car">
              <i className="fas fa-car-side"></i>
            </div>
            <p className="pt-4 pb-2">
              <span>. FAST</span>
              <span> . SECURED</span>
              <span> . WORLDWIDE</span>
            </p>
            <h1 className="banner-title">
              WE PROVIDED FASTEST
              <br />
              <span className="primary-color"> COURIER </span> &
              <span className="primary-color"> DELIVERY </span>
              SERVICES
            </h1>
            <button className="get-in-touch">GET IN TOUCH</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
