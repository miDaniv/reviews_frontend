import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './Register';
import User from './User';
import AddFilm from './AddFilm';
import FilmInfo from './FilmInfo';
import PrivatePage from './PrivatePage';
import Todo from './To-do';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/film-info/:id" element={<FilmInfo />} />
        <Route path="/user" element={<User />} />
        <Route path="/add-film" element={<AddFilm />} />
        {/* Захищена сторінка */}
        <Route
          path="/private"
          element={isAuthenticated ? <PrivatePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
