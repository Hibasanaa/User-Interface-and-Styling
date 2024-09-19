import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>{user.name}</h1>
      <div className="profile-info">
        <p>Followers: {user.followers}</p>
        <p>Liked Books: {user.likedBooks.length}</p>
      </div>
    </div>
  );
};

export default Profile;
