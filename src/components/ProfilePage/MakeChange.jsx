import { useNavigate } from "react-router-dom";

const MakeChange = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    setIsClicked(false);
  };

  return (
    <div className="edit__profile">
      <h2 className="edit__profile__title">Edit Profile</h2>
      <div className="edit__profile__inputs">
        <div className="edit__profile__input__name">
          <span className="edit__profile__name">Name</span>
          <input className="edit__profile__input" type="text" />
        </div>
        <div className="edit__profile__input__name">
          <span className="edit__profile__name">Gmail</span>
          <input className="edit__profile__input" type="text" />
        </div>
        <div className="edit__profile__input__name">
          <span className="edit__profile__name">Phone</span>
          <input className="edit__profile__input" type="text" />
        </div>
        <div className="edit__profile__input__name">
          <span className="edit__profile__name">Password</span>
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
  );
};

export default MakeChange;
