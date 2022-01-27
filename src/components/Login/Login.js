import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import './Login.css';
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';
  const { signInWithGoogle } = useAuth();

  // sing in with google
  const handleGooglSigning = () => {
    signInWithGoogle()
      .then(() => {
        history.push(redirect_url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="login-form">
        <h3 className="text-center text-secondary pb-5">Login Please</h3>
        <img className="w-50 ms-auto" src={google} alt="" />
        <button onClick={handleGooglSigning} className="google-login">
          <i className="fab fa-google"></i> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
