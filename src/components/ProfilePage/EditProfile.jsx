import "./edit-profile.css";
import Header from "../Header/Header";
import UserSection from "./UserSection";
import { useLocalData } from "../../DataContext";
import { useNavigate } from "react-router-dom";
import MakeChange from "./MakeChange";

const EditProfile = () => {
  const { setIsClicked } = useLocalData();
  setIsClicked(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
    setIsClicked(false);
  };

  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="edit__profile__section">
        <div className="edit__profile__user" onClick={handleClick}>
          <UserSection />
        </div>
        <MakeChange />
      </div>
    </>
  );
};

export default EditProfile;
