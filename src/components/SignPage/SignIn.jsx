// import LoginImg from "baargeelle.com/images/Computer-login.svg";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./sign.css";
import useForm from "../../useForm";
import validateForms from "../../validateForms";
import PuffLoader from "react-spinners/PuffLoader";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
};

const SignIn = () => {
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
      <div className="sign__container">
        <div className="login__reg">
          <div className="sign__reg__img">
            <img className="sign_img" src={"https://baargeelle.com/images/Computer-login.svg"} alt="reg-img" />
          </div>
          <div className="login__banner">
            <h2>Login</h2>
            <form className="sign__form__control">
              <div className="sign__header">
                <div className="sign__input__container">
                  <div
                    className={`${
                      errors.loginGmail
                        ? "input__sign__wrapper__error"
                        : "input__sign__wrapper"
                    }`}
                  >
                    <MdOutlineEmail className="sign__icon" />
                    <input
                      type="email"
                      name="loginGmail"
                      placeholder="Enter Gmail"
                      value={values.loginGmail}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.loginGmail && (
                    <p className="val-lg">{errors.loginGmail}</p>
                  )}
                </div>
                <div className="sign__input__container">
                  <div
                    className={`${
                      errors.loginPass
                        ? "input__sign__wrapper__error"
                        : "input__sign__wrapper"
                    }`}
                  >
                    <MdLockOutline className="sign__icon" />
                    <input
                      type={passwordType}
                      name="loginPass"
                      placeholder="Enter Password"
                      value={values.loginPass}
                      onChange={handleChange}
                    />
                    {clickedEyeIcon ? (
                      <AiFillEyeInvisible
                        className="sign__icon__eyesplash"
                        onClick={togglePassword}
                      />
                    ) : (
                      <AiFillEye
                        className="sign__icon__eyesplash"
                        onClick={togglePassword}
                      />
                    )}
                  </div>
                  {errors.loginPass && (
                    <p className="val-lg">{errors.loginPass}</p>
                  )}
                </div>
                <div
                  className={`${
                    errors.loginGmail
                      ? "sign__forgot__btn__error "
                      : "sign__forgot__btn"
                  }`}
                >
                  <spam>Forgot Password!</spam>
                </div>
              </div>
              <div className="sign__footer">
                <button className="sign__lg__btn" onClick={handleSubmit}>
                  {isLoading ? (
                    <PuffLoader
                      color="#000"
                      loading={isLoading}
                      cssOverride={override}
                      size={40}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="sign__make__acc">
                  <span>Dont't have an account?</span>
                  <button className="sign__create__btn">
                    <Link to="/register">Create Account</Link>
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

export default SignIn;
