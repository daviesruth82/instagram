import React from "react";
import "../Styles/SideBar.css";

const SideBar = () => {
  const username = localStorage.getItem("username") || "Davies";

  
  const profile = username.charAt(0).toUpperCase();

  return (
    <div className="Side-container">
      <div className="Side-holder">
        
        <section className="user-section">
          <div className="holders">
            
            <div className="profile-circle">{profile}</div>

            <h3>{username}</h3>
          </div>

          <div className="action">
            <p>switch</p>
          </div>
        </section>

        
        <section className="account-section">
          <div className="account-holder">
            <h3>Suggested for you</h3>
            <p>See all</p>
          </div>

          {[1, 2, 3, 4, 5].map((item) => (
            <div className="accounts" key={item}>
              <div className="holders">
                <div className="profile-circle">A</div>
                <h3>AstridTech</h3>
              </div>
              <div className="action">
                <p>Follow</p>
              </div>
            </div>
          ))}
        </section>

        <footer>
          <ul>
            <a href="">
              <li>.About</li>
            </a>
            <a href="">
              <li>.Help</li>
            </a>
            <a href="">
              <li>.Press</li>
            </a>
            <a href="">
              <li>.API</li>
            </a>
            <a href="">
              <li>.Jobs</li>
            </a>
            <a href="">
              <li>.Privacy</li>
            </a>
            <a href="">
              <li>.Terms</li>
            </a>
            <a href="">
              <li>.Locations</li>
            </a>
            <a href="">
              <li>.Language</li>
            </a>
            <a href="">
              <li>.Meta Verified</li>
            </a>
          </ul>

          <p> © 2026 INSTAGRAM FROM META</p>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
