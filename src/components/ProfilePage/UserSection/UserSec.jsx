import "./user-sec.css";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const UserSec = ({ setClickUserHead, clickUserHead }) => {
  const handleHeadClick = () => {
    setClickUserHead(!clickUserHead);
  };

  return (
    <div className="wrapper">
      <div className="user__profile__head" onClick={handleHeadClick}>
        <div className="user__icon__user__info">
          <FaUserCircle className="user__icon" />
          <div className="user__profile__name__gmail">
            <span>Yuusuf Abdi</span>
            <span>yufis0488@gmail.com</span>
          </div>
        </div>
        <MdArrowForwardIos
          className={`${clickUserHead ? "active__icon" : "arrow__down__icon"}`}
        />
      </div>
    </div>
  );
};

export default UserSec;
