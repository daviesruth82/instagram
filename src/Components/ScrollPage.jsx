import React from "react";
import "../Styles/Scroll.css";
import ScrollChild from "./ScrollChild";
import {useState} from "react"; 

const ScrollPage = () => {
  const [posts, setPosts] = useState([]);
  // const addPost=(newPost)=>{
  //   setPosts([...posts, newPost]);
  // };

  return (
    <div className="Scroll-container">
      <div className="Scroll-holder">
        <ScrollChild />
      </div>
    </div>
  );
};

export default ScrollPage;
