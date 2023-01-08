import RegImg from "../images/lgImg.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign__container">
      <div className="sign__reg__img">
        <img src={RegImg} alt="reg-img" />
      </div>
      <div className="login__reg">
        <h2>Login</h2>
        <form className="sign__form__control">
          <div className="sign__reverse">
            <span>Gmail</span>
            <input type="text" />
          </div>
          <div className="sign__reverse">
            <span>Password</span>
            <input type="text" />
          </div>
          <div className="sign__forgot__btn">
            <span>Forgot Password!</span>
          </div>
          <button className="sign__lg__btn">Login</button>
          <div className="sign__make__acc">
            <span>Dont't have an account?</span>
            <button>
              <Link to="/register">Create Account</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
