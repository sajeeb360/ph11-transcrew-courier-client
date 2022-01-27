import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-tundra-75877.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services.length ? (
    <div className="services">
      <Container>
        <h1 className="primary-color text-center pb-5">Our Services</h1>
        <Row className="g-4" lg={3} md={2} sm={1} xs={1}>
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  ) : (
    <div className="loading">
      <div className="text-center">
        <Spinner animation="border" variant="info" />
        <br />
        <small>Loading</small>
      </div>
    </div>
  );
};

export default Services;
