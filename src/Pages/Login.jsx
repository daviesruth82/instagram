import React from "react";
import "../Styles/Login.css";
import { FaInstagram } from "react-icons/fa";
import Button from "../Components/Button";
import { FaMeta } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (e) => {
    e.preventDefault(); 

    if (username === "admin" && password === "password") {
      alert("Login successful!");
      setLoading(true);

      setTimeout(() => {
        setIsLoggedIn(true);
        navigate("/home");
      }, 1000); 
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      {loading ? (
        <div className="welcome-message">
          <FaInstagram className="welcome-icon" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="login-holder">
            <div className="login-right">
              <FaInstagram className="login-icon" />
              <div className="right-holder">
                <h1>See everyday moments from your close friends.</h1>
                <div className="image">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/yJ/r/53X3pk-t2Gn.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <hr />

            <div className="login-form">
              <div className="form-holder">
                <h2>Log in to Instagram</h2>

                <form
                  onSubmit={validate}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <section className="input-holder">
                    <input
                      type="text"
                      placeholder="Mobile number, username or email address"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </section>

                  <section className="Btn-holder">
                    <article className="btn-con">
                      <Button
                        backgroundColor="rgb(153,193,243)"
                        color="white"
                        text="Log in"
                        className="btn"
                      />
                      <Button
                        text="Forgotten Password ?"
                        className="btn"
                        color="black"
                        backgroundColor="lightgray"
                      />
                    </article>

                    <article className="btn-con">
                      <Button
                        backgroundColor="white"
                        color="black"
                        text="Log in with Facebook"
                        className="btn-1"
                      />
                      <Button
                        text="Create new account"
                        className="btn-2"
                        color="blue"
                        backgroundColor="white"
                      />
                    </article>
                  </section>
                </form>

                <div className="meta">
                  <FaMeta className="meta-icon" />
                  <p>Meta</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <footer className="login-footer">
            <div className="footer-holder">
              <ul>
                <li>Instagram lite</li>
                <li>Meta AI</li>
                <li>Threads</li>
                <li>Contact uploading and non-users</li>
                <li>Meta Verified</li>
              </ul>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Login;
