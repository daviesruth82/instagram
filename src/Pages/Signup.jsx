import React, { useState } from "react";
import "../Styles/Signup.css";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const checkInput = () => {
    if (!username || !email || !password || !confirm_password) {
      alert("Fields cannot be empty");
      return false;
    }

    if (password !== confirm_password) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  const userData = (e) => {
    e.preventDefault();

    if (!checkInput()) return;

    const dataBase = JSON.parse(localStorage.getItem("dataBase")) || [];

    const newUser = {
      username,
      email,
      password,
    };

    dataBase.push(newUser);
    localStorage.setItem("dataBase", JSON.stringify(dataBase));

    alert("Signup successful ");
    navigate("/Login");
  };

  return (
    <main className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>

        <form onSubmit={userData}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button text="Sign Up" className="signUp-btn" />
        </form>
      </div>
    </main>
  );
};

export default Signup;
