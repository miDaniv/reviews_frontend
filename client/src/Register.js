// RegisterForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterForm.css";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const handleRegister = async () => {
    try {
      if (password.length < 3 || password.length > 15) {
        console.error("Помилка введення паролю: пароль повинен бути від 3 до 15 символів.");
        return;
      }
  
      const checkUsernameResponse = await axios.post("http://localhost:8080/check-username", {
        username,
      });
  
      if (!checkUsernameResponse.data.isUnique) {
        console.error("Помилка введення імені користувача: ім'я користувача вже існує.");
        return;
      }
  
      const response = await axios.post("http://localhost:8080/register", {
        username,
        email,
        password,
        login,
      });
  
      console.log("Відповідь з сервера:", response.data);
  
      setUsername("");
      setEmail("");
      setPassword("");
      setLogin("");
    } catch (error) {
      console.error("Помилка відправки форми:", error);
    }
  };

  return (
    <div id="register-form">
      <h1>Register Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" onClick={handleRegister} />
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default RegisterForm;
