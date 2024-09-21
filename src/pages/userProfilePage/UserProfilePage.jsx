import React from 'react';
import './UserProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../app/Store/reducers/userSlice';

const UserProfilePage = ({ onLogout }) => {
  const dispatch = useDispatch();

  const { username, age, jobTitle, email, isAuthenticated } = useSelector((state) => state.user);

  const handleLogOutBtn = () => {
    dispatch(logOut()); // Dispatch the logOut action
    if (onLogout) onLogout(); // Call the passed onLogout function if available
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="info-item">
            <div className="info-title">Username:</div>
            <div className="info-value">{username || 'Username'}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Email:</div>
            <div className="info-value">{email || 'email'}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Job Title:</div>
            <div className="info-value">{jobTitle || 'jobTitle'}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Age:</div>
            <div className="info-value">{age || '25'}</div>
          </div>
        </div>
      </div>
      <button onClick={handleLogOutBtn} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default UserProfilePage;
