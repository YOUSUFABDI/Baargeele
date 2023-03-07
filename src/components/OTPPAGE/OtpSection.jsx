import "./otp.css";
import Header from "../Header/Header";
import authImg from "../../../assets/images/auth.svg";
import useForm from "../../useForm";
import validateForms from "../../validateForms";
import OTPInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";


const override = {
  display: "block",
  margin: "0 auto",
};

const OtpPage = () => {
  const { handleChangeOTP, handleOTP, setValues, values, errors, isLoading } =
    useForm(validateForms);
  const location = useLocation();
  const gmail = location.state.userGmail;

  return (
    <div className="wrapper">
      <nav className="navbar">
        <Header />
      </nav>
      <div className="opt__section">
        <div className="otp__wrapper">
          <div className="opt__image">
            <img className="opt__auth__img" src={authImg} alt="auth-img" />
          </div>
          <div className="opt__verification">
            <div className="opt__container">
              <div className="opt__check">
                <h2 className="opt__title">OTP Verification</h2>
                <div className="opt__title__gmail">
                  <h3 className="opt__sub__title">Enter The OTP Sent To</h3>
                  <p className="opt__gmail">{gmail}</p>
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
                      value={values.otp}
                      type
                      inputStyle={`${errors.otp ? "inputStyleError" : "inputStyle"
                        }`}
                      numInputs={4}
                      separator={<span></span>}
                    />
                    {errors.otp && <p className="val-lg1">{errors.otp}</p>}
                  </div>
                  <button
                    className="opt__create__btn"
                    onClick={() => {
                      setValues({ gmail: gmail, otp: values.otp });
                      handleOTP(event);
                    }}
                  >
                    {isLoading ? (
                      <PuffLoader
                        color="#000"
                        loading={isLoading}
                        cssOverride={override}
                        size={40}
                      />
                    ) : ("Verify")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
