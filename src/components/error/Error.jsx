import React from 'react';
import './Error.css';

const ErrorPage = () => {

  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div> {/* Add any error icon */}
      <h1 className="error-title">Access Denied</h1>
      <p className="error-message">You need to be signed in to access this page.</p>
    </div >
  );
};

export default ErrorPage;
