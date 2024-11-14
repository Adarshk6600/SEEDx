import React, { useEffect, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import './Login.css';
import { useDispatch } from 'react-redux';
import { logIn, } from '../../app/Store/reducers/userSlice';
import { useSelector } from 'react-redux';

const SignUp = ({ handleClickProfileMenu, isAuthenticated }) => {

  const [userSignUp, setUserSignUp] = useState({
    username: '',
    email: '',
    password: '',
    jobTitle: ''
  });
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: ''
  });

  const [showpass, setShowPass] = useState(false);
  const [showSignUp, setShowSignU] = useState(false);
  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserSignUp({
      ...userSignUp, [name]: value
    });
  };

  const handleSignInInputVal = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserSignIn({
      ...userSignIn, [name]: value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowSignU((prev) => !prev);
  };

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(userSignUp);

    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userSignUp)
    });

    if (userSignUp) {
      setShowSignU(false);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    console.log(userSignIn);

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userSignIn)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('user signed in', data.token);
        console.log(data.user);

        const userData = {
          username: data.user.username,
          age: data.user.age,
          jobTitle: data.user.jobTitle,
          authToken: data.token,
          email: data.user.email
        };

        // Dispatch the logIn action with user data
        dispatch(logIn(userData));

      } else {
        console.log('Sign in failed');
      }
    } catch (error) {
      console.log('error during sign in', error);
    }

    if (userSignIn) {
      console.log('sign in success');
    }
  };

  return (
    <>
      {!isAuthenticated && <div className="login-container-unique">
        <div className={showSignUp ? 'sign-up-box-unique' : 'show-sign-up-unique'}>
          <h1 className="sign-up-title-unique">Sign Up</h1>
          <form onSubmit={handleSignUpSubmit}>
            <input onChange={handleInputValue} value={userSignUp.username} type="text" className='input-box-unique' name="username" placeholder='Enter Your Username.' id="username" />
            <input onChange={handleInputValue} value={userSignUp.email} type="email" className='input-box-unique' name="email" placeholder='Enter Your Email.' id="email" />
            <input onChange={handleInputValue} value={userSignUp.password} type="text" className='input-box-unique' name="password" placeholder='Enter Your Password.' id="password" />
            <input onChange={handleInputValue} value={userSignUp.jobTitle} type="text" className='input-box-unique' name="jobTitle" placeholder='Job details : optional' id='jobTitle' />
            <button type='submit' className="submit-button-unique">Submit</button>
          </form>
          <span style={{ background: 'green' }} onClick={handleSignUp} className="sign-in-button-unique">Sign in</span>
        </div>

        <div className='signUpHeader'>
          <h2 className="login-title-unique">Log In</h2>
          <span ><IoMdArrowBack onClick={handleClickProfileMenu} size={20} /></span>
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

        <form onSubmit={handleSignInSubmit} className="login-form-unique">
          <div className="input-group-unique">
            <label className="label-unique">Email</label>
            <input
              onChange={handleSignInInputVal}
              value={userSignIn.email}
              type="email"
              placeholder="Enter Your Email"
              className="input-unique"
              name='email'
            />
          </div>
          <div className="input-group-unique">
            <label className="label-unique">Password</label>
            <div className="password-wrapper-unique">
              <input
                onChange={handleSignInInputVal}
                value={userSignIn.password}
                type={showpass ? "text" : "password"}
                placeholder="Enter Your Password"
                className="input-unique"
                name='password'
              />
              <span onClick={handleShowPass} className="password-toggle-unique">
                {showpass ? <IoEyeSharp size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>
          </div>
          <button type="submit" className="login-submit-button-unique">
            Log In
          </button>
        </form>

        <div className="footer-unique">
          <a href="#" className="forgot-password-link-unique">
            Forgot Password?
          </a>
          <p className="signup-text-unique">
            Don't have an account? <a href="" onClick={handleSignUp} className="signup-link-unique">Sign up now</a>
          </p>
        </div>
      </div>}
    </>
  );
};

export default SignUp;
