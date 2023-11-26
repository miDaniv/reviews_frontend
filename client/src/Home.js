// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My Website!</h1>
      <nav style={styles.navigation}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/register" style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/login">
        <button style={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  navigation: {
    background: '#f8f8f8',
    padding: '10px',
    borderRadius: '5px',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;