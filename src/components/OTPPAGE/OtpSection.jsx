import "./otp.css";
import Header from "../Header/Header";
import authImg from "../../../assets/images/auth.svg";
import { useEffect, useState } from "react";
import useForm from "../../useForm";
import validateForms from "../../validateForms";
import OTPInput from "react-otp-input";

const OtpPage = () => {
  const { handleChangeOTP, handleOTP, OTP, errors } = useForm(validateForms);

  // const validateOTP = (event) => {
  //   if (!/[0-9]/.test(event.key)) {
  //     event.preventDefault();
  //   }
  // };

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
            <form
              className="otp__form__control"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="opt__inputs__grid">
                <OTPInput
                  onChange={handleChangeOTP}
                  value={OTP}
                  type
                  inputStyle="inputStyle"
                  numInputs={4}
                  separator={<span></span>}
                />
                {!OTP && <p>err</p>}
              </div>
              <button className="opt__create__btn" onClick={handleOTP}>
                Create Account
              </button>
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
