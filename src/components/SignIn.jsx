import RegImg from "../../assets/images/lgImg.png";
import { Link } from "react-router-dom";
import Header from "./Header";

const SignIn = () => {
  return (
    <>
      <Header />

      <div className="sign__container">
        <div className="sign__reg__img">
          <img className="sign_img" src={RegImg} alt="reg-img" />
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
              <spam>Forgot Password!</spam>
            </div>
            <div className="btms">
              <button className="sign__lg__btn">Login</button>
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
