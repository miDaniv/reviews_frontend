import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Переконайтеся, що ви встановили axios: npm install axios
import "./HomeCSS.css"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    // Функція для виклику серверного API для отримання рекомендацій
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`/api/movies/recommendations?term=${searchTerm}`);
        setRecommendations(response.data);
        setShowRecommendations(true);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    // Викликати функцію отримання рекомендацій при зміні searchTerm
    if (searchTerm) {
      fetchRecommendations();
    } else {
      setShowRecommendations(false);
      setRecommendations([]);
    }
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 className="heading">Welcome to My Website!</h1>
      <nav className="navigation">
        <ul className="navList">
          <li className="navItem">
            <Link to="/about" className="navLink">
              About
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
          <li className="navItem">
            <Link to="/user" className="navLink">
              User Profile
            </Link>
          </li>
          <li className="navItem">
            <Link to="/private" className="navLink">
              Private Page
            </Link>
          </li>
          <li className="navItem">
            <Link to="/add-film" className="navLink">
              Add Movie
            </Link>
          </li>
        </ul>
      </nav>
     <div className="searchContainer">
        <input
          type="text"
          placeholder="Search Movies"
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/film-info">
          <button className="searchButton">Search</button>
        </Link>
      </div>
      {/* Відображення рекомендацій */}
      {showRecommendations && (
        <div className="recommendations">
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((movie) => (
              <li key={movie.Id}>
                <Link to={`/film-info/${movie.Id}`}>{movie.Title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/login">
        <button className="loginButton">Login</button>
      </Link>
      <button className="logoutButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;