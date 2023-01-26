import "./user-section.css";
import profileImg from "../../../assets/images/profile-img.png";
import arrowImg from "../../../assets/images/arrow.png";

import { useState } from "react";

const UserSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClck = () => setIsClicked(true);
  return (
    <div
      className="profile__user"
      onClick={() => {
        handleClck;
      }}
    >
      <div className="profile__user__img">
        <img className="profile__image" src={profileImg} alt="profile-image" />
      </div>
      <div className="profile__name-gmail">
        <span className="profile__name">YOUSUF ABDI</span>
        <span className="profile__gmail">yufis0844@gmail.com</span>
      </div>
      <div className="profile__arrow">
        <img
          className={`profile__arrow-img ${isClicked && "active"}`}
          src={arrowImg}
          alt="arrow-image"
        />
      </div>
    </div>
  );
};

export default UserSection;
