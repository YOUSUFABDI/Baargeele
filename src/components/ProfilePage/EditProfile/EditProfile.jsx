import "./editprofile.css";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import useForm from "../../../useForm";
import validateForms from "../../../validateForms"
import { useLocalData } from "../../../DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditProfile = ({ clickUserHead }) => {

  const { handleChange, handleSubmit, values, errors, isLoading } =
    useForm(validateForms);

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

  return (
    <div
      className={`${clickUserHead ? "edit__profile__section" : "hide__edit__profile"
        }`}
    >
      <h2 className="edit__profile__title">Edit Profile</h2>
      <form className="edit__profile__form">
        <div className="edit__profile__input__wrapper">
          <div className="edit__profile__input">
            <span>
              <BsFilePerson size={24} />
            </span>
            <input
              type="text"
              name="editName"
              placeholder="Enter Your Name"
              value={values.editName}
              onChange={handleChange} />
          </div>

          <div className="edit__profile__input">
            <span>
              <MdOutlineEmail size={24} />
            </span>
            <input type="text" placeholder="Enter Your Email" value={"yufis0488@gmail.com"} />
          </div>

          <div className="edit__profile__input">
            <span>
              <BsTelephone size={24} />
            </span>
            <input type="text" placeholder="Enter Your Number" value={"612126698"} />
          </div>

          <div className="edit__profile__input__pass">
            <span>
              <MdLockOutline size={24} />
            </span>
            <input type="text" placeholder="Enter Password" />
            <span>
              <AiFillEye size={24} />
            </span>
          </div>
        </div>

        <div className="edit__profile__btns">
          <button className="logout__btn"
            onClick={logout}
          >Log Out</button>
          <button className="edit__btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
