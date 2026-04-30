import React from "react";
import "../Styles/SideBar.css";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="Side-container">
      <div className="Side-holder">
        <section className="user-section">
          <div className="holders">
            <CgProfile className="profiles" />
            <h3>AstridTech</h3>
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
          <div className="accounts">
            <div className="holders">
              <CgProfile className="profiles" />
              <h3>AstridTech</h3>
            </div>
            <div className="action">
              <p>Follow</p>
            </div>
          </div>

          <div className="accounts">
            <div className="holders">
              <CgProfile className="profiles" />
              <h3>AstridTech</h3>
            </div>
            <div className="action">
              <p>Follow</p>
            </div>
          </div>

          <div className="accounts">
            <div className="holders">
              <CgProfile className="profiles" />
              <h3>AstridTech</h3>
            </div>
            <div className="action">
              <p>Follow</p>
            </div>
          </div>

          <div className="accounts">
            <div className="holders">
              <CgProfile className="profiles" />
              <h3>AstridTech</h3>
            </div>
            <div className="action">
              <p>Follow</p>
            </div>
          </div>

          <div className="accounts">
            <div className="holders">
              <CgProfile className="profiles" />
              <h3>AstridTech</h3>
            </div>
            <div className="action">
              <p>Follow</p>
            </div>
          </div>
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
