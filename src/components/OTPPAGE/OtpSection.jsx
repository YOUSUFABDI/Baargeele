import "./otp.css";
import Header from "../Header/Header";
import authImg from "../../../assets/images/auth.svg";

const OtpPage = () => {
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
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="opt__create__btn">Create Account</button>
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
