import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Register from './Register';
import UserPage from './UserPage';
import AddFilm from './AddFilm';
import FilmInfo from './FilmInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/add-film" element={<AddFilm />} />
        <Route path="/film-info" element={<FilmInfo />} />
      </Routes>
    </Router>
  );
};

export default App;