import React, { useState } from 'react';
import { FaGoogle, FaEyeSlash, FaApple, FaAndroid } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

import './Login.css'; // Import the CSS file

const Login = () => {
  const [showpass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>
      <button className="google-signin-button">
        <FcGoogle style={{
          background: 'white',
          borderRadius: '50%',
          padding: '4px'
        }} size={25} className="google-signin-icon" /> Sign in with Google
      </button>
      <div className="divider">
        <span className="or-text">OR</span>
      </div>
      <form className="login-form">
        <div className="input-group">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="eg: youremail@gmail.com"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="eg: yourpassword@123"
              className="input"
            />
            <span onClick={handleShowPass} className="password-toggle">
              {showpass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
            </span>
          </div>
        </div>
        <button type="submit" className="login-submit-button">
          Log In
        </button>
      </form>
      <div className="footer">
        <a href="#" className="forgot-password-link">
          Forgot Password?
        </a>
        <p className="signup-text">
          Don't have an account? <a href="#" className="signup-link">Sign up now</a>
        </p>
        <div className="download-section">
          <p className="download-text">Download App</p>
          <FaApple className="app-icon" />
          <FaAndroid className="app-icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
