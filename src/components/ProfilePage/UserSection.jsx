import "./user-section.css";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocalData } from "../../DataContext";

const UserSection = () => {
  const { isClicked, setIsClicked } = useLocalData();

  return (
    <NavLink to="/editprofile" onClick={() => setIsClicked(true)}>
      <div className="profile__user">
        <div className="profile__user__img">
          <FaUserCircle size={100} />
        </div>
        <div className="profile__name-gmail">
          <span className="profile__name">YOUSUF ABDI</span>
          <span className="profile__gmail">yufis0844@gmail.com</span>
        </div>
        <div className="profile__arrow">
          <MdOutlineArrowForwardIos
            size={24}
            className={`profile__arrow-img ${isClicked && "active"}`}
          />
        </div>
      </div>
    </NavLink>
  );
};

export default UserSection;
