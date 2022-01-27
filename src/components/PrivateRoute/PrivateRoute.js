import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // if isLoading is true display spinner on screen
  if (isLoading) {
    return (
      <div className="loading">
        <div className="text-center">
          <Spinner animation="border" variant="info" />
          <br />
          <small>Loading</small>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
