import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserPageCSS.css';

const UserProfile = ({ match }) => {
  const { id: userId } = match.params;
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:8080/user/${userId}`);
          setUserData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Помилка отримання даних користувача:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {userData.Name}</p>
      <p><strong>Email:</strong> {userData.Email}</p>
      <p><strong>Login:</strong> {userData.Login}</p>
    </div>
  );
};

export default UserProfile;