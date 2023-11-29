import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FilmInfoCSS.css';

const MovieInfo = () => {
  const { id } = useParams(); // Отримання ID з URL за допомогою react-router-dom
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/film-info/${id}`);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id]); 

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieData.Title}</h2>
      <p>Original Title: {movieData.OriginalTitle}</p>
      <p>Release Year: {movieData.ReleaseYear}</p>
      <p>Age Rating: {movieData.AgeRating}</p>
      <p>Duration: {movieData.Duration}</p>
      <p>Genres: {movieData.Genres}</p>
      <p>Description: {movieData.Description}</p>
    </div>
  );
};

export default MovieInfo;
