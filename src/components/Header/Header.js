import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="mb-5 pb-5">
      <Navbar className="nav-bar" collapseOnSelect fixed="top" expand="lg">
        <Container className="py-3">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/services">
                Services
              </Nav.Link>
              {user.email && (
                <Nav.Link className="navbar-link" as={Link} to="/myOrders">
                  My Orders
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link className="navbar-link" as={Link} to="/manageOrders">
                  Manage Orders
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link className="navbar-link" as={Link} to="/addService">
                  Add a New Service
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link className="navbar-link" as={Link} to="/">
                  {user.displayName}
                </Nav.Link>
              )}
              {!user.email && (
                <Nav.Link className="login-btn" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            {user.email && (
              <button className="logout" onClick={logOut}>
                Logout
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
