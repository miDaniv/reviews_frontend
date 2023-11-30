import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPageCSS.css'

const UserInfo = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.Name}</h2>
      <p>Login: {userData.Login}</p>
      <p>Email: {userData.Email}</p>
    </div>
  );
};

export default UserInfo;