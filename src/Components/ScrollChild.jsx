import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import {data} from "./Post";
import "../Styles/Scroll.css";

const ScrollChild = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
   if(!storedPosts.length > 0) {
    setPosts(storedPosts);
   } else{
    setPosts(data);
    localStorage.setItem("posts", JSON.stringify(data));    
   }  
  }, []);


  return (
    <>
      {posts.map((item) => (
        <div className="Card-con" key={item.id}>
          <article className="card">
            <div className="profile">
              <div style={{ display: "flex" }}>
                <CgProfile className="profiles" />
                <p>{item.name}</p>
                <MdVerified className="verify" />
                <p>{item.time}</p>
              </div>

              <p style={{ color: "blue" }}>
                Follow <span>...</span>
              </p>
            </div>

            <article className="images">
              <img src={item.image} alt={item.caption} />
            </article>

            <section
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div className="caption-con">
                <p>{item.name}</p>
                <MdVerified className="verify" />
              </div>
              <p>{item.caption}</p>
            </section>
          </article>
        </div>
      ))}
    </>
  );
};

export default ScrollChild;
