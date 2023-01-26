import "./edit-profile.css";
import Header from "../Header/Header";
import UserSection from "./UserSection";
import { useLocalData } from "../../DataContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { setIsClicked } = useLocalData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
    setIsClicked(false);
  };

  const handleLogOut = () => {
    navigate("/");
    setIsClicked(false);
  };

  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="edit__profile__section">
        <div onClick={handleClick}>
          <UserSection />
        </div>
        <div className="edit__profile">
          <h2 className="edit__profile__title">Edit Profile</h2>
          <div className="edit__profile__inputs">
            <div className="edit__profile__input__name">
              <span className="edit__profile__name">Name</span>
              <input className="edit__profile__input" type="text" />
            </div>
            <div className="edit__profile__input__name">
              <span className="edit__profile__name">Name</span>
              <input className="edit__profile__input" type="text" />
            </div>
          </div>
          <div className="profile__edit__logout">
            <button className="profile__logout__btn" onClick={handleLogOut}>
              Log Out
            </button>
            <button className="profile__edit__btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
