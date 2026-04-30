import React from "react";
import "../Styles/Scroll.css";
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";

const ScrollPage = () => {
  return (
    <div className="Scroll-container">
      <div className="Scroll-holder">
        <div className="Card-con">
          <article className="card">
            <div className="profile">
              <div style={{ display: "flex" }}>
                <CgProfile className="profiles" />
                <p>Astrid Astrid</p>
                <MdVerified className="verify" />
                <p>.4h</p>
              </div>
              <div>
                <p style={{ color: "blue" }}>
                  Follow <span>...</span>
                </p>
              </div>
            </div>
            <article className="images">
              <img
                src="https://media.istockphoto.com/id/2210411614/photo/young-black-woman-with-braids-posing-in-studio-with-neutral-background.jpg?s=612x612&w=0&k=20&c=yQZITFcXgiLWDMxj0-8Y7m0y4uHEIW-SeODV8p7ivyQ="
                alt=""
              />
            </article>
            <section style={{ display: "flex" }}>
              <p>Astrid Astrid</p>
              <MdVerified className="verify" />
              <p>BLACK IS BEAUTIFUL</p>
            </section>
          </article>

          <article className="card">
            <div className="profile">
              <div style={{ display: "flex" }}>
                <CgProfile className="profiles" />
                <p>Astrid Astrid</p>
                <MdVerified className="verify" />
                <p>.4h</p>
              </div>
              <div>
                <p style={{ color: "blue" }}>
                  Follow <span>...</span>
                </p>
              </div>
            </div>
            <article className="images">
              <img
                src="https://media.istockphoto.com/id/2210411614/photo/young-black-woman-with-braids-posing-in-studio-with-neutral-background.jpg?s=612x612&w=0&k=20&c=yQZITFcXgiLWDMxj0-8Y7m0y4uHEIW-SeODV8p7ivyQ="
                alt=""
              />
            </article>
            <section style={{ display: "flex" }}>
              <p>Astrid Astrid</p>
              <MdVerified className="verify" />
              <p>BLACK IS BEAUTIFUL</p>
            </section>
          </article>

          <article className="card">
            <div className="profile">
              <div style={{ display: "flex" }}>
                <CgProfile className="profiles" />
                <p>Astrid Astrid</p>
                <MdVerified className="verify" />
                <p>.4h</p>
              </div>
              <div>
                <p style={{ color: "blue" }}>
                  Follow <span>...</span>
                </p>
              </div>
            </div>
            <article className="images">
              <img
                src="https://media.istockphoto.com/id/2210411614/photo/young-black-woman-with-braids-posing-in-studio-with-neutral-background.jpg?s=612x612&w=0&k=20&c=yQZITFcXgiLWDMxj0-8Y7m0y4uHEIW-SeODV8p7ivyQ="
                alt=""
              />
            </article>
            <section style={{ display: "flex" }}>
              <p>Astrid Astrid</p>
              <MdVerified className="verify" />
              <p>BLACK IS BEAUTIFUL</p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
