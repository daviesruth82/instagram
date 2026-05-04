import React, { useState } from 'react'
import "../Styles/Create.css"
import {data} from "../Components/Post"
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [caption, setCaption] = useState("")

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map((file) => URL.createObjectURL(file))

    setImages(imageUrls)
    setSelectedImage(imageUrls[0])
  }

  const handleSelect = (img) => {
    setSelectedImage(img)
  }

  const handlePost = () => {
  if (!selectedImage) {
    alert("Select an image first");
    return;
  }

  
  const username = localStorage.getItem("username") ;
  if( !username) {
    alert("User not found.");
    navigate("/");
    return;
  }
  console.log("Username:", username);

  const newPost = {
    image: selectedImage,
    caption: caption,
    id: Date.now(),
    name: username,
    time: new Date().toLocaleTimeString(),
  };

  const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

  const updatedPosts = [newPost, ...existingPosts];

  localStorage.setItem("posts", JSON.stringify(updatedPosts));

  alert("upload successful");

  setCaption("");
  setSelectedImage(null);
  setImages([]);

  navigate("/home");
};
  return (
    <div className="create-container">
      <section className='createSection'>

        <div className="topBar">
          <span className="textSmall">Cancel</span>
          <h2 className="title">New Post</h2>
          <span className="action" onClick={handlePost} >
            Post
          </span>
        </div>

        
        <div className="previewWrapper">
          {selectedImage ? (
            <img src={selectedImage} alt="preview" className="previewImage" />
          ) : (
            <div className="previewBox">No Image</div>

          )
          }
        </div>

        
        <div className="captionSection">
          <input
            type="text"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="captionInput"
          />
        </div>

        
        <div className="uploadSection">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
          />
        </div>

        
        <div className="gallerySection">
          <div className="galleryHeader">
            <span className="textSmall">Recents</span>
            <span className="textMuted">Select multiple</span>
          </div>

          <div className="grid">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="grid"
                className="gridItem"
                onClick={() => handleSelect(img)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Create;