import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <div className="text-center">
          <h1 className="primary-color">Get In Touch</h1>
          <p className="contact-desc">
            Contact with us for your first delivery.And we will send you a email
            .So please join us we will contact with you.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center pt-5">
          <div className="contact-form">
            <form>
              <input className="contact-input" type="text" placeholder="Name" />
              <input
                className="contact-input"
                type="text"
                placeholder="Email"
              />
              <input className="contact-input" placeholder="Phone" />
              <input className="contact-input" placeholder="Ware House" />
              <textarea className="contact-input" placeholder="Message..." />
              <input className="contact-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
