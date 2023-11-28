// MovieForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    originalTitle: '',
    releaseYear: '',
    ageRating: '',
    duration: '',
    poster: null,
    genreRating: 1, // Assuming genre rating is a number from 1 to 5
    description: '',
    genres: [], // Додайте поле для збереження жанрів
  });

  const handleInputChange = (e) => {
    const { name, value, type, files, options } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : type === 'select-multiple' ? Array.from(options).filter(option => option.selected).map(option => option.value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('originalTitle', formData.originalTitle);
    formDataToSend.append('releaseYear', formData.releaseYear);
    formDataToSend.append('ageRating', formData.ageRating);
    formDataToSend.append('duration', formData.duration);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('genreRating', formData.genreRating);
    formDataToSend.append('genres', JSON.stringify(formData.genres));

    if (formData.poster) {
      formDataToSend.append('poster', formData.poster);
    }

    try {
      const response = await axios.post('http://localhost:8080/add-film', formDataToSend);
      console.log('Movie created successfully:', response.data);
      // Redirect to the page displaying the newly created movie or handle as needed
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  };


  return (
    <div>
      <h2>Create a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Original Title:
          <input type="text" name="originalTitle" value={formData.originalTitle} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Release Year:
          <input type="text" name="releaseYear" value={formData.releaseYear} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Age Rating:
          <select name="ageRating" value={formData.ageRating} onChange={handleInputChange}>
            <option value="">Select Age Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </label>
        <br />

        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Poster:
          <input
            type="file"
            name="poster"
            accept="image/*"
            directory
            webkitdirectory
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Genres:
          <select name="genres" value={formData.genres} onChange={handleInputChange} multiple>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            {/* ... додайте інші жанри */}
          </select>
        </label>
<br />

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange} maxLength="255" />
        </label>
        <br />

        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;