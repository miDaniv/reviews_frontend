import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import './FilmInfoCSS.css';

const MovieInfo = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Отримати дані фільму
        const movieResponse = await axios.get(`http://localhost:8080/api/film-info/${id}`);
        setMovieData(movieResponse.data);

        // Отримати дані користувача
        const userResponse = await axios.get('http://localhost:8080/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserId(userResponse.data.Id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movieData || userId === null) {
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
      <p>User ID: {userId}</p>
      <CommentSection movieId={id} userId={userId} />
    </div>
  );
};

export default MovieInfo;