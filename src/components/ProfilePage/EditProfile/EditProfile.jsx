import "./editprofile.css";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const EditProfile = ({ clickUserHead }) => {
  return (
    <div
      className={`${
        clickUserHead ? "edit__profile__section" : "hide__edit__profile"
      }`}
    >
      <h2 className="edit__profile__title">Edit Profile</h2>
      <form className="edit__profile__form">
        <div className="edit__profile__input__wrapper">
          <div className="edit__profile__input">
            <span>
              <BsFilePerson size={24} />
            </span>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="edit__profile__input">
            <span>
              <MdOutlineEmail size={24} />
            </span>
            <input type="text" placeholder="Enter Your Email" />
          </div>

          <div className="edit__profile__input">
            <span>
              <BsTelephone size={24} />
            </span>
            <input type="text" placeholder="Enter Your Number" />
          </div>

          <div className="edit__profile__input__pass">
            <span>
              <MdLockOutline size={24} />
            </span>
            <input type="text" placeholder="Enter Your Number" />
            <span>
              <AiFillEye size={24} />
            </span>
          </div>
        </div>

        <div className="edit__profile__btns">
          <button className="logout__btn">Log Out</button>
          <button className="edit__btn">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
