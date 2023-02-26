import RegImg from "../../../assets/images/Security-reg.svg";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./register.css";
import useForm from "../../useForm";
import validateForms from "../../validateForms";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Register = () => {
  const { handleChange, handleSubmit, values, errors, isLoading } =
    useForm(validateForms);

  const [passwordType, setPasswordType] = useState("password");
  const [clickedEyeIcon, setClickedEyeIcon] = useState(false);

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
    <div className="wrapper">
      <nav className="navbar">
        <Header />
      </nav>

      <div className="registeration__container">
        <div className="registeration__reg">
          <div className="registeration__reg__img">
            <img className="reg_img" src={RegImg} alt="reg-img" />
          </div>
          <div className="registration__banner">
            <h2>Create Account</h2>
            <form className="registeration__form__control">
              <div className="registration__header">
                <div className="regisration__input__container">
                  <div
                    className={`${
                      errors.name ? "input__wrapper__error" : "input__wrapper"
                    }`}
                  >
                    <BsFilePerson className="icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <p className="val-reg">{errors.name}</p>}
                </div>
                <div className="regisration__input__container">
                  <div
                    className={`${
                      errors.gmail ? "input__wrapper__error" : "input__wrapper"
                    }`}
                  >
                    <MdOutlineEmail className="icon" />
                    <input
                      type="email"
                      name="gmail"
                      placeholder="Enter Gmail"
                      value={values.gmail}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.gmail && <p className="val-reg">{errors.gmail}</p>}
                </div>
                <div className="regisration__input__container">
                  <div
                    className={`${
                      errors.phone ? "input__wrapper__error" : "input__wrapper"
                    }`}
                  >
                    <BsTelephone className="icon" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="61xxxxxxx"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="val-reg">{errors.phone}</p>}
                </div>
                <div className="regisration__input__container">
                  <div
                    className={`${
                      errors.password
                        ? "input__wrapper__error"
                        : "input__wrapper"
                    }`}
                  >
                    <MdLockOutline className="icon" />
                    <input
                      type={passwordType}
                      name="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {clickedEyeIcon ? (
                      <AiFillEyeInvisible
                        className="icon__eyesplash"
                        onClick={togglePassword}
                      />
                    ) : (
                      <AiFillEye
                        className="icon__eyesplash"
                        onClick={togglePassword}
                      />
                    )}
                  </div>
                  {errors.password && (
                    <p className="val-reg">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="registration__footer">
                <button className="registeration__btn" onClick={handleSubmit}>
                  {isLoading ? "Loading" : "Create Account"}
                </button>
                <div className="registration__sub__footer">
                  <span className="registration__alredy__acc">
                    Already Have Account ?
                  </span>
                  <button className="registration__login__btn">
                    <Link to="/sign">Login</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
