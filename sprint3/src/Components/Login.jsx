import {} from "react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/App.css';

function Login (){
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("username", "UsuarioNext");
    sessionStorage.setItem("password", "SenhaSprint");

    const savedUser = sessionStorage.getItem("username");
    const savedPass = sessionStorage.getItem("password");

    if (savedUser && savedPass) {
      setUsername(savedUser);
      setPassword(savedPass);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert("Bem-vindo!");

      const userId = Math.floor(Math.random() * 1000000); 
      localStorage.setItem("userData", JSON.stringify({ userId, username }));

      navigate("/");
    } else {
      alert("Esse usuário não existe.");
    }
  };

  return (
    <>
      <div id="login" className="container">
        <div className="loginBox">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
};

export default Login;