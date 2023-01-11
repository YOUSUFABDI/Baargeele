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
            <button className="registeration__btn">Register Now</button>
            <button>
              <Link to="/sign">Login</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
