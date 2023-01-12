import RegImg from "../../../assets/images/lgImg.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./register.css";

const Register = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>

      <div className="registeration__container">
        <div className="registeration__reg__img">
          <img className="reg_img" src={RegImg} alt="reg-img" />
        </div>
        <div className="registeration__reg">
          <h2>Register</h2>
          <form className="registeration__form__control">
            <div className="registeration__reverse">
              <span>Name</span>
              <input type="text" />
            </div>
            <div className="registeration__reverse">
              <span>Phone Number</span>
              <input type="text" />
            </div>
            <div className="registeration__reverse">
              <span>Gmail</span>
              <input type="text" />
            </div>
            <div className="registeration__reverse">
              <span>Password</span>
              <input type="text" />
            </div>
            <div className="registration__footer">
              <button className="registeration__btn">Register Now</button>
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
    </>
  );
};

export default Register;
