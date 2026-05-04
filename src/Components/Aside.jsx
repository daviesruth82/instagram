import React from "react";
import "../Styles/Aside.css";
import { FaInstagram } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TfiHeart } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { LiaBoxesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";


const Aside = () => {
  const navigate = useNavigate()
  return (
    <div className="Aside-Container">
      <div className="Aside-holder">
        <div className="Aside-icons">
          <div>
            <FaInstagram className="icons" />
          </div>
          <div className="icon2">
            <div className="holder">
              <GoHomeFill className="icons" />
              <p>Home</p>
            </div>
            <div className="holder">
              <GoVideo className="icons" />
              <p>Reels</p>
            </div>
            <div className="holder">
              <BsSend className="icons" />
              <p>Messages</p>
            </div>
            <div className="holder">
              <IoSearch className="icons" />
              <p>Search</p>
            </div>
            <div className="holder">
              <MdOutlineExplore className="icons" />
              <p>Explore</p>
            </div>
            <div className="holder">
              <TfiHeart className="icons" />
              <p>Notifications</p>
            </div>
            <div className="holder" onClick={() => navigate("/create")}>
              <AiOutlinePlus className="icons" />
              <p>Create</p>
            </div>
            <div className="holder">
              <CgProfile className="icons" />
              <p>Profile</p>
            </div>
          </div>
          <div className="icon3">
            <div className="holder">
              <IoMenu className="icons" />
              <p>More</p>
            </div>
            <div className="holder">
              <LiaBoxesSolid className="icons" />
              <p>Also from Meta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
