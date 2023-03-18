import "./editprofile.css";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import useForm from "../../../useForm";
import validateForms from "../../../validateForms";
import { useLocalData } from "../../../DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const EditProfile = ({ clickUserHead }) => {
  const { handleChange, handleSave, values, errors, isLoading } =
    useForm(validateForms);

  const [passwordType, setPasswordType] = useState("password");
  const [clickedEyeIcon, setClickedEyeIcon] = useState(false);

  const { islogin, setIslogin } = useLocalData();
  const navigate = useNavigate();

  function logout() {
    setIslogin(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "false");
    } else {
      localStorage.setItem("isLogin", "false");
      setIslogin(localStorage.getItem("isLogin"));
    }
    toast.success("Logout Success!");
    localStorage.removeItem("userGmail");
    navigate("/");
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setClickedEyeIcon(!false);
      return;
    }
    setPasswordType("password");
    setClickedEyeIcon(false);
  };

  return (
    <div
      className={`${
        clickUserHead ? "edit__profile__section" : "hide__edit__profile"
      }`}
    >
      <h2 className="edit__profile__title">Edit Profile</h2>
      <form className="edit__profile__form">
        <div className="edit__profile__input__wrapper">
          <div className="edit__input__container">
            <div
              className={`${
                errors.editName
                  ? "edit__profile__input__error"
                  : "edit__profile__input"
              }`}
            >
              <span>
                <BsFilePerson size={24} />
              </span>
              <input
                type="text"
                name="editName"
                placeholder="Enter Your Name"
                value={values.editName}
                onChange={handleChange}
              />
            </div>
            {errors.editName && (
              <p className="edit__p__err">{errors.editName}</p>
            )}
          </div>

          <div className="edit__input__container">
            <div
              className={`${
                errors.editGmail
                  ? "edit__profile__input__error"
                  : "edit__profile__input"
              }`}
            >
              <span>
                <MdOutlineEmail size={24} />
              </span>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="editGmail"
                value={values.editGmail}
                onChange={handleChange}
              />
            </div>
            {errors.editGmail && (
              <p className="edit__p__err">{errors.editGmail}</p>
            )}
          </div>

          <div className="edit__input__container">
            <div
              className={`${
                errors.editPhone
                  ? "edit__profile__input__error"
                  : "edit__profile__input"
              }`}
            >
              <span>
                <BsTelephone size={24} />
              </span>
              <input
                type="text"
                placeholder="Enter Your Number"
                name="editPhone"
                value={values.editPhone}
                onChange={handleChange}
              />
            </div>
            {errors.editPhone && (
              <p className="edit__p__err">{errors.editPhone}</p>
            )}
          </div>

          <div className="edit__input__container">
            <div
              className={`${
                errors.editPass
                  ? "edit__profile__input__error"
                  : "edit__profile__input__pass"
              }`}
            >
              <span>
                <MdLockOutline size={24} />
              </span>
              <input
                type={passwordType}
                name="editPass"
                placeholder="Enter Password"
                value={values.editPass}
                onChange={handleChange}
              />
              <span className="edit__eye__icon">
                {clickedEyeIcon ? (
                  <AiFillEyeInvisible size={24} onClick={togglePassword} />
                ) : (
                  <AiFillEye size={24} onClick={togglePassword} />
                )}
              </span>
            </div>
            {errors.editPass && (
              <p className="edit__p__err">{errors.editPass}</p>
            )}
          </div>
        </div>

        <div className="edit__profile__btns">
          <button className="logout__btn" onClick={logout}>
            Log Out
          </button>
          <button className="edit__btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
