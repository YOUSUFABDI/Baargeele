import LoginImg from "../../../assets/images/login.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./sign.css";
import useForm from "../../useForm";
import validateForms from "../../validateForms";

const SignIn = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validateForms);

  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="sign__container">
        <div className="sign__reg__img">
          <img className="sign_img" src={LoginImg} alt="reg-img" />
        </div>
        <div className="login__reg">
          <h2>Login</h2>
          <form className="sign__form__control">
            <div className="sign__reverse">
              <span>Gmail</span>
              <input
                type="text"
                name="loginGmail"
                value={values.loginGmail}
                onChange={handleChange}
              />
              {errors.loginGmail && (
                <p className="val-lg">{errors.loginGmail}</p>
              )}
            </div>
            <div className="sign__reverse">
              <span>Password</span>
              <input
                type="text"
                name="loginPass"
                value={values.loginPass}
                onChange={handleChange}
              />
              {errors.loginPass && <p className="val-lg">{errors.loginPass}</p>}
            </div>
            <div className="sign__forgot__btn">
              <spam>Forgot Password!</spam>
            </div>
            <div className="btms">
              <button className="sign__lg__btn" onClick={handleSubmit}>
                OK
              </button>
              <div className="sign__make__acc">
                <span>Dont't have an account?</span>
                <button>
                  <Link to="/register">Create Account</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
