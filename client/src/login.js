// LoginForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import axios from "axios";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        login,
        password,
    },{  
      headers: {
      'Content-Type': 'application/json',
    },
      });

      console.log("Відповідь з сервера:", response.data);

    } catch (error) {
      console.error("Помилка відправки форми:", error);
      setErrorMessage("Невірний логін або пароль");
    }
  };

  return (
    <div id="login-form">
      <h1>Login Page</h1>
      <form>
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
        <input type="button" value="Submit" onClick={handleLogin} />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default LoginForm;
