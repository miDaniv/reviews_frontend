import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Register from './Register';
import User from './User';
import AddFilm from './AddFilm';
import FilmInfo from './FilmInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/film-info/:id" element={<FilmInfo />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/add-film" element={<AddFilm />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;