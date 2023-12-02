import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ movieId, userId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/comments/${movieId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [movieId]);

  const handleCommentSubmit = async () => {
    try {
      // Відправка коментаря на сервер
      await axios.post('http://localhost:8080/api/comments', {
        filmId: movieId,
        userId: userId,
        comment: commentText,
      });

      // Оновлення списку коментарів
      fetchComments();

      // Скидання текстового поля після відправки
      setCommentText('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <textarea
          placeholder="Enter your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
        />
      </div>
      <div>
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>
      <div>
        <h3>All Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.Id}>{comment.Сomment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;