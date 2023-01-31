import "./otp.css";
import Header from "../Header/Header";
import authImg from "../../../assets/images/auth.svg";
import { useEffect, useState } from "react";

const OtpPage = () => {
  const validateOTP = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };


  useEffect(() => {
    const allInput = Array.from(document.querySelectorAll("input"));
    allInput.map((input, index) => {
      input.addEventListener("keydown", (e) => {
        if (e.keyCode === 8 && e.target.value === "")
          allInput[Math.max(0, index - 1)].focus();
      });
      input.addEventListener("input", (e) => {
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? "";
        const lastInputBox = index === allInput.length - 1;
        const didInsertContent = first !== undefined;
        if (didInsertContent && !lastInputBox) {
          allInput[index + 1].focus();
          allInput[index + 1].value = rest.join("");
          allInput[index + 1].dispatchEvent(new Event("input"));
        }
      });
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="opt__section">
        <div className="opt__image">
          <img className="opt__auth__img" src={authImg} alt="auth-img" />
        </div>
        <div className="opt__verification">
          <div className="opt__check">
            <h2 className="opt__title">OTP Verification</h2>
            <div className="opt__title__gmail">
              <h3 className="opt__sub__title">Enter The OTP Sent To</h3>
              <p className="opt__gmail">yufis0488@gmail.com</p>
            </div>
          </div>
          <div className="opt__inputs">
            <form className="otp__form__control" onSubmit={(e) => e.preventDefault()}>
              <div className="opt__inputs__grid">
                <input type="text" maxLength={1} onKeyPress={validateOTP} />
                <input type="text" maxLength={1} onKeyPress={validateOTP} />
                <input type="text" maxLength={1} onKeyPress={validateOTP} />
                <input type="text" maxLength={1} onKeyPress={validateOTP} />
              </div>
              <button className="opt__create__btn">Create Account</button>
            </form>
          </div>
          <div className="opt__footer">
            <span className="opt__dont__have__acc">Don't have an account?</span>
            <span className="opt__create__new__acc">Create Account</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
