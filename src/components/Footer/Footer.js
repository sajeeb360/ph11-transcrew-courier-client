import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import payment from '../../images/payment-1.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row lg={4} md={2} sm={1} xs={1}>
          <Col>
            <div className="footer-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </Col>
          <Col>
            <h5 className="footer-title">QUICK LINKS</h5>
            <div className="footer-links">
              <Link to="/">SITEMAP</Link>
              <Link to="/">PRICICNG</Link>
              <Link to="/">PAYMENT METHOD</Link>
              <Link to="/">SUPPORT</Link>
            </div>
          </Col>
          <Col>
            <h5 className="footer-title">IMPORTANT LINKS</h5>
            <div className="footer-links">
              <Link to="/">THEMEFOREST</Link>
              <Link to="/">AUDIOJUNGLE</Link>
              <Link to="/">ENVATO</Link>
              <Link to="/">VIDEOHIBE</Link>
            </div>
          </Col>
          <Col>
            <h5 className="footer-title">GET IN TOUCH</h5>
            <div className="footer-icons">
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <img className="payment" src={payment} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
