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
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>
              Contact
            </Link>
          </li>
          {/* Додайте посилання на сторінку користувача */}
          <li style={styles.navItem}>
            <Link to="/user" style={styles.navLink}>
              User Profile
            </Link>
          </li>
          {/* Додайте посилання на сторінку додавання фільму */}
          <li style={styles.navItem}>
            <Link to="/add-film" style={styles.navLink}>
              Add Movie
            </Link>
          </li>
        </ul>
      </nav>
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search Movies" style={styles.searchInput} />
        <Link to="/film-info">
          <button style={styles.searchButton}>Search</button>
        </Link>
      </div>
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
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  searchInput: {
    padding: '8px',
    marginRight: '10px',
    width: '300px',
  },
  searchButton: {
    padding: '8px 15px',
    fontSize: '14px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Home;