import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserPageCSS.css';

const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Отримати токен з localStorage
        const token = localStorage.getItem('token');

        // Перевірити чи токен існує
        if (!token) {
          // Обробити відсутність токену
          return;
        }

        // Надіслати токен на сервер для авторизації
        const response = await axios.get('http://localhost:8080/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Встановити дані користувача після успішного запиту
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

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
