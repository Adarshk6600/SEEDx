import React, { useState } from 'react';
import { FaGoogle, FaEyeSlash, FaApple, FaAndroid } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";


import './Login.css';

const Login = () => {
  const [showpass, setShowPass] = useState(false);
  const [showSignUp, setShowSignU] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowSignU(prev => !prev)
  }

  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };

  return (
    <div className="login-container-unique">
      <div className={showSignUp ? 'sign-up-box-unique' : 'show-sign-up-unique'}>
        <h1 className="sign-up-title-unique">Sign Up</h1>
        <input type="text" className='input-box-unique' name="" placeholder='Enter Your Username.' id="" />
        <input type="text" className='input-box-unique' name="" placeholder='Enter Your Email.' id="" />
        <input type="text" className='input-box-unique' name="" placeholder='Enter Your Password.' id="" />
        <span className="submit-button-unique">Submit</span>
        <span style={{ background: 'green' }} onClick={handleSignUp} className="sign-in-button-unique">Sign in</span>
      </div>
      <div className='signUpHeader' >
        <h2 className="login-title-unique">Log In</h2> <span ><IoMdArrowBack size={20} />
        </span>
      </div>
      <span className="google-signin-button-unique">
        <FcGoogle style={{
          background: 'white',
          borderRadius: '50%',
          padding: '4px'
        }} size={25} className="google-signin-icon-unique" /> Sign in with Google
      </span>
      <div className="divider-unique">
        <span className="or-text-unique">OR</span>
      </div>
      <form className="login-form-unique">
        <div className="input-group-unique">
          <label className="label-unique">Email</label>
          <input
            type="email"
            placeholder="eg: youremail@gmail.com"
            className="input-unique"
          />
        </div>
        <div className="input-group-unique">
          <label className="label-unique">Password</label>
          <div className="password-wrapper-unique">
            <input
              type="password"
              placeholder="eg: yourpassword@123"
              className="input-unique"
            />
            <span onClick={handleShowPass} className="password-toggle-unique">
              {showpass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
            </span>
          </div>
        </div>
        <span type="submit" className="login-submit-button-unique">
          Log In
        </span>
      </form>
      <div className="footer-unique">
        <a href="#" className="forgot-password-link-unique">
          Forgot Password?
        </a>
        <p className="signup-text-unique">
          Don't have an account? <a href="" onClick={handleSignUp} className="signup-link-unique">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
